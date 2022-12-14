// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

const baseUrl = '/docs/'

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Eco3s',
	tagline:
		'Eco3s는 국내의 생태계 유해종을 발견하고 관련 정보를 손쉽게 공유할 수 있는 서비스입니다.',
	url: 'https://eco3s.github.io/',
	baseUrl,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	favicon: 'img/favicon.ico',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsed: false,
					// editUrl:
					// 	'https://github.com/eco3s/docs/tree/main/packages/create-docusaurus/templates/shared/',
					routeBasePath: '/',
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity:
				'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [
				{
					name: 'og:type',
					content: 'object',
				},
				{
					name: 'og:title',
					content: 'Eco3s API Documentation',
				},
				{
					name: 'og:description',
					content:
						'<생태계 생생생>은 대한민국에 서식하는 다양한 생태계 교란종들을 추적하고, 관련 자료를 공유하고, 신고 알림을 수신할 수 있는 종합 서비스입니다.',
				},
				{
					name: 'theme-color',
					content: '#1EB79A',
				},
				{
					name: 'og:image',
					content: `${baseUrl}img/banner.png`,
				},
				{
					name: 'og:image:width',
					content: '800',
				},
				{
					name: 'og:image:height',
					content: '400',
				},
			],
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				title: 'Eco3s',
				logo: {
					alt: 'Eco3s project logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'README',
						position: 'left',
						label: 'API',
					},
					{
						href: 'https://www.notion.so/Eco3s-e1ef736877fb4783a7b87042a10a2610',
						label: 'Notion',
						position: 'right',
					},
					{
						href: 'https://github.com/eco3s',
						label: 'GitHub',
						position: 'right',
					},
					{
						type: 'docsVersionDropdown',
						position: 'right',
					},
					// {
					// 	type: 'localeDropdown',
					// 	position: 'right',
					// },
				],
				hideOnScroll: true,
			},
			footer: {
				// style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'API',
								to: '/',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Notion',
								href: 'https://www.notion.so/Eco3s-e1ef736877fb4783a7b87042a10a2610',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/eco3s',
							},
						],
					},
				],
				// logo: {
				// 	alt: 'Eco3s project logo',
				// 	src: 'img/logo.svg',
				// 	href: 'https://github.com/eco3s',
				// 	width: 160,
				// 	height: 51,
				// },
				copyright: `Copyright © ${new Date().getFullYear()} Eco3s. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true,
			},
			tableOfContents: {
				maxHeadingLevel: 5,
			},
		}),

	webpack: {
		jsLoader: isServer => ({
			loader: require.resolve('swc-loader'),
			options: {
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
					},
					target: 'es2021',
				},
				module: {
					type: isServer ? 'commonjs' : 'es6',
				},
			},
		}),
	},

	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/docs/img/logo.svg',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/docs/manifest.json',
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#2e8555',
					},
				],
			},
		],
	],
}

module.exports = config
