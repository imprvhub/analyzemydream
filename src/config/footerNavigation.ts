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
		{
			category: 'Recursos',
			subCategories: [
				// {
				// 	subCategory: 'Características',
				// 	subCategoryLink: '/features'
				// },
				// {
				// 	subCategory: 'API',
				// 	subCategoryLink: '/api'
				// },
				// {
				// 	subCategory: 'Precios',
				// 	subCategoryLink: '/pricing'
				// },
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
			]
		},
	
		{
			category: 'Información & Soporte',
			subCategories: [
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Política de Privacidad',
					subCategoryLink: '/privacy'
				},
				{
					subCategory: 'Términos',
					subCategoryLink: '/terms'
				},
			]
		},
	
		
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream 2024.'
	}
}
