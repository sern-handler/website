import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from "@astrojs/tailwind";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

export default defineConfig({
	integrations: [starlight({
		title: 'Sern',
		social: {
			github: 'https://github.com/sern-handler',
			discord: 'https://discord.gg/DwbF5H5JgQ',
		},
		components: {
			ThemeSelect: './src/components/ThemeSelect.astro',
			Head: './src/components/Head.astro',
		},
		logo: {
			src: './src/assets/logo/navbar-icon.png',
			replacesTitle: true,
		},
		customCss: [
			'./src/styles/global.css',
		],
		sidebar: [
			typeDocSidebarGroup,
			{
				label: 'CLI',
				autogenerate: { directory: 'cli' },
			},
			{
				label: 'Guide',
				items: [
					{
						label: 'Getting Started',
						autogenerate: { directory: 'guide/getting-started' },
					},
					{
						label: 'Walkthrough',
						autogenerate: { directory: 'guide/walkthrough' },
					},
				],
			},
		],
		plugins: [
			starlightDocSearch({
				appId: 'AA9S5J9NYT',
				apiKey: 'ccfe6abc4d12ac6f882565a9d0caafb1',
				indexName: 'sern',
			}),
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
						url: 'https://github.com/sern-handler',
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
				tsconfig: '../sern-handler/tsconfig.json',
				entryPoints: ['../sern-handler/src/index.ts'],
				autogenerate: {
					directory: 'api',
				},
			}),
		],
	}), tailwind()]
});
