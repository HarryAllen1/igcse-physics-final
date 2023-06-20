import { defineConfig } from 'vitepress';
import Mathjax from 'markdown-it-mathjax3';

const customElements = [
	'mjx-container',
	'mjx-assistive-mml',
	'math',
	'maction',
	'maligngroup',
	'malignmark',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mi',
	'mlongdiv',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'ms',
	'mscarries',
	'mscarry',
	'mscarries',
	'msgroup',
	'mstack',
	'mlongdiv',
	'msline',
	'mstack',
	'mspace',
	'msqrt',
	'msrow',
	'mstack',
	'mstack',
	'mstyle',
	'msub',
	'msup',
	'msubsup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics',
	'math',
	'mi',
	'mn',
	'mo',
	'ms',
	'mspace',
	'mtext',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'msqrt',
	'mstyle',
	'mmultiscripts',
	'mover',
	'mprescripts',
	'msub',
	'msubsup',
	'msup',
	'munder',
	'munderover',
	'none',
	'maligngroup',
	'malignmark',
	'mtable',
	'mtd',
	'mtr',
	'mlongdiv',
	'mscarries',
	'mscarry',
	'msgroup',
	'msline',
	'msrow',
	'mstack',
	'maction',
	'semantics',
	'annotation',
	'annotation-xml',
];

export default defineConfig({
	lang: 'en-GB',
	title: 'IGCSE Physics Final',
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
		['script', {}, 'document.documentElement.classList.add("dark")'],
		[
			'script',
			{
				src: 'https://cdn.plot.ly/plotly-latest.min.js',
			},
			'',
		],
	],
	cleanUrls: true,
	markdown: {
		config(md) {
			md.use(Mathjax);
		},
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
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
	appearance: false,
});
