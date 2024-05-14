import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from "@astrojs/tailwind";
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import { GITHUB_URL, DISCORD_URL } from './src/utils/consts';

export default defineConfig({
	integrations: [starlight({
		title: 'sern',
		lastUpdated: true,
		social: {
			github: GITHUB_URL,
			discord: DISCORD_URL,
		},
		editLink: {
			baseUrl: GITHUB_URL + '/website/edit/main/',
		},
		components: {
			Head: '~/overrides/Head.astro',
			SiteTitle: '~/overrides/SiteTitle.astro',
			ThemeSelect: '~/overrides/ThemeSelect.astro',
			Sidebar: '~/overrides/Sidebar.astro',
		},
		logo: {
			src: '~/assets/logo/navbar-icon.png',
			replacesTitle: true,
		},
		customCss: [
			'~/styles/global.css',
		],
		sidebar: [
			{
				label: 'v3',
				items: [
					{
						...typeDocSidebarGroup,
						badge: { text: 'Generated' },
					},
					{
						label: 'CLI',
						autogenerate: { directory: 'v3/cli' },
					},
					{
						label: 'Guide',
						items: [
							{
								label: 'Getting Started',
								autogenerate: { directory: 'v3/guide/getting-started' },
							},
							{
								label: 'Walkthrough',
								autogenerate: { directory: 'v3/guide/walkthrough' },
							},
						],
					},
				],
			},
			{
				label: 'v4',
				items: [
					{
						label: 'Test',
						autogenerate: { directory: 'v4/test' },
					},
				],
			},
		],
		plugins: [
			starlightBlog({
				authors: {
					jacoobes: {
						name: 'jacoobes',
						title: 'Head Dev',
						url: 'https://github.com/jacoobes',
						picture: 'https://github.com/jacoobes.png',
					},
					ethan: {
						name: 'Sr Izan',
						title: 'Head Dev',
						url: 'https://github.com/SrIzan10',
						picture: 'https://github.com/SrIzan10.png',
					},
					sern: {
						name: 'sern Team',
						url: GITHUB_URL,
						picture: 'https://github.com/sernbot.png',
					},
					murtatrxx: {
						name: 'Murtatrxx',
						title: 'Head Dev',
						url: 'https://github.com/Murtatrxx',
						picture: 'https://github.com/Murtatrxx.png',
					},
					duro: {
						name: 'Duro',
						title: 'Developer',
						url: 'https://github.com/DuroCodes',
						picture: 'https://github.com/DuroCodes.png',
					},
				}
			}),
			starlightTypeDoc({
				tsconfig: './sern-handler/tsconfig.json',
				entryPoints: ['./sern-handler/src/index.ts'],
				autogenerate: {
					directory: 'v3/api',
				},
				sidebar: { collapsed: true },
			}),
		],
	}), tailwind()]
});
