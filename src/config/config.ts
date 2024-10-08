// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Exploring dream meanings and enhancing self-understanding.',
	siteDescription:
		'AnalyzeMyDream is a comprehensive dream interpretations and insights platform.',
	ogImage: '/logo.webp',
	logo: {
		src: '/logo.webp',
		alt: 'AnalyzeMyDream logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
