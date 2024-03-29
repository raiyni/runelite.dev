---
title: Recent performance regressions and Tombs of Amascut
description: Recent performance regressions and Tombs of Amascut
author: Adam
---

This is a bit of a tech blog about the ToA release and the stability issues the client has been having, feel free to skip it if that isn't your thing.

---

After the release of ToA on Aug 24 we saw a large number of reports from users about the client destabilizing in ToA, either crashing, or running with low FPS. We did not have good answers for players at that time due to the confusion of receiving so many error reports, often conflicting, at the same time. We now feel like we've identified and fixed the root cause, which this post is about.

Note that this post is about _client lag_, which is the client dropping frames, and not _network lag_, which is the time between an action being done and the server receiving the action, nor _server lag_, which is when the server skips ticks, causing time to essentially stop.

The cause of the lag issues have been due to Java garbage collection pressure. There are two different types of pressure which we will cover:

The first is caused by there being very little free memory. It becomes difficult to allocate additional memory since it often first require the garbage collector to run. The garbage collector will pause the client until it is able to find enough memory to release to fulfil each allocation. Since most of the memory is in use, it is a difficult and slow process, leading to long pauses and lag.

The second is caused by many small allocations. The garbage collector must keep track of these many different small allocations and handle releasing all of them, which is computationally expensive. So while there _is_ memory available to be released, and potentially even free memory available, the process of releasing it is slow enough that it causes pauses whenever the GC is run.

After identifying the GC pressure issues fairly early on after the update, we began recommending users update their launcher if they are on one of the old pre-2.0 launchers (1.6, 1.5, and older). The newer launchers use the newer G1 garbage collector, while the 1.x launcher uses Concurrent Mark Sweep. G1 runs faster (that is, releases memory, faster) as well as pauses for a shorter amount of time (less frame drops), so is a good stop gap against type 2 pressure. This is not really a solution, and is instead trying to solve a symptom of the real problem, but on sufficiently powerful machines worked for some people.

If you still do have an old launcher (check the `Info` panel in the client), it can be a good idea to update it due to these GC changes - even though we do believe the problems to be fixed even on the older launchers. A common misconception is that the launcher automatically updates itself, but that is not the case. The launcher automatically updates the client, but there is no functionality to update the launcher.

In update 202 from last December, Jagex added a new-to-OSRS animation system. This new system allows Jagex to make much more fine-grained animations with smoother movements, and take advantage of the full 50FPS the client usually runs at - which most animations do not. This system was used for the first time with the release of ToA, and the code for it is the cause of the GC pressure. Notably it _both_ uses a large amount of memory and also causes a large number of allocations.

This problem compounded badly with 3rd party plugins. As you may know, it is possible to install 3rd party plugins into RuneLite via the pluginhub. The pluginhub plugins vary in quality wildly, and some of them consume _lots_ of memory. We have in total allocated 512mb at the JVM for the entire client, which leaves conservatively about 150mb of memory for all 3rd party plugins. With the new animation code using so much memory, users with too many bad plugins also noticed performance issues, even on the newer launcher. The high variance in plugin installations between users made it difficult to identify exactly how many problems there were and where they were.

While it is possible to increase the 512mb memory limit, I think it should be a measure of last resort. It will help if the application is legitimately out of memory, but if it isn't it can actually have negative consequences. Java prefers to only GC infrequently, or if it has to, and so prefers to allocate new memory vs reusing old memory. Setting an artificially high heap size can then end up with an application with a relatively high memory footprint that is mostly garbage. This just eats memory unnecessarily, and can slow down GC times as there is more to collect. RuneLite typically runs at 170-350mb (varies greatly with location and also plugins), but safely under the 512mb limit.

Since the Jagex animation code is not well optimized, we began looking at ways to improve it. On Aug 26 we pushed out a patch which rewrote some of the Jagex animation code to minimize the number of live objects it uses for animations. We do this by inlining small arrays, typically vectors or matrices, into their enclosing class, such as:

```java
class Vec4 {
      float[] v = new float[4];
}
```

into

```java
class Vec4 {
      float v0;
      float v1;
      float v2;
      float v3;
}
```

The former has 2 objects, the `Vec4` and the `float[4]`, while the latter only has one, despite using the same amount of memory.

This removed an enormous amount of type 2 GC pressure, which fixed the large problems for most people. At this point, running the client in safe mode to disable 3rd party plugins worked very well, and we could no longer find any credible crash reports of the client when running in safe mode.

With that fixed, the client was still using a much larger amount of memory than normal, just with less live objects. Thus the remaining issue reports were all from users with type 1 GC pressure due to pluginhub plugins. We began digging through user reported heap dumps and identified a few notable offenders, most prominently: the HD plugin.

The HD plugin has complex code dealing with coloring models, and as a result tries to cache that computation to reuse between frames. This normally is okay, and has been working correctly for some time. However with the addition of the new animations, particularly animations which affect translucency, since the number of unique frames the animated models has is _much_ higher than what would normally be seen, it was computing and caching a lot of color data. This snowballed a bit when combined with the very large sizes of the ToA boss models (many are well over 5k faces), which are much larger than anything else you would typically find. I've excluded most of these from being cached, and also optimized the way which is it storing the cached data. This went out in updates on Aug 31 and Sep 1 as 1.1.3.1 and 1.1.3.2, and from all reports has removed the ToA lag with the HD plugin enabled.

After this we began looking at ways to optimize the Jagex client further to not use as much memory. We found the vast majority of the memory used by the animation system was used to precompute animation tables, however, precomputing them was not noticeably faster than just computing the animations on demand. We then proceeded to rewrite large portions of the new animation system, and were able to remove most of the additional memory overhead incurred by the new system. This went out in an update on Sep 3.

---

With that, we think that all of the ToA performance regressions are solved. Hopefully it stays that way. Sorry for all of the issues over the last couple weeks.

\- Adam
