import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'
import React from 'react'
import Helmet, { HelmetData } from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

type InitialProps = {
	helmet: HelmetData
	styles: any
	styleTags: any
	[key: string]: any
}

export default class MyDocument extends Document<InitialProps> {
	static async getInitialProps({ renderPage }: { renderPage: any }): Promise<DocumentInitialProps> {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet()

		// Step 2: Retrieve styles from components in the page
		const documentProps = renderPage(
			(App: React.ComponentType<any>) => (props: any) => sheet.collectStyles(<App {...props} />)
		)

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement()

		return {
			...documentProps,
			styleTags,
			helmet: Helmet.renderStatic(),
			styles: null
		}
	}

	render(): JSX.Element {
		const { helmet } = this.props
		const htmlAttrs = helmet.htmlAttributes.toComponent()
		const bodyAttrs = helmet.bodyAttributes.toComponent()

		return (
			<Html {...htmlAttrs}>
				<Head>
					{helmet.title.toComponent()}
					{helmet.meta.toComponent()}
					<link rel="shortcut icon" href={'/favicon.ico'} />
					{helmet.link.toComponent()}
					{helmet.script.toComponent()}
					{this.props.styleTags}
				</Head>
				<body {...bodyAttrs}>
					{helmet.noscript.toComponent()}
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
