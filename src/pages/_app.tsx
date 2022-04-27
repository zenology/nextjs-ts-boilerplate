import Head from 'next/head'
import Helmet from 'react-helmet'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, styleGuide } from 'core/styles'

class MyApp extends App {
	render(): JSX.Element {
		const { Component, pageProps, router } = this.props

		return (
			<>
				{/**
				 * Cannot set meta tag inside _document.js
				 * see more: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md
				 */}
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Helmet titleTemplate={'%s'} />

				<ThemeProvider theme={styleGuide}>
					<GlobalStyles />
					<Component {...pageProps} router={router} />
				</ThemeProvider>
			</>
		)
	}
}

export default MyApp
