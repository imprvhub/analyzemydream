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
		/*
			{
				category: 'Product',
				subCategories: [
					{
						subCategory: 'Features',
						subCategoryLink: '/features'
					},
					{
						subCategory: 'FAQ',
						subCategoryLink: '/faq'
					},
					{
						subCategory: 'Pricing',
						subCategoryLink: '/pricing'
					},
					{
						subCategory: 'Changelog',
						subCategoryLink: '/changelog'
					},
					{
						subCategory: 'Terms',
						subCategoryLink: '/terms'
					}
				]
			}
			*/

		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy'
				}
			]
		},
		{
			category: 'Reach out',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream 2024.'
	}
}
