import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lunova 文档站',
			plugins: [
				md3Theme({
					seed: '#00bbff',
					variant: 'tonalSpot',
				})
			],
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/Lunova-Studio' 
				}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});