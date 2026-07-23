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
						{ label: 'VanillaSkills', link: '/mods/vanillaskills/' },
						{ label: 'The Hungering Portal', link: '/mods/thp/' },
						{ label: 'Villager Shop', link: '/mods/villagershop/' },
						{ label: 'Spawn Management', link: '/mods/spawnmanager/' },
						{ label: 'VS - Textures', link: '/mods/vs-textures/' },
						{ label: 'Holograms', link: '/mods/holograms/' },
						{ label: 'ServerStatusDiscord', link: '/mods/serverstatusdiscord/' },
						{ label: 'UsefulCarts', link: '/mods/usefulcarts/' },
						{ label: 'SimpleLandClaim', link: '/mods/simplelandclaim/' },
						{ label: 'Fallen', link: '/mods/fallen/' },
						{ label: 'Fallen: Backpacked', link: '/mods/fallen-backpacked/' },
					],
				},
			],
		}),
	],
});
