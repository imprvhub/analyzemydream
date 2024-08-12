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
		alt: 'Explorando significados dos sonhos e aprimorando o autoconhecimento.',
		text: 'AnalyzeMyDream.com'
	},
	navItems: [
		{ name: 'Início', link: '/' },
		{ name: 'Analisar', link: '/analyze' },
		{ name: 'Explorar', link: '/blog' },
		// { name: 'Recursos', link: '/features' },
		// {
		// 	name: 'Recursos',
		// 	link: '#',
		// 	submenu: [
						
		// 		{ name: 'Registro de Alterações', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Termos', link: '/terms' }
		// 	]
		// },
		{
			name: 'Categorias',
			link: '#',
			submenu: [
				{ name: 'Abstração', link: '/blog/tags/Abstração' },
				{ name: 'Atividades', link: '/blog/tags/Atividades' },
				{ name: 'Animais', link: '/blog/tags/Animais' },
				{ name: 'Aspirações', link: '/blog/tags/Aspirações' },
				{ name: 'Sentimentos', link: '/blog/tags/Sentimentos' },
				{ name: 'Comida', link: '/blog/tags/Comida' },
				{ name: 'Fortuna', link: '/blog/tags/Fortuna' },
				{ name: 'Saúde', link: '/blog/tags/Saúde' },
				{ name: 'Insetos', link: '/blog/tags/Insetos' },
				{ name: 'Vários', link: '/blog/tags/Vários' },
				{ name: 'Natureza', link: '/blog/tags/Natureza' },
				{ name: 'Objetos-Lugares', link: '/blog/tags/Objetos-Lugares' },
				{ name: 'Pessoas', link: '/blog/tags/Pessoas' },
				{ name: 'Surrealismo', link: '/blog/tags/Surrealismo' },
				{ name: 'Situações-Ameaçadoras', link: '/blog/tags/Situações-Ameaçadoras' }
			  ]
			  
		},
		{ name: 'Contato', link: '/contact' }
	],
	navActions: [{ name: 'Experimente agora', link: '/', style: 'primary', size: 'lg' }]
}
