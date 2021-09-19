(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[135],{724:function(e,n){e.exports={title:"1.6.29, 1.6.30, and 1.6.31 Releases",description:"New status bars, colorblind GPU filters, and merch store",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/Status-Bars" native="" rel="nofollow">Status Bars plugin</a> has seen a touch-up\nas you can now choose between hit points, prayer points, special attack energy, or run energy for\nyour left and right bars. Additionally, the heart icon for the hit points bar changes colors based\non your poison status, just like is done in the <a href="https://github.com/runelite/runelite/wiki/Poison" native="" rel="nofollow">Poison\nplugin</a>. Thanks to\n<a href="https://github.com/Malfuryent" native="" rel="nofollow">@Malfuryent</a> for further enhancing this plugin!</p>\n<p><img src="/img/blog/1.6.31-Release/new-status-bars.png" alt="Run energy and special attack bars"></p>\n<p>Colorblind options have been added to the <a href="https://github.com/runelite/runelite/wiki/GPU" native="" rel="nofollow">GPU\nplugin</a> to assist users who have common types of color blindness.\nThanks to <a href="https://github.com/benpoulson" native="" rel="nofollow">@benpoulson</a> for porting\n<a href="https://github.com/ofidaner" native="" rel="nofollow">@ofidaner\'s</a> colorblindness correction filters for use in RuneLite!</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:center">Protanope</th>\n<th style="text-align:center">Deuteranope</th>\n<th style="text-align:center">Tritanope</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><img src="/img/blog/1.6.31-Release/gpu-colorblind-protanope.png" alt="Client screenshot with colors adjusted for protanopia"></td>\n<td style="text-align:center"><img src="/img/blog/1.6.31-Release/gpu-colorblind-deuteranope.png" alt="Client screenshot with colors adjusted for deuteranopia"></td>\n<td style="text-align:center"><img src="/img/blog/1.6.31-Release/gpu-colorblind-tritanope.png" alt="Client screenshot with colors adjusted for tritanopia"></td>\n</tr>\n</tbody>\n</table>\n<p>We have <a href="https://merch.runelite.net" native="" rel="nofollow">opened a merch store</a> where you can purchase shirts,\nsweatshirts, and mugs bearing the RuneLite logo to show your support.</p>\n<p><img src="/img/blog/1.6.31-Release/merch-store.png" alt="RuneLite merch store"></p>\n<p>An updated launcher was released yesterday to fix an issue preventing RuneLite\nfrom maximizing correctly on hidpi displays on Windows, where it would not take\nup the full screen. If you have thie issue, download the newer launcher (version 2.1.5)\nfrom <a href="https://runelite.net" native="" rel="nofollow">runelite.net</a>.</p>\n<p>The website\'s <a href="https://runelite.net/plugin-hub" native="" rel="nofollow">Plugin Hub listing</a> can now sort plugins by their\nupdate time or the time they were added in addition to by name and number of active installs.</p>\n<p>We are aware the raids scouter is broken with the new large map pools from today, and will work on fixing it for a later update.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The League Chat Icons plugin has been removed, as it now exists in the vanilla client.</li>\n<li><a href="https://github.com/runelite/runelite/wiki/XP-Globes" native="" rel="nofollow">XP Globes</a> can now be stacked vertically,\nusing the same method to flip their orientation as infoboxes (shift and right-click).</li>\n<li>We have removed our website\'s XP tracker in favor of pointing to <a href="https://wiseoldman.net" native="" rel="nofollow">Wise Old Man</a>, a tracker <a href="https://github.com/psikoi" native="" rel="nofollow">created\nand maintained by Psikoi, a RuneLite contributor</a>. The <a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="" rel="nofollow">XP Tracker\nplugin</a> has been updated accordingly.</li>\n<li>The Volcanic mine and Nightmare totem game overlays have been updated to be <a href="https://github.com/runelite/runelite/wiki/General-Features#moving-overlays" native="" rel="nofollow">moveable with our\noverlay system</a></li>\n<li>League relics modifying your XP rates and health regeneration rates are now accounted for in the\n<a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="" rel="nofollow">XP Tracker</a> and <a href="https://github.com/runelite/runelite/wiki/Regeneration-Meter" native="" rel="nofollow">Regeneration\nMeter</a> plugins respectively</li>\n<li>You can check your league points using the newly-added <code>!lp</code> command. Other chat commands have been\nupdated to reference the leagues hiscores when used on league worlds</li>\n<li>The new league home/minigames teleport animation will now trigger the appropriate <a href="https://github.com/runelite/runelite/wiki/Timers" native="" rel="nofollow">teleport\ntimer</a></li>\n<li>Skilling plugins such as <a href="https://github.com/runelite/runelite/wiki/Fishing" native="" rel="nofollow">Fishing</a>,\n<a href="https://github.com/runelite/runelite/wiki/Mining" native="" rel="nofollow">Mining</a>, and\n<a href="https://github.com/runelite/runelite/wiki/Woodcutting" native="" rel="nofollow">Woodcutting</a> will show the proper activity\nstatus when using the new League infernal tools</li>\n<li><a href="https://github.com/runelite/runelite/wiki/Ground-Items" native="" rel="nofollow">Ground items</a> now have their overlays\nat the proper height for items placed on surfaces that are not ground-height, such as on tables</li>\n<li><a href="https://github.com/runelite/runelite/wiki/Chat-Timestamps" native="" rel="nofollow">Chat Timestamps</a> are now shown for all\ntypes of chat</li>\n<li>The <kbd>Ctrl</kbd> key can now be remapped with the <a href="https://github.com/runelite/runelite/wiki/Key-Remapping" native="" rel="nofollow">Key Remapping\nplugin</a></li>\n<li>Sourhogs are now recognized as a task by the <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer\nplugin</a>. Additionally, Cyclops are now\nrecognized as an alternative monster for Hill giant tasks</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="" rel="nofollow">Menu Entry Swapper plugin</a> now\noffers swaps for the Prayer book\'s &quot;Recite-prayer&quot; option and withdraw/deposit swaps for Chambers\nof Xeric storage chests</li>\n<li>The progress of your compost bins is now shown in the <a href="https://github.com/runelite/runelite/wiki/Time-Tracking" native="" rel="nofollow">Time Tracking\nplugin</a></li>\n<li>Your <a href="https://github.com/runelite/runelite/wiki/Cannon" native="" rel="nofollow">cannon ground overlay</a> is no longer shown\nif you are on a different world than the one where your cannon was placed</li>\n<li>Kourend task and unlock locations and Wilderness slayer cave entrances now have added tooltips via\nthe <a href="https://github.com/runelite/runelite/wiki/World-Map" native="" rel="nofollow">World Map plugin</a></li>\n<li>Your anisotropic filtering setting is no longer reset to 0 when toggling the <a href="https://github.com/runelite/runelite/wiki/GPU" native="" rel="nofollow">GPU\nplugin</a></li>\n<li>Item overlays are now shown for items in trade and duel inventory screens</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Time-Tracking" native="" rel="nofollow">Time Tracking plugin</a> better handles\nyour contract state for crops with health checks, and for diseased or dead crops</li>\n<li>Your <a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="" rel="nofollow">XP Tracker</a> goal time now has several\nformat options</li>\n<li>You can now hide dark manuscripts in the <a href="https://github.com/runelite/runelite/wiki/Kourend-Library" native="" rel="nofollow">Kourend Library\nplugin</a>. Additionally, the Varlamore\nEnvoy book is no longer shown when not completing the Depths of Despair quest (as it cannot be\nobtained otherwise), and searching a bookcase where it would be no longer resets your library\nrotation information</li>\n<li>You can now configure the <a href="https://github.com/runelite/runelite/wiki/Discord" native="" rel="nofollow">Discord plugin\'s</a>\ntime to display total time ingame, time elapsed for your current activity, or hidden entirely</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Motherlode-Mine" native="" rel="nofollow">Motherlode Mine plugin</a> now shows\nan overlay on broken water wheel struts, and can display collected ores and gems as icons rather\nthan as text</li>\n<li>The Nightmare Zone\'s overload potion timer and notification are now properly cleared when leaving\nthe minigame</li>\n<li>Chronicle charges are now tracked via the <a href="https://github.com/runelite/runelite/wiki/Item-Charges" native="" rel="nofollow">Item Charges\nplugin</a></li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 37 contributors in these releases!</p>\n<pre><code>Adam (18):\n      chat commands: unregister bh and lms commands\n      Add pluginhub user count tracking\n      xptracker: change online tracker link to wiseoldman\n      progress bar: optimize bar drawing\n      pluginhub controller: fix scheduled task delay\n      xp tracker: default pause on logout to on\n      api: move isDead from NPC to Actor\n      gpu: remove unused lastViewportWidth/Height fields\n      client: remove league chat icons plugin\n      key remapping: don\'t remap space in options dialog\n      spriteid: remove duplicated run icon\n      client: add PMD source code analyzer\n      item charges test: remove unnecessary eq matchers\n      antidrag: set bank drag delay when bankside inv is opened too\n      ci: update glslang to 8.13.3743\n      Fix offline worlds showing population of 65535\n      chat commands: format lp score\n      wildcard matcher: quote replacement to prevent the matcher from replacing group references\n\nBen Poulson (1):\n      gpu: add colorblind mode\n\nBram91 (2):\n      XPGlobes: allow stacking vertically.\n      Make Volcanic mine widgets layoutable\n\nBroooklyn (5):\n      chatcommands: add shorthand names for all agility courses\n      discord: add random events regions\n      worldmap: add Kourend task and unlock tooltip descriptions\n      worldmap: fix typos in &quot;transportation&quot;\n      worldmap: add Wilderness Slayer Cave entrances\n\nCaleb Allen (1):\n      gpu: fix anisotropic filtering resetting to 0 after plugin is toggled\n\nCryslacks (1):\n      Add trade and duel inventory to widget item inventory overlay\n\nCyborger1 (2):\n      farming: Fix harvestable health-check crops contract status\n      farming: Fix contract status for plots with diseased/dead crops\n\nDasgust (1):\n      xp tracker: add goal time formatting option\n\nGamma91 (1):\n      HotColdLocation: Center a location spot (#12657)\n\nHexagon (1):\n      cannonplugin: Check world when drawing overlay\n\nHydrox6 (2):\n      chat timestamps: add timestamps for all message types\n      add support for trailblazer tools\n\nJacob Mischka (1):\n      overlayrenderer: Make minimum overlay size configurable per-overlay (#12611)\n\nJoey Wilson (1):\n      Add item mapping for unidentified minerals (#12552)\n\nJoona (1):\n      grounditems: Render ground items tile overlay at correct height (#12586)\n\nJordan Atwood (4):\n      kourendlibrary: Don\'t reset state when not finding Varlamore Envoy\n      Move heart sprite recolors to public package\n      nightmarezone: Set absorption notification var on startup\n      devtools: Render world map location above region overlay\n\nKonrad Kozera (1):\n      ImageUtil: add error log with path (#12631)\n\nMalfuryent (3):\n      statusbars: Display while in fixed viewport bank\n      statubars: Add left/right customization options\n      statusbars: Add special &amp; run energy bar types\n\nMatthew C (1):\n      discord: Fix action timeout, add in game time elapsed option (#12471)\n\nMatthew Zegar (1):\n      key remapping: add control remap\n\nMax Weber (6):\n      experiencedrop: dont npe when trying to prayer highlight noncombat drops\n      kourendlibrary: add config to hide dark manuscripts\n      rl-client: update changed item names\n      wiki: remove remainder of quest/diary lookup code\n      wiki: don\'t throw when trying to optarget skills\n      wiki: Always include item names in widget optarget lookups\n\nMinhs2 (1):\n      slayer: Add Sourhog task (#12622)\n\nPlondrein (1):\n      motherlode: Add overlay for broken water wheel struts\n\nRansomTime (1):\n      slayer plugin: add Cyclops to hill giants task list\n\nRon Young (1):\n      banktags: don\'t allow colon in tagtab names\n\nSean Patiag (2):\n      timers: Fix NMZ Overload timer not disappearing\n      nightmarezone: Clear pending overload notifications outside NMZ\n\nSirGirion (3):\n      motherlode: Add option to show collected ore/gem icons\n      timetracking: add compost bin time trackers (#12619)\n      chatcommands: handle league accounts properly\n\nThePharros (1):\n      menu entry swapper: add recite-prayer swap\n\nTomas Slusny (2):\n      Switch to GitHub actions\n      Link to CI workflow from CI badge\n\nTrey (1):\n      kourendlibrary: hide Varlamore Envoy outside of the Depths of Despair\n\nUnmoon (1):\n      item charges: add Chronicle\n\nUsman Akhtar (1):\n      opponent info: fix npcindicator color not working with show opponents in menu\n\ndekvall (6):\n      chat-commands: add league points command\n      xp-tracker: support league &amp; dmm modifiers for kills remaining\n      xp: add support for wise-old-man trailblazer\n      timers: add league home tele\n      regenmeter: add support for fluid strikes\n      xptracker: add league relic modifiers\n\nmelkypie (1):\n      motherlode: allow sack overlay to be resizable\n\npaymon123 (1):\n      ConfigManager: Fix NPE when resetting configs with null default\n\npilino1234 (1):\n      Worldhopper: Update league world color for Trailblazer\n\nsam (1):\n      menu entry swapper: add withdraw/deposit swap for chambers of xeric storage\n\nwinterdaze (1):\n      WidgetOverlay: make nightmare pillar health widget moveable\n</code></pre>\n',image:"/img/blog/1.6.31-Release/new-status-bars.png"}}}]);
//# sourceMappingURL=135.e74f2fd4.chunk.js.map