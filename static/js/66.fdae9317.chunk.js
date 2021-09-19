(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[66],{655:function(e,n){e.exports={title:"1.4.21 Release",description:"Bank tag tabs, master clue 3-step cryptic solutions, partial grand exchange name searching, and various plugin visual improvements",author:"Jordan",body:'<h2>Bank tag tabs</h2>\n<p>Thanks to the tireless work of <a href="https://github.com/raiyni" native="" rel="nofollow">@raiyni</a>, and supporting work from\n<a href="https://github.com/deathbeam" native="" rel="nofollow">@deathbeam</a> and <a href="https://github.com/Abextm" native="" rel="nofollow">@Abextm</a>, we are proud\nto offer a new bank tag experience in bank tag tabs!</p>\n<p><img src="/img/blog/1.4.21-Release/bank-tag-tabs-intro.gif" alt="Bank tag tabs: adding and selecting tabs"></p>\n<p>As indicated above, tabs can be created for any number of tags by clicking the &quot;+&quot; button in the\nupper-left-hand corner of the bank interface, and selecting these tabs will display items tagged\nwith that tab\'s tag. More information regarding its features and functionalities can be found <a href="https://github.com/runelite/runelite/wiki/Bank-Tags#using-tag-tabs" native="" rel="nofollow">by\nbrowsing the Bank Tags wiki\npage</a>.</p>\n<h2>Master clue 3-step cryptic solutions</h2>\n<p>The Clue Scroll plugin now displays solutions for master-level three step cryptic clues, removing\nsteps from the overlay as they are completed. Thanks to\n<a href="https://github.com/eadgars-ruse" native="" rel="nofollow">@Eadgars-ruse</a> for submitting\n<a href="https://streamable.com/ujaar" native="" rel="nofollow">(and demonstrating in video form)</a> this feature!</p>\n<p><img src="/img/blog/1.4.21-Release/master-three-step-cryptic-clue-full.png" alt="Master-level three step cryptic clue solution">\n<img src="/img/blog/1.4.21-Release/master-three-step-cryptic-clue-partial.png" alt="Partial solution for master-level three step cryptic clue"></p>\n<h2>Grand Exchange partial name searching</h2>\n<p>The Grand Exchange search panel and ingame <code>!price</code> command now allow for partial name searching,\nyielding better results than before. Thanks to <a href="https://github.com/Adam-" native="" rel="nofollow">@Adam-</a> for implementing\nthis enhancement.</p>\n<p><img src="/img/blog/1.4.21-Release/grand-exchange-search-before-after.gif" alt="Grand exchange search results: before and after"></p>\n<h2>Visual improvements</h2>\n<p>Thanks to <a href="https://github.com/Adam-" native="" rel="nofollow">@Adam-</a>, <a href="https://github.com/Monsterxsync" native="" rel="nofollow">@Monsterxsync</a>,\n<a href="https://github.com/psikoi" native="" rel="nofollow">@psikoi</a>, and\n<a href="https://github.com/SebastiaanVanspauwen" native="" rel="nofollow">@SebastiaanVanspauwen</a> respectively, a number of plugins\nhave had their visuals updated, which can be seen below:</p>\n<ul>\n<li>The &quot;To:&quot; and &quot;From:&quot; in split private chat can now be recolored</li>\n<li>A toggle has been added to use default skill coloring for XP globe progress arcs</li>\n<li>XP globes\' progress bar has been changed into an overlay directly on the globe to save space</li>\n<li>A chatbox background image has been added to the 2005 interface style</li>\n</ul>\n<p><img src="/img/blog/1.4.21-Release/recolored-split-private-chat-to-from.png" alt="Recolored &quot;To:&quot; and &quot;From:&quot; in split private chat">\n<img src="/img/blog/1.4.21-Release/xp-globes-default-skill-color.png" alt="XP globes default skill colors">\n<img src="/img/blog/1.4.21-Release/xp-globes-progress-overlay.png" alt="Updated XP globes progress overlay">\n<img src="/img/blog/1.4.21-Release/2005-chat-background.gif" alt="2005 interface chat background"></p>\n<p>The Camera Zoom plugin has been disabled until we can fix it for the update today.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The percentage completion component of the XP tracker is now accurate to two decimal places</li>\n<li>The 2010 interface style has had some tab icon offsets updated to be more accurate to the style</li>\n<li>Cavaliers will now display their buy limit in the grand exchange plugin</li>\n<li>Mouse tooltips should now properly be hidden whenever a RuneScape tooltip is displayed</li>\n<li>Chat notification highlight words now ignore leading and trailing space for highlight terms</li>\n<li>Regen meters should now be more accurate for the beginning and end of a regen cycle</li>\n<li>Overlays snapped above chatbox will now be rendered when text input or chat dialogs are open</li>\n<li>An option has been added to the boosts overlay to display in yellow when below the boost threshold</li>\n<li>Notifications have been added for highlighted ground items</li>\n<li>The Fairy ring plugin now remembers scroll position when re-opening the fairy ring menu</li>\n<li>The Slayer plugin will now update when assigned a task through partner slayer</li>\n<li>The NPC HP overlay has been updated to use a more accurate HP formula</li>\n<li>The Loot tracker no longer tries to add empty slots from Chambers of Xeric or Theatre of Blood</li>\n<li>The newly-added Al Kharid palace shortcuts have been added to the agility obstacle highlighter</li>\n<li>An idle alert should no longer trigger after casting most Lunar spells</li>\n<li>A toggle to send a notification upon the Ulitmate Force powerup spawning in Nightmare Zone has\nbeen added</li>\n<li>The Kingdom of Miscellania completion state check has been corrected</li>\n<li>Several bank tag editing edge cases have been fixed</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 23 contributors this release!</p>\n<pre><code>Adam (7):\n      feed controller: move feed result fetch to spring scheduler\n      http service: return item names in price lookup\n      http-api: modify ItemPrice to contain id/name instead of Item\n      mixins: fix runelite message not being cleared on reused messages nodes\n      chat message manager: add support for coloring to/from\n      runelite-client: update for search api changes\n      ge search: cap max results at 100\n\nBailey Townsend (1):\n      Add buy limit for cavalier hats to GE plugin (#5855)\n\nEadgars-Ruse (2):\n      Fix and improve cryptic clues\n      Add solutions for 3 step cryptic master clues\n\nEric White (1):\n      Increase XP tracker accuracy to 2 decimal places (#5845)\n\nGravitySalad (2):\n      Add additional search tags for interface styles and pve plugins\n      Change plugin search to include the plugin description\n\nJeremy Plsek (1):\n      2010 styles: Fix emotes and music tab offsets (#5884)\n\nJordan Atwood (1):\n      mouse tooltips: Don\'t add a tooltip if another is present\n\nKamiel (3):\n      Fix chat notification highlight words split regex (#5798)\n      Change regen meter stroke end-cap style to CAP_BUTT\n      Fix snapped overlays above chatbox not being rendered\n\nMagic fTail (3):\n      Add support for making the boost colour yellow if below boost threshold\n      Update osrs wiki link\n      Stop CoX party size from showing before varb is loaded\n\nMarshall (1):\n      Add highlighted ground item notifications (#3647)\n\nMax Weber (7):\n      Add thread assertions to Widget\n      WidgetInspector: run on client thread\n      runelite-client: Make Widget::isHidden only run on client thread\n      Add thread assertion to getVar(Varbits)\n      runelite-client: Make getVar(Varbits) only run on the client thread\n      fairyring: Don\'t loose scroll position\n      timetracking: Show overview completion by tab, not implementation\n\nMonsterxsync (1):\n      Add default skill coloring to XP globe arcs\n\nNathen Sample (4):\n      Improve readability of stackformatter tests\n      Add support for partner assignment to slayer plugin (#5782)\n      Improve attack style plugin encapsulation (#5806)\n      Improve BA plugin encapsulation (#5807)\n\nRon Young (9):\n      Add bank-related widget ids, scripts and varbits\n      Add script for managing current bank tab\n      Add method for getting keys based on prefix from ConfigManager\n      Add tag tabs to bank tags plugin\n      More accurate NPC hp overlay when max hp is known (#5528)\n      widget: expose setchildren (#5309)\n      Don\'t update tags if interface is force closed\n      Don\'t change the active tab if tags are being edited\n      Don\'t assume bank title is the same as search str because it truncate...\n\nRuben Amendoeira (1):\n      XP Globes - Move progress bar display from tooltip to globe (#5856)\n\nSebastiaan Vanspauwen (1):\n      Interface plugin: Added 2005 chatbox\n\nTomas Slusny (15):\n      Fix Raids plugin varbit access not happening on client thread\n      Move map clue checking to MenuOptionClicked\n      Skip empty spots in Loot Tracker when getting items\n      Fix NPE in Miscellania plugin on DC\n      Use NpcSpawned/Despawned events for checking clue NPCs\n      Move clue inventory/equipment assignment to ItemContainerChanged\n      Inverse findClueScroll conditions\n      Do not set hint arrows for object clue scroll\n      Correctly highlight ObjectClueScroll for single location\n      Remove clue scroll timeout\n      Add executor service logger that logs exceptions\n      Remove unnecessary calls to RunnableExceptionLogger\n      Add method for standardizing text input to Text\n      Use TAG_SEARCH const instead of hardcoding &quot;tag:&quot; in Bank Tags\n      Properly reset search when deleting active tag tab\n\nTyler Nichols (2):\n      Remove unused variable &quot;rank&quot; in HiscorePanel (#5843)\n      Do not show quantity value for items with no GE/HA value (#5850)\n\nforsco (4):\n      Add new Al-Kharid palace agility shortcuts (#5800)\n      Remove idle alerts from Lunar Spells shared animation (#5863)\n      Fix spelling of Burthorpe Games Room in Discord Rich Presence (#5886)\n      Correct Burthorpe spelling for Discord rich presence\n\nmikek2 (1):\n      Add ultimate force notification trigger to NMZ plugin (#5790)\n\nrobinwithes (1):\n      Fix NPE in Grand Exchange search caused by null entry (#5911)\n\ntrimbe (1):\n      Kingdom Plugin: fix throne completion state check (#5874)\n</code></pre>\n',image:"/img/blog/1.4.21-Release/bank-tag-tabs-intro.gif"}}}]);
//# sourceMappingURL=66.fdae9317.chunk.js.map