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
			'Explorando el significado de los sueños y mejorando la auto-comprensión.',
		logo: {
			src: '/logo.webp',
			alt: 'Explorando el significado de los sueños y mejorando la auto-comprensión.',
			text: 'AnalyzeMyDream.com'
		}
	},
	footerColumns: [
		{
			category: 'Recursos',
			subCategories: [
				{
					subCategory: 'Registro de cambios',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Referencia de API',
					subCategoryLink: '/api'
				},
			]
		},

		{
			category: 'Información y Soporte',
			subCategories: [
				{
					subCategory: 'Preguntas frecuentes',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Política de privacidad',
					subCategoryLink: '/privacy'
				},
				{
					subCategory: 'Términos de uso',
					subCategoryLink: '/terms'
				},
			]
		},
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream. Todos los derechos reservados.'
	}
}
