// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Project site on GitHub Pages: https://Andrewwwwwwwwwwwwwww.github.io/modhub
// If a custom domain is added later, set `site` to it and `base` to '/'.
export default defineConfig({
	site: 'https://Andrewwwwwwwwwwwwwww.github.io',
	base: '/modhub',
	// The two pages below were published under the names the CurseForge listings still carry.
	// The mods themselves are Lives Shared and ShopGuard, so the pages moved; keep the old paths
	// working for anything already linking to them.
	redirects: {
		'/mods/sharedlives/': '/mods/livesshared/',
		'/mods/simplelandclaim/': '/mods/shopguard/',
	},
	integrations: [
		starlight({
			title: 'ModHub',
			description: "Documentation and downloads for Andrew's Minecraft mods.",
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Andrewwwwwwwwwwwwwww' },
			],
			sidebar: [
				{ label: 'Welcome', link: '/' },
				{
					label: 'Mods',
					items: [
						{
							label: 'VanillaSkills',
							items: [
								{ label: 'Overview', link: '/mods/vanillaskills/' },
								{ label: 'Quick guide', link: '/mods/vanillaskills/quick-guide/' },
								{ label: 'Progression & economy', link: '/mods/vanillaskills/progression/' },
								{ label: 'Gear & crafting', link: '/mods/vanillaskills/gear/' },
								{ label: 'Running a server', link: '/mods/vanillaskills/server-guide/' },
								{ label: 'Casino add-on', link: '/mods/vscasino/' },
								{ label: 'VS - Textures', link: '/mods/vs-textures/' },
							],
						},
						{
							label: 'Fallen',
							items: [
								{ label: 'Overview', link: '/mods/fallen/' },
								{ label: 'Backpacked add-on', link: '/mods/fallen-backpacked/' },
								{ label: 'Server Sided Corpse', link: '/mods/ssc/' },
							],
						},
						{
							label: 'MCTGames',
							items: [
								{ label: 'Overview', link: '/mods/mctgames/' },
								{ label: 'Craftle', link: '/mods/craftle/' },
								{ label: 'Connectle', link: '/mods/connectle/' },
								{ label: 'CrossCraft', link: '/mods/crosscraft/' },
							],
						},
						{ label: 'The Hungering Portal', link: '/mods/thp/' },
						{ label: 'Lives Shared', link: '/mods/livesshared/' },
						{ label: "Traveler's Backpack Extras", link: '/mods/tbextra/' },
						{ label: 'Villager Shop', link: '/mods/villagershop/' },
						{ label: 'Spawn Manager', link: '/mods/spawnmanager/' },
						{ label: 'Holograms', link: '/mods/holograms/' },
						{ label: 'SSD — Server Status to Discord', link: '/mods/serverstatusdiscord/' },
						{ label: 'UsefulCarts', link: '/mods/usefulcarts/' },
						{ label: 'BedrockToolBehavior', link: '/mods/bedrocktoolbehavior/' },
						{ label: 'ItemSaver', link: '/mods/itemsaver/' },
						{ label: 'MC-AutoFish', link: '/mods/mcautofish/' },
						{ label: 'ShopGuard', link: '/mods/shopguard/' },
						{ label: 'ChatFaces', link: '/mods/chatfaces/' },
						{ label: 'Rough Life', link: '/mods/roughlife/' },
					],
				},
			],
		}),
	],
});
