export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'AnalyzeMyDream',
		aboutText:
			'Exploring dream meanings and enhancing self-understanding.',
		logo: {
			src: '/logo.png',
			alt: 'Exploring dream meanings and enhancing self-understanding.',
			text: 'AnalyzeMyDream.com'
		}
	},
	footerColumns: [
			{
				category: 'Resources',
				subCategories: [
					// {
					// 	subCategory: 'Features',
					// 	subCategoryLink: '/features'
					// },
					// {
					// 	subCategory: 'API',
					// 	subCategoryLink: '/api'
					// },
					// {
					// 	subCategory: 'Pricing',
					// 	subCategoryLink: '/pricing'
					// },
					{
						subCategory: 'Changelog',
						subCategoryLink: '/changelog'
					},
				]
			},


		{
			category: 'Info & Support',
			subCategories: [
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				},
			]
		},
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream 2024.'
	}
}
