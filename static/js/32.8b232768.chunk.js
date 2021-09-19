(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[32],{621:function(e,n){e.exports={title:"1.3.1 Release",description:"Prayer reordering, bank price evaluation, and NPC highlighting",author:"Adam",body:'<p>A prayer reordering plugin has been added which lets you reorder the prayers in\nyour prayer book. Big thanks to <a href="https://github.com/devdennis" native="" rel="nofollow">@devdennis</a> for\nthe excellent work on making this possible;</p>\n<p><img src="/img/blog/1.3.1-Release/prayer-reorder.gif" alt="prayorder"></p>\n<p><a href="https://github.com/McSwindler" native="" rel="nofollow">@McSwindler</a> contributed a NPC highlight plugin\nwhich lets you tag npcs, and also configure a list of npcs which are\nhighlighted.</p>\n<p><img src="/img/blog/1.3.1-Release/npc-tag.png" alt="npctag"></p>\n<p>A bank evaluator has been added, which is a combination of effort from myself,\n<a href="https://github.com/jplsek" native="" rel="nofollow">@jplsek</a>, and\n<a href="https://github.com/TheLonelyDev" native="" rel="nofollow">@TheLonelyDev</a>. It will tell you the overall\nGE and HA price of each tab of your bank.</p>\n<p><img src="/img/blog/1.3.1-Release/bank-eval.png" alt="bankval"></p>\n<p>The ground items plugin now supports quickly hiding and highlighting items.\nThanks to <a href="https://github.com/sethtroll" native="" rel="nofollow">@sethtroll</a>.</p>\n<p><img src="/img/blog/1.3.1-Release/grounditems.gif" alt="grounditems"></p>\n<p>A herbiboar plugin has been added from\n<a href="https://github.com/tylerthardy" native="" rel="nofollow">@Perterter</a>. It highlights the starting rocks,\ntrail, and the two objects to search at the end of each trail.</p>\n<p><img src="/img/blog/1.3.1-Release/herbiboar.png" alt="herbiboar"></p>\n<p>An item price plugin has been added, from\n<a href="https://github.com/ChaoticConundrum" native="" rel="nofollow">@ChaoticConundrum</a>, which shows the price\nof items when hovered over in the bank.</p>\n<p><img src="/img/blog/1.3.1-Release/itemprice.png" alt="itemprice"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Ground items now support wildcards in both hidden and highlighted fields, so for example <code>*bone*</code>\nwill hide/highlight all bones</li>\n<li>The boosted stats plugin now shows time until next change</li>\n<li>The agility plugin allows configuring of the hitbox overlay color</li>\n<li>Game menus options are no longer left broken when moving regions with the menu\noption</li>\n<li>Attack style plugin now hides attack styles better</li>\n<li>Fixed Kourend library plugin, which was broken last release</li>\n<li>Show glory location in POH plugin</li>\n<li>Common cannon placement spots have been added to the cannon plugin</li>\n<li>Remaining XP to level has been added to the hiscore panel</li>\n<li>Removed background from the prayer flick overlay, which made the quick prayers\n\xa0toggle hard to see</li>\n<li>Added godwars altar timer</li>\n<li>Superior slayer notifications have been added to the slayer plugin</li>\n<li>The slayer plugin infobox (with your current task) now has a configurable\ntimeout</li>\n<li>The time until levelup has been added to the xp tracker panel</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 16 contributors this release!</p>\n<pre><code>Adam (26):\n      runelite-mixins: add null checks in region mixin\n      Bump for 1.3.0.1-SNAPSHOT\n      runelite-mixins: add null checks in region mixin\n      boosts plugin: show time to next change\n      ground items: add support for wildcards\n      ge plugin: move item composition and image calls off of awt thread\n      runescape-client: export updateNote\n      runescape-client: fix sprite originalWidth&lt;-&gt;width and export fields for loading sprites\n      cache: add provider interfaces for items, models, sprites, and textures\n      cache: add updateNote to ItemDefinition\n      cache: fix not invalidating vertexNormals in reset\n      cache: expand on texture definition and loader\n      cache: store original pixels and palette too, and add normalize()\n      cache: add resize, recolor, and retexture to modeldefinirtion\n      cache: add item sprite renderer\n      cache controller: expose item sprites\n      examine service: correct type column enum\n      item manager: add batch item price lookup\n      Hook to actor health being updated to detect death\n      gitignore: add eclipse files\n      runelite-api: move getConvexHull to Model\n      runelite-api: add getConvexHull to Actor\n      Add npc menu options to MenuManager\n      devtools: remove double npc transform call\n      utils: add wildcard matcher from grounditems\n      runelite-client: add npc highlight plugin\n\nCas (1):\n      Agility plugin: Agility configuration with Select Color\n\nCharlie Waters (6):\n      Add items to item stats plugin: spinach roll, lava eel, sandwich lady items, jangerberries\n      Fix bug with rendering more than two tooltips following mouse\n      Add TooltipManager method to add tooltip to front of list, and always add mouse highlight tooltip to front\n      Add item prices plugin for item price/value tooltips\n      Add FocusChanged event from runescape client\n      Fix Groud Items plugin Alt+Tab bug by hooking FocusChanged event\n\nDennis (10):\n      restore menu entries after open/close widget\n      fix prayer order resetting after teleporting to a new area\n      injector: checkcast return values from replaced methods\n      runescape-client: export animation related symbols\n      runelite-api: expose dragging widget fields\n      runelite-api: add event for dragging widget\n      runelite-api: add widget open event\n      runelite-mixins: add null check for widget group in getGroup()\n      runelite-api: add widget config\n      runelite-client: add prayer reordering plugin\n\nDreyri (2):\n      Broadcast widget hidden changed recursively for each child too\n      Use isLocalHidden in attack indicator plugin\n\nJeremy Plsek (4):\n      http-api: add batch lookup to ItemClient\n      stack formatter: support larger stack sizes\n      bank item query: only search items in current tab\n      Add bank value plugin\n\nKamiel (1):\n      Add progress pie type overlay\n\nMax Weber (5):\n      kourendlibrary: Fix NPE while loading\n      kourendlibrary: Use correct coordinate conversion\n      jarvis: allow null points\n      Add JShadowedLabel\n      Change colors in XPInfoPanel to be brighter\n\nSeth (9):\n      poh plugin: change gameobject map to tile object\n      pog plugin: fix mounted glory minimap icon\n      cannon plugin: add common cannon spots\n      ground items: add support for quickly hiding/highlighting items\n      hiscore panel: make hiscores type more visible\n      hiscore panel: add Remaining XP to next level to hover text\n      hiscore panel: add loading label when searching\n      menu entry swapper: add bury swap\n      prayer flick overlay: remove background arc\n\nTomas Slusny (24):\n      Extract utlity methods to SwingUtil class\n      Remove the need to extend JFrame in ClientUI\n      Make plugins work with new ClientUI\n      Remove need to extend JToolBar in PluginToolbar\n      Make plugins work with the new PluginToolbar\n      Remove the need for custom TitleToolbar component\n      Make plugins work with new title toolbar\n      Add Discord button through DiscordPlugin\n      Add support for popups to navigation button\n      Change panel supplier to just getter for panel\n      Consistent behaviour between ClientUI and InfoPane\n      Set correct offsets to overlays, smaller panels\n      Reposition instance map correctly in resizeable\n      Use backgroundComponent for drawing border of map\n      Lower default width of the PanelComponent\n      Fix herbiboar plugin NPE on startup\n      Fix AgilityPlugin naming conventions\n      Fix Herbiboar plugin naming conventions\n      Correctly name Herbiboar classes\n      Remove unused variables in Herbiboar plugin\n      Fix ClientUI settings loading\n      Click the navigation button on selecting in\n      Fix tooltip modicon OutOfBounds\n      Do not display stack in price tooltips\n\nToocanzs (1):\n      Add God Wars Altar Timer\n\nTyler Hardy (4):\n      Add herbiboar varbits\n      Add herbiboar plugin\n      Move region check to loading\n      Fix improper varbit for trail 31372\n\nXavier Bergeron (1):\n      Add slayer superior foe notification\n\nXrioBtw (1):\n      Fix net and harpoon swap for all fishing spots\n\njoshpfox (1):\n      configurable slayer infobox expiry timer\n\nnvisser (1):\n      Add time till next level to xptracker\n</code></pre>\n',image:"/img/blog/1.3.1-Release/prayer-reorder.gif"}}}]);
//# sourceMappingURL=32.8b232768.chunk.js.map