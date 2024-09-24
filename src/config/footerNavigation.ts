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
			'Explorando significados dos sonhos e aprimorando a auto-compreensão.',
		logo: {
			src: '/logo.webp',
			alt: 'Explorando significados dos sonhos e aprimorando a auto-compreensão.',
			text: 'AnalyzeMyDream.com'
		}
	},
	footerColumns: [
		{
			category: 'Recursos',
			subCategories: [
				{
					subCategory: 'Notas de versão',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Referência da API',
					subCategoryLink: '/api'
				},
			]
		},

		{
			category: 'Informações & Suporte',
			subCategories: [
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Contato',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Política de Privacidade',
					subCategoryLink: '/privacy'
				},
				{
					subCategory: 'Termos',
					subCategoryLink: '/terms'
				},
			]
		},
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream 2024.'
	}
}
