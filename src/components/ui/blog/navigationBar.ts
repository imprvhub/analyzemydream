// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'Exploring dream meanings and enhancing self-understanding.',
		text: 'AnalyzeMyDream'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		// { name: 'Pricing', link: '/pricing' },
		{ name: 'Analyze', link: '/analyze' },
		{ name: 'Explore', link: '/blog' },
		// { name: 'Features', link: '/features' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
						
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		{
			name: 'Categories',
			link: '#',
			submenu: [
			  { name: 'All', link: '//tags/all' },
			  { name: 'Animais', link: '/blog/tags/Animais' },
			  { name: 'Objetos-Lugares', link: '/blog/tags/Objetos-Lugares' },
			  { name: 'Pessoas', link: '/blog/tags/Pessoas' },
			  { name: 'Atividades', link: '/blog/tags/Atividades' },
			  { name: 'Natureza', link: '/blog/tags/Natureza' },
			  { name: 'Sentimentos', link: '/blog/tags/Sentimentos' },
			  { name: 'Fortuna', link: '/blog/tags/Fortuna' },
			  { name: 'Surrealismo', link: '/blog/tags/Surrealismo' },
			  { name: 'Comida', link: '/blog/tags/Comida' },
			  { name: 'Insetos', link: '/blog/tags/Insetos' },
			  { name: 'Aspirações', link: '/blog/tags/Aspiracoes' },
			  { name: 'Saúde', link: '/blog/tags/Saude' },
			  { name: 'Abstrato', link: '/blog/tags/Abstrato' },
			  { name: 'Diversos', link: '/blog/tags/Diversos' }
			]
		  },
		
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
