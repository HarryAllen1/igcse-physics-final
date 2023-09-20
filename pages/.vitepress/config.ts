import { defineConfig } from 'vitepress';

export default defineConfig({
	lang: 'en-GB',
	title: 'IGCSE Physics Final',
	markdown: {
		math: true,
	},
	description:
		'A short paper on the relationship between celestial object magnitude and their redshifts',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
		['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
		[
			'script',
			{ type: 'module' },
			`if (location.hostname === "igcse-physics-final.vercel.app")
        await import('/_vercel/insights/script.js')`,
		],
		[
			'script',
			{
				src: 'https://cdn.plot.ly/plotly-latest.min.js',
			},
			'',
		],
	],
	cleanUrls: true,

	vite: {
		build: {
			target: 'es2022',
		},
	},
	themeConfig: {
		nav: [
			{
				text: 'Paper',
				link: '/',
			},
			{
				text: 'Individual Graphs',
				link: '/graphs',
			},
			{
				text: '50k Graph',
				link: '/graph-50k',
			},
			{
				text: '100k Graph (super slow; takes ~15s to load)',
				link: '/graph-100k',
			},
		],
		logo: '/logo.png',
		search: {
			provider: 'local',
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/HarryAllen1/igcse-physics-final',
			},
		],
	},
	appearance: 'force-dark',
});
