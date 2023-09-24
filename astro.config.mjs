import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Wizardry',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/kevinzunigacuellar/algowizardry',
			},
			sidebar: [
				{
					label: 'Leetcode',
					autogenerate: { directory: 'leetcode' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/kevinzunigacuellar/algowizardry/edit/main'
			},
			lastUpdated: true,
		}),
	],
	site: "https://algowizardry.vercel.app"
});
