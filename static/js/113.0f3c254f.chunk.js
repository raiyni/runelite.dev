(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[113],{702:function(e,n){e.exports={title:"1.5.43 Release",description:"Camera plugin right-click rotate, clan chat confirm kick dialog, and bugfixes",author:"Jordan",body:'<p>The newly-renamed <a href="https://github.com/runelite/runelite/wiki/Camera" native="" rel="nofollow">Camera plugin</a> now offers an\noption to rotate the camera using your right mouse button when no menu options are available. It\nalso offers further options to map the middle mouse button to open the right-click menu and to\nignore the &quot;Examine&quot; menu option for right-click camera rotation. Thanks to\n<a href="https://github.com/Wynadorn" native="" rel="nofollow">@Wynadorn</a> for this contribution!</p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Clan-Chat" native="" rel="nofollow">Clan Chat plugin</a> now has an option to\ndisplay a chat prompt to confirm kicking a player to help avoid accidental kicks! Thanks to\n<a href="https://github.com/TheStonedTurtle" native="" rel="nofollow">@TheStonedTurtle</a> for this feature.</p>\n<p><img src="/img/blog/1.5.43-Release/clan-chat-kick-confirm-dialog.gif" alt="Clan Chat plugin kick confirmation chatbox dialog"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-Commands" native="" rel="nofollow">Chat Commands plugin</a>\'s chatbox\nclearing keybinds are now configurable</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Kourend-Library" native="" rel="nofollow">Kourend Library plugin</a> has an\noption (enabled by default) to display a tutorial overlay to help get started with it</li>\n<li>Messages displayed via the <a href="https://github.com/runelite/runelite/wiki/Twitch" native="" rel="nofollow">Twitch plugin</a> now\nhave timestamps</li>\n<li>Captain Khaled and Arceuus library customers now have <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="" rel="nofollow">menu entry\nswaps</a> for their &quot;Task&quot; and &quot;Help&quot;\noptions, respectively</li>\n<li>A <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="" rel="nofollow">menu entry swap</a> for previous\ndestinations of your POH Jewellery box has been added</li>\n<li>The &quot;Chat Leagues Icons plugin&quot; has been renamed to the easier-to-understand <a href="https://github.com/runelite/runelite/wiki/League-Chat-Icons" native="" rel="nofollow">League Chat Icons\nplugin</a></li>\n<li>League Chat icons no longer display usernames without their appropriate <a href="https://github.com/runelite/runelite/wiki/Chat-Color" native="" rel="nofollow">chat\ncolors</a> applied</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer plugin</a> has learned to recognize\nKonar giving a player their first slayer task in the Twisted League</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Object-Markers" native="" rel="nofollow">Object Markers plugin</a> now properly\nallows unmarking objects which may have a different name than when they spawned</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (10):\n      client: fix world hopper not populating worlds on startup and when refreshed\n      woodcutting plugin: disable by default\n      client: rename zoom plugin to camera plugin\n      camera plugin: add option to rotate camera with right click\n      object indicators: fix unmarking objects matched by name\n      object indicators: fix checkObjectPoints to check plane\n      client loader: fix incorrect applet world when using fallback config\n      clientloader: don\'t lazy load client classes\n      http-api: update for boss hiscores\n      hiscore result builder: fix building hiscore result with no boss hiscores\n\nAlexsuperfly (1):\n      woodcutting: show respawn timers after GameState change\n\nHydrox6 (8):\n      kourendlibrary: replace `final static` with `static final`\n      kourendlibrary: fix prediction not resetting when layout changes\n      kourendlibrary: add tutorial overlay\n      kourendlibrary: remove unneeded hidden flag from overlay\n      kourendlibrary: add option to hide Varlamore Envoy\n      kourendlibrary: optimize NPC marking code\n      kourendlibrary: remove LibraryCustomer\n      twitch: add timestamps to messages\n\nJZomerlei (1):\n      chatcommands: Make chat clearing keybinds configurable (#10308)\n\nJustinmcnabb (1):\n      woodcutting: Add missing Willow Tree Object IDs (#10391)\n\nKC Sparks (1):\n      menu entry swapper: add captain khaled talk-to/task swap\n\nLinda Lapinlampi (1):\n      npc highlight: skip noninteractible npcs on minimap\n\nMax Weber (3):\n      Update Scripts to 2019-12-05-rev182\n      poh: Update jewelery box ids\n      fix ChatSplitBuilder crashing when receiving a friend login/out message\n\nShaun Dreclin (1):\n      menu entry swapper: Add \'help\' swap to Arceuus library customers\n\nShawn Shadrix (1):\n      kourendlibrary: highlight the customer\'s desired book in the overlay\n\nTheStonedTurtle (1):\n      clanchat plugin: add option to confirm kicks\n\nThomas (2):\n      chat message manager: deprioritize chat message hook\n      league chat icons: fix plugin name\n\ndekvall (1):\n      prayer-reorder: remove test\n\nh3half (1):\n      slayer plugin: fix detecting Konar\'s first assignment\n\nwhartd (1):\n      menu swapper: add jewellery box\n</code></pre>\n',image:"/img/blog/1.5.43-Release/clan-chat-kick-confirm-dialog.gif"}}}]);
//# sourceMappingURL=113.0f3c254f.chunk.js.map