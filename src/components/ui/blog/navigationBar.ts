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
			  { name: 'Abstracto', link: '//tags/Abstract' },
			  { name: 'Activities', link: '//tags/Activities' },
			  { name: 'Animals', link: '//tags/Animals' },
			  { name: 'Aspirations', link: '//tags/Aspirations' },
			  { name: 'Feelings', link: '//tags/Feelings' },
			  { name: 'Food', link: '//tags/Food' },
			  { name: 'Fortune', link: '//tags/Fortune' },
			  { name: 'Health', link: '//tags/Health' },
			  { name: 'Insects', link: '//tags/Insects' },
			  { name: 'Miscellaneous', link: '//tags/Miscellaneous' },
			  { name: 'Nature', link: '//tags/Nature' },
			  { name: 'Objects-Places', link: '//tags/Objects-places' },
			  { name: 'Personas', link: '//tags/People' },
			  { name: 'Supernatural', link: '//tags/Supernatural' },
			  { name: 'Threatening Situations', link: '//tags/Threatening%20Situations' }
			]
		  },
		
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
