(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[128],{717:function(e,n){e.exports={title:"1.6.20 Release",description:"Hallowed Sepulchre loot tracking and chat commands and infobox menu options",author:"Jordan",body:'<p>We\'ve added support for <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="" rel="nofollow">tracking collected\nloot</a> as well as <a href="https://github.com/runelite/runelite/wiki/Chat-Commands" native="" rel="nofollow">completion counts and\npersonal bests</a> in the Hallowed Sepulchre.\nUse the <code>!kc hs</code> and <code>!pb hs</code> chat commands to see this information. You can even get information\nfor specific floors by adding the floor number, like <code>!pb hs 5</code>.</p>\n<p><img src="/img/blog/1.6.20-Release/sepulchre-loot-tracking.png" alt="Hallowed Sepulchre loot tracking"><br>\n<img src="/img/blog/1.6.20-Release/sepulchre-chat-commands.png" alt="Hallowed Sepulchre chat commands"></p>\n<p>We\'ve added support for adding menu options to infoboxes! Now if you have the &quot;Death Infobox&quot; option\nenabled in the <a href="https://github.com/runelite/runelite/wiki/Death-Indicator" native="" rel="nofollow">Death Indicator plugin</a>,\nyou can right-click the infobox (may require <kbd>Shift</kbd> <a href="https://github.com/runelite/runelite/wiki/RuneLite#require-shift-for-overlay-menu" native="" rel="nofollow">depending on your RuneLite\nsettings</a>) to\nclear it if you do not wish to revisit it.</p>\n<p><img src="/img/blog/1.6.20-Release/infobox-menu-options.png" alt="Infobox menu options"></p>\n<p>In advance of Old School RuneScape\'s clan system feature we have renamed the Clan Chat plugin to the\n<a href="https://github.com/runelite/runelite/wiki/Friends-Chat" native="" rel="nofollow">Friends Chat plugin</a> and similarly renamed\nall other option names in the same way. This renaming will not affect your settings.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The client now remembers its screen position when moved across multiple monitors</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Agility" native="" rel="nofollow">Agility plugin</a> correctly applies your\nselected sepulchre overlay color to the arrows and swords found there</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Timers" native="" rel="nofollow">Timers plugin</a>\'s stamina timers learned how\nthe timer is affected when using the Ring of endurance</li>\n<li>You may now hide the farming contract infobox in the <a href="https://github.com/runelite/runelite/wiki/Time-Tracking" native="" rel="nofollow">Time Tracking\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Drift-Net" native="" rel="nofollow">Drift Net plugin</a> has better detection\nfor fish shaols becoming untagged next to inactive nets and can highlight Annette when you run out\nof drift nets in your inventory</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Player-owned-House" native="" rel="nofollow">Player-owned House plugin</a> now\ncorrectly draws a minimap icon over Occult Altars</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="" rel="nofollow">Clue Scroll plugin</a> has learned the\nlocation of an added hot-cold clue step found in Darkmeyer</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer plugin</a> can now update your task\ninformation when speaking to your slayer master via the slayer gem dialog</li>\n<li>Some tooltip spelling mistakes have been corrected in the <a href="https://github.com/runelite/runelite/wiki/World-Map" native="" rel="nofollow">World Map\nplugin</a></li>\n<li>Baby dragons are now highlighted by the <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer\nplugin</a> when on a dragon task</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 13 contributors this release!</p>\n<pre><code>Adam (15):\n      pom: update discord to 1.2\n      ge plugin: fix adding limit reset timer multiple times\n      agility overlay: correctly use sepulchre overlay color\n      Rename clan chat to friends chat\n      chat commands: add hallowed sepulchre pb\n      chat commands: add hallowed sepulchre kc\n      timers plugin: add support for ring of endurance to stam timer\n      config: increase config cache to 256\n      cannon plugin: move spot scene check to game state change event\n      timetracking: add option to hide farm contract infobox\n      runelite: add startup log with versions and arguments\n      client: add safemode flag to disable gpu plugin and externals\n      overlay: optimize some menu handling code\n      client: add support for menu options on infoboxes\n      death indicator: add clear option to infobox\n\nBart Peeters (2):\n      driftnet: Hightlight Annette when no nets in inventory\n      driftnet: Improve fish shoal highlighting\n\nBroooklyn (1):\n      poh: Fix Altar of the Occult ID\n\nJordan Atwood (2):\n      HotColdLocation: Add new Darkmeyer master step\n      HotColdLocation: Center some location spots\n\nJorgeVidal29 (1):\n      CoordinateClue: Note 76 Agility requirement for BJS fairy ring (#11899)\n\nMax Weber (2):\n      rl-api: import (idle)?PoseAnimation\n      devtools: Show actor pose animation\n\nPresNL (1):\n      slayer: Parse task information from gem activate chat (#11866)\n\nSpedwards (1):\n      clientui: respect multiple displays when saving/loading client position\n\nSteven Goodman (1):\n      chatfilter: fix formatted messages not being collapsed\n\nleejt (2):\n      LootTracker: track ground items in addition to inventory\n      LootTracker: track shade chest loot\n\nmelkypie (2):\n      client: fix infernal eel, karambwan and karambwanji fishing spot enum world map tooltips\n      worldmap: fix spelling mistake in mor ul rek\n\nplondrein (3):\n      slayer: Highlight baby dragons on task\n      skillcalculator: Add sq\'irk fruits to farming calculator\n      skillcalculator: Add POH garden plants to farming calculator\n\nwhaevr (1):\n      loot tracker: add coffins from Hallowed Sepulchre\n</code></pre>\n',image:"/img/blog/1.6.20-Release/sepulchre-loot-tracking.png"}}}]);
//# sourceMappingURL=128.6d273897.chunk.js.map