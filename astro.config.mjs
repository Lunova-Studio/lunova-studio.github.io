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
					label: '指南',
					items: [
						{ slug: 'guides/welcome' },
						{ slug: 'guides/joinus' }
					],
				},
				{
					label: 'MinecraftLaunch',
					collapsed: true,
					items: [
						{ slug: 'minecraftlaunch/home' },
						{ slug: 'minecraftlaunch/install' },
						{ slug: 'minecraftlaunch/quickstart' },
					    {
							label: '启动',
							collapsed: true,
							items: [
								{ slug: 'minecraftlaunch/launch/minecraftrunner' },
								{ slug: 'minecraftlaunch/launch/minecraftmanage' }
							],
						},
					    {
							label: 'Java 管理',
							collapsed: true,
							items: [
								{ slug: 'minecraftlaunch/java/javamanage' }
							],
						},
						{
							label: '账户验证器',
							collapsed: true,
							items: [
								{ slug: 'minecraftlaunch/auth/ms' },
								{ slug: 'minecraftlaunch/auth/offline' },
								{ slug: 'minecraftlaunch/auth/yggdrasil' }
							],
						},
						{
							label: '社区资源',
							collapsed: true,
							items: [
								{ slug: 'minecraftlaunch/community/curseforge' },
								{ slug: 'minecraftlaunch/community/modrinth' },
								{ slug: 'minecraftlaunch/community/skin' },
							],
						},
						{
							label: '安装器',
							collapsed: true,
							items: [
								{ 
									label: '整合包安装器',
									collapsed: true,
									items: [
										{ slug: 'minecraftlaunch/install/modpack/curseforge' },
										{ slug: 'minecraftlaunch/install/modpack/modrinth' },
										{ slug: 'minecraftlaunch/install/modpack/mcbbs' }
									]
								},
								{ slug: 'minecraftlaunch/install/vanilla' },
								{ slug: 'minecraftlaunch/install/composite' },
								{ slug: 'minecraftlaunch/install/fabric' },
								{ slug: 'minecraftlaunch/install/forge' },
								{ slug: 'minecraftlaunch/install/quilt' },
								{ slug: 'minecraftlaunch/install/optifine' }
							],
						},
					],
				},
			],
		}),
	],
});