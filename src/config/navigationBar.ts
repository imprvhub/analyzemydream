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
		
		{
			name: 'Explorar',
			link: '#',
			submenu: [
				{ name: 'Todos', link: '/blog'},
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
		{ name: 'Analisar', link: '/analyze' },
		//  { name: 'Explorar', link: '/blog' },
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
		// { name: 'API', link: '/api'},
		{ name: 'Contato', link: '/contact' },
		{
			name: 'PT',
			link: '#',
			submenu: [
				{ name: 'Inglês', link: 'https://analyzemydream.com/' },
				{ name: 'Espanhol', link: 'https://es.analyzemydream.com/' },
			]
		}
	],
	navActions: [{ name: 'Experimente agora', link: '/', style: 'primary', size: 'lg' }]
}
