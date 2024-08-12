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
			src: '/logo.png',
			alt: 'Explorando significados dos sonhos e aprimorando a auto-compreensão.',
			text: 'AnalyzeMyDream.com'
		}
	},
	footerColumns: [
		/*
			{
				category: 'Produto',
				subCategories: [
					{
						subCategory: 'Recursos',
						subCategoryLink: '/features'
					},
					{
						subCategory: 'FAQ',
						subCategoryLink: '/faq'
					},
					{
						subCategory: 'Preços',
						subCategoryLink: '/pricing'
					},
					{
						subCategory: 'Histórico de mudanças',
						subCategoryLink: '/changelog'
					},
					{
						subCategory: 'Termos',
						subCategoryLink: '/terms'
					}
				]
			}
			*/

		{
			category: 'Sobre nós',
			subCategories: [
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Termos',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Política de Privacidade',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Entre em contato',
			subCategories: [
				{
					subCategory: 'Contato',
					subCategoryLink: '/contact'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© AnalyzeMyDream 2024.'
	}
}
