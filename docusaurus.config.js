// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Eco3s',
	tagline:
		'Eco3s는 국내의 생태계 유해종을 발견하고 관련 정보를 손쉽게 공유할 수 있는 서비스입니다.',
	url: 'https://eco3s.github.io/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	favicon: 'img/favicon.ico',

	i18n: {
		defaultLocale: 'ko-kr',
		locales: ['ko-kr'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// editUrl:
					// 	'https://github.com/eco3s/docs/tree/main/packages/create-docusaurus/templates/shared/',
					routeBasePath: '/',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
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
					{
						type: 'localeDropdown',
						position: 'right',
					},
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
								to: '/docs/',
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
		}),
}

module.exports = config
