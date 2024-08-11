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
		{ name: 'Analizar', link: '/analyze' },
		{ name: 'Explorar', link: '/blog' },
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
			name: 'Categorías',
			link: '#',
			submenu: [
				{ name: 'Abstracción', link: '/blog/tags/Abstraccion' },
				{ name: 'Actividades', link: '/blog/tags/Actividades' },
				{ name: 'Animales', link: '/blog/tags/Animales' },
				{ name: 'Aspiraciones', link: '/blog/tags/Aspiraciones' },
				{ name: 'Sentimientos', link: '/blog/tags/Sentimientos' },
				{ name: 'Comida', link: '/blog/tags/Comida' },
				{ name: 'Fortuna', link: '/blog/tags/Fortuna' },
				{ name: 'Salud', link: '/blog/tags/Salud' },
				{ name: 'Insectos', link: '/blog/tags/Insectos' },
				{ name: 'Varios', link: '/blog/tags/Varios' },
				{ name: 'Naturaleza', link: '/blog/tags/Naturaleza' },
				{ name: 'Objetos-Lugares', link: '/blog/tags/Objetos-Lugares' },
				{ name: 'Personas', link: '/blog/tags/Personas' },
				{ name: 'Surrealismo', link: '/blog/tags/Surrealismo' },
				{ name: 'Situaciones Amenazantes', link: '/blog/tags/Situaciones%20Amenazantes' }
				
			]
		  },
		
		{ name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
