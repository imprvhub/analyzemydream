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
			name: 'Explore',
			link: '#',
			submenu: [
			  { name: 'All', link: '//tags/all' },
			  { name: 'Animals', link: '/blog/tags/Animals' },
			  { name: 'Objects-Places', link: '/blog/tags/Objects-places' },
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
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
