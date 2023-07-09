(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[150],{423:function(e,n){e.exports={title:"1.8.7 Release",description:"Custom left click swap and ambient sounds mute",author:"Adam",body:'<p>The menu swapper has a new option to configure the left click option on items, which works similar to the existing shift-click configuration.</p>\n<p><img src="/img/blog/1.8.7-Release/leftclickswap.png" alt="Leftclickswap"></p>\n<p>Login and logout notifications can now be hidden per-friend by clicking the <code>Hide notifications</code> option on the friend.</p>\n<p><img src="/img/blog/1.8.7-Release/loginout.png" alt="Login notifications"></p>\n<p>Chat channels can now show the number of online members in the channel.</p>\n<p><img src="/img/blog/1.8.7-Release/chatchannels.png" alt="Chat channels member count"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The music plugin now has an additional option to mute ambient sounds, which affect passive object sounds such as from magic trees and furnaces.</li>\n<li>The grand exchange buy limit and active traded price has been adjusted to fit on the interface</li>\n<li>The mute button clickbox on the login screen is no longer the entire bottom right area of the client</li>\n<li>Character accents are now ignored when applying chat filters to messages</li>\n<li>The loot tracker now tracks Mahogany Homes supply crates</li>\n<li>The world hopper region filter now supports filters with multiple regions</li>\n<li>The screenshot plugin can now screenshot combat achievement task completions</li>\n<li>Tile indicators now has a separate color configuration for tile fill color</li>\n<li>The party plugin now has a button to join the previous party, as well as join party by id</li>\n<li>Timing for the woodcutting respawn timers has been corrected</li>\n<li>Inventory tags are now shown in the Chambers of Xeric storage chest</li>\n<li>Item identification now works in the group ironman shared storage</li>\n<li>The pickpocket stun timer now works correctly with the dodgy necklace protection</li>\n<li>A rocket emoji was added to the emoji plugin (<code>&gt;==&gt;</code>)</li>\n<li>The player <code>Lookup</code> option now chooses the correct hiscores based on the world type</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 23 contributors this release!</p>\n<pre><code>Adam (59):\n      api: add on tick callback\n      camera plugin: fix tooltips with uncapped fps\n      music plugin: fix tooltips with uncapped fps\n      gpu: clear target buffer offset on login screen\n      barrows: fix brothers slain overlay flashing\n      bank: block bank pin going to chatbox\n      clues: capitalize fairy ring BKP\n      client: remove rogues\' den plugin\n      cache: rename objectdefinition ambient sound ids\n      api: add ambient sound effect\n      music: add option to mute ambient sound effects\n      gpu: store and use previous viewport\'s offsets for each frame\n      gpu: update suppressed warnings\n      gpu: initialize targetBufferOffset on startup\n      gpu: enable adaptive vsync\n      opponent info: hide overlay if hp hud is active\n      opponent info: use long npc name if available\n      banktags: remove extra space in chatbox prompt\n      banktags: improve bank scrollbar updates\n      banktags: remove setBankScroll event\n      clues: remove unnecessary item array copy\n      clues test: remove unnecessary stubbing\n      chat filter: Ignore character accents for matching\n      gpu: add sync mode config\n      timestamp: use steam client chat timestamp support\n      timestamp: immediately apply color config changes\n      screenshot: update duel arena messages\n      chat commands: update duel arena messages\n      barrows: fix vanilla overlay flashing with unlocked fps\n      loot tracker: add mahogany homes supply crate\n      logback: use SizeAndTimeBasedRollingPolicy\n      Add gim clan chat types\n      chat message manager: don\'t apply color changes to message nodes\n      chat history: include clan system messages\n      config panel: refactor input components creation into methods\n      ui: highlight selected cells correctly\n      config: add support for enum sets\n      world hopper: allow selecting multiple region filters\n      hiscore: use hiscore endpoint for world for player lookup op\n      chat history: remove group Clear history option\n      mes: add left click customization\n      screenshot plugin: reorder config\n      screenshot plugin: add combat achievements\n      screenshot plugin: test screenshot filenames\n      config service: avoid raising a json exception on non json input\n      loot tracker: aggregate kills prior to inserting\n      tile indicators: add config sections\n      api: make MenuEntry an interface\n      chatfilter: add clan message types\n      friendslist: add option to hide per-friend login notifications\n      rl-client: build test jar\n      ge plugin: compact buy offer examine text\n      gpu: add model hsl override support\n      nmz: fix point overlay flickering with unlocked fps\n      widget inspector: add listeners\n      hiscore: add nex\n      grandexchange: remove osb ge client\n      Move hiscore client to rl-client\n\nAlan Baumgartner (1):\n      party: add option to join previous party and join party by id\n\nAlex (1):\n      ground items: Fix despawn timer in clan hall (#14358)\n\nBrad Rammel (1):\n      achievement diary: remove the queen of thieves quest requirement\n\nDaniel (1):\n      hiscore panel: change top border size to 10\n\nDasgust (1):\n      chatchannels: display online member count\n\nFreeburn113 (1):\n      woodcutting: update respawn times from wiki\n\nHydrox6 (4):\n      roof removal: fix rimmington crafting store roof\n      roof removal: fix tolna\'s rift\n      move runepouch rune enum to client/game\n      clues: make item requirements work with the runepouch\n\nIm2be (1):\n      inv tags: add cox storage chest\n\nJosh J (1):\n      tile indicators: add fill color config\n\nKrazune (1):\n      timers: add dodgy necklace protection to pickpocket stun timer\n\nLlemonDuck (1):\n      special counter: ignore vet\'ion hellhounds\n\nLogan (1):\n      emoji: add rocketship emoji\n\nMax Weber (9):\n      gpu: use pbo &amp; driver owned buffer for ui tex upload\n      gpu: use optimized scene uploading for dynamic models too\n      camera: remove our compass look op config\n      avoid boxing `Comparator.comparing`s\n      chatchannel: remove target mode\n      rl-client: fix sending channel messages dropping ! prefixes\n      rl-client: remove chatbox performance plugin\n      rl-api: use less confusing names for model indices\n      cache: add rev202 model formats\n\nPaul Norton (1):\n      spec counter: add sire spawns and scions to ignore list\n\nRon Young (1):\n      api: MenuEntry::setDeprioritized return self\n\nTal Skverer (1):\n      timers: Track imbued heart timer from varbit\n\nWayne Li (1):\n      hiscores: fix npe\n\nZach (1):\n      widget item overlay: add group storage to showOnBank\n\nemerald000 (1):\n      clues: Fix charcoal burners STASH location (#14306)\n\norange-puff (1):\n      menu swapper: add teleports swap to teleport swap\n\nsepticsalmon (1):\n      item identification: add option for each seed type\n\nsimeonlg (1):\n      clues: Accept Tome of water when requiring water runes (#14361)\n</code></pre>\n',image:"/img/blog/1.8.7-Release/leftclickswap.png"}}}]);
//# sourceMappingURL=150.09bc5bb1.chunk.js.map