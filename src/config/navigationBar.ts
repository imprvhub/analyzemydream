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
		text: 'AnalyzeMyDream.com'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		
		// { name: 'Explorar', link: '/blog' },
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
			name: 'Explorar',
			link: '#',
			submenu: [
				{ name: 'Todos', link: '/blog/'},
				{ name: 'Animales', link: '/blog/tags/Animales' },
				{ name: 'Objetos-Lugares', link: '/blog/tags/Objetos-Lugares' },
				{ name: 'Personas', link: '/blog/tags/Personas' },
				{ name: 'Actividades', link: '/blog/tags/Actividades' },
				{ name: 'Naturaleza', link: '/blog/tags/Naturaleza' },
				{ name: 'Sentimientos', link: '/blog/tags/Sentimientos' },
				{ name: 'Fortuna', link: '/blog/tags/Fortuna' },
				{ name: 'Surrealismo', link: '/blog/tags/Surrealismo' },
				{ name: 'Comida', link: '/blog/tags/Comida' },
				{ name: 'Insectos', link: '/blog/tags/Insectos' },
				{ name: 'Aspiraciones', link: '/blog/tags/Aspiraciones' },
				{ name: 'Salud', link: '/blog/tags/Salud' },
				{ name: 'Abstracción', link: '/blog/tags/Abstracción' },
				{ name: 'Miscelánea', link: '/blog/tags/Miscelánea' },	
			]
		  },	
		{ name: 'Analizar', link: '/analyze' },
		{ name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
