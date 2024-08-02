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
		text: 'Dream-Insights.com'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		// { name: 'Pricing', link: '/pricing' },
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
			  { name: 'Abstract', link: '/blog/tags/Abstract' },
			  { name: 'Activities', link: '/blog/tags/Activities' },
			  { name: 'Animals', link: '/blog/tags/Animals' },
			  { name: 'Aspirations', link: '/blog/tags/Aspirations' },
			  { name: 'Feelings', link: '/blog/tags/Feelings' },
			  { name: 'Food', link: '/blog/tags/Food' },
			  { name: 'Fortune', link: '/blog/tags/Fortune' },
			  { name: 'Health', link: '/blog/tags/Health' },
			  { name: 'Insects', link: '/blog/tags/Insects' },
			  { name: 'Miscellaneous', link: '/blog/tags/Miscellaneous' },
			  { name: 'Nature', link: '/blog/tags/Nature' },
			  { name: 'Objects-Places', link: '/blog/tags/Objects-places' },
			  { name: 'People', link: '/blog/tags/People' },
			  { name: 'Supernatural', link: '/blog/tags/Supernatural' },
			  { name: 'Threatening Situations', link: '/blog/tags/Threatening%20Situations' }
			]
		  },
		
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
