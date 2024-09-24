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
		src: '/logo.webp',
		alt: 'Exploring dream meanings and enhancing self-understanding.',
		text: 'AnalyzeMyDream.com',
	},
	navItems: [
		{ name: 'Home', link: '/' },
		
		  {
			name: 'Analyzers',
			link: '#', 
			submenu: [
				{ name: 'Fast-AI Dream Analyzer', link: '/fast-analyzer' },
				{ name: 'Advanced-AI Dream Analyzer', link: '/advanced-analyzer' },
				{ name: 'Custom-AI Dream Analyzer', link: '/custom-analyzer' },
				{ name: 'Comparative-AI Dream Analyzer', link: '/comparative-analyzer' },
				{ name: 'Batch-AI Dream Analyzer', link: '/batch-analyzer' }
			]
		},
		{
			name: 'Explore',
			link: '#',
			submenu: [
				{ name: 'All Meanings', link: '/blog/' },
				{ name: 'Animals', link: '/blog/tags/Animals' },
				{ name: 'Objects-Places', link: '/blog/tags/Objects-Places' },
				{ name: 'People', link: '/blog/tags/People' },
				{ name: 'Activities', link: '/blog/tags/Activities' },
				{ name: 'Nature', link: '/blog/tags/Nature' },
				{ name: 'Feelings', link: '/blog/tags/Feelings' },
				{ name: 'Fortune', link: '/blog/tags/Fortune' },
				{ name: 'Surrealism', link: '/blog/tags/Surrealism' },
				{ name: 'Food', link: '/blog/tags/Food' },
				{ name: 'Insects', link: '/blog/tags/Insects' },
				{ name: 'Aspirations', link: '/blog/tags/Aspirations' },
				{ name: 'Health', link: '/blog/tags/Health' },
				{ name: 'Abstract', link: '/blog/tags/Abstract' },
				{ name: 'Miscellaneous', link: '/blog/tags/Miscellaneous' }
			  ]
		  },
		
		{ name: 'API', link: '/api' },
		{ name: 'Pricing', link: '/pricing' },
		{
            name: 'EN',
            link: '#',
            submenu: [
                { name: 'Spanish', link: 'https://es.analyzemydream.com/' },
                { name: 'Brazilian Portuguese', link: 'https://br.analyzemydream.com/' },
            ]
        },
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
