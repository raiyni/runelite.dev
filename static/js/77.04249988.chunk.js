(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[77],{666:function(e,n){e.exports={title:"1.5.5 Release",description:"Chat timestamps, cooking plugin, and quick hide ground items overlay",author:"Adam",body:'<p>A chat timestamp plugin was added which adds a timestamp to messages.</p>\n<p><img src="/img/blog/1.5.5-Release/timestamp.png" alt="timestamp"></p>\n<p>A cooking plugin has been added which tracks success and burn rates.</p>\n<p><img src="/img/blog/1.5.5-Release/cooking.png" alt="timestamp"></p>\n<p>The ground items overlay can now be quickly hidden by double tapping alt. It can\nbe unhidden by pressing alt again. Thanks to\n<a href="https://github.com/Berry-95" native="" rel="nofollow">@Berry-95</a> for this contribution.</p>\n<p><img src="/img/blog/1.5.5-Release/grounditems.gif" alt="grounditems"></p>\n<p>Gargoyles, desert lizards, mutated zygomites, and rockslugs now have an overlay\nshown when they are weak and can be killed with their corresponding item.</p>\n<p>The xp drop plugin can now be configured to show fake XP drops at tick intervals,\nif there is no xp drop at that time.</p>\n<p><img src="/img/blog/1.5.5-Release/xpdrop.png" alt="grounditems"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix GPU plugin sometimes getting stuck in a canvas rebuild loop after the\nclient starts</li>\n<li>Fix level 37 wilderness hot clue step location</li>\n<li>Add Bottle of Wine stats to item stats plugin</li>\n<li>Add silver jewellery to crafting skill calculator</li>\n<li>Add missing empty ammo slot requirements to emote clues</li>\n<li>Prevent overlays rendering if fullscreen map is open</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>15987632 (1):\n      Fix level 37 wilderness hot clue step location (#6990)\n\nAdam (17):\n      Revert &quot;config panel: change spinner change listener to a focus listener to reduce change spam&quot;\n      config manager: defer submitting config changes to config service\n      config manager: correct adding unset keys to pendingChanges\n      api: add timestamps to message nodes, expose message id\n      xp drop plugin: add disabled xp drop ticker\n      http api: add loot tracker service and client\n      loot tracker: submit loot to api\n      Revert &quot;Fix freeze on disabling GPU plugin&quot;\n      Revert &quot;Remove distance check from agility plugin&quot;\n      http service: remove tomcat deploy\n      Remove cache-server\n      emote clue: add missing requirement to &quot;Clap in the magic axe hut&quot;\n      ground items config: correct formatting from previous commit\n      http service: add endpoint for websocket session count\n      client: add cooking plugin\n      api: mark getTransformedComposition as Nullable\n      slayer plugin: fix npe from getTransformedComposition returning null\n\nDavid Meredith (1):\n      Add Bottle of Wine stats to item stats plugin (#6989)\n\nHenry Darnell (1):\n      Add silver jewelry to crafting skill calculator\n\nLoopytop (1):\n      Add Wintertodt plugin description\n\nMagic fTail (2):\n      Add timestamp plugin\n      Fix the description of the wintertodt plugin and add boss tag\n\nMonsterxSync (1):\n      Add missing clue requirement &quot;Salute in warriors guild&quot;\n\nSam Beresford (2):\n      Add ability to hide all ground items on double tap of hotkey(ALT) (#6712)\n      Add item overlay to show when monsters are weak enough to finish off (#6710)\n\nTheStonedTurtle (1):\n      Fix party hat buy limits\n\nTomas Slusny (2):\n      Make GL version choosing platform specific\n      Add space after timestamp\n\nWilliam (1):\n      Add missing empty ammmo slot requirement to emote clues (#7002)\n\ntrimbe (1):\n      Prevent overlays rendering if fullscreen map is open\n</code></pre>\n',image:"/img/blog/1.5.5-Release/timestamp.png"}}}]);
//# sourceMappingURL=77.04249988.chunk.js.map