// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Project site on GitHub Pages: https://Andrewwwwwwwwwwwwwww.github.io/modhub
// If a custom domain is added later, set `site` to it and `base` to '/'.
export default defineConfig({
	site: 'https://Andrewwwwwwwwwwwwwww.github.io',
	base: '/modhub',
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
							],
						},
						{ label: 'The Hungering Portal', link: '/mods/thp/' },
						{ label: 'Villager Shop', link: '/mods/villagershop/' },
						{ label: 'Spawn Management', link: '/mods/spawnmanager/' },
						{ label: 'Holograms', link: '/mods/holograms/' },
						{ label: 'ServerStatusDiscord', link: '/mods/serverstatusdiscord/' },
						{ label: 'UsefulCarts', link: '/mods/usefulcarts/' },
						{ label: 'SimpleLandClaim', link: '/mods/simplelandclaim/' },
					],
				},
			],
		}),
	],
});
