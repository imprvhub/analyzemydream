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
			'Descubre el significado de tus sueños.',
		logo: {
			src: '/logo.png',
			alt: 'Descubre el significado de tus sueños',
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
			category: 'Sobre nosotros',
			subCategories: [
				{
					subCategory: 'Preguntas Frecuentes',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Términos y condiciones',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Política de Privacidad',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Ponte en contacto',
			subCategories: [
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
			]
		}
		
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream 2024.'
	}
}
