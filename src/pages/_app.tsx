import App from 'next/app'
import Head from 'next/head'

import { ComposeProvider } from 'core/providers'
import { GlobalStyles } from 'core/styles'

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

				<ComposeProvider>
					<GlobalStyles />
					<Component {...pageProps} router={router} />
				</ComposeProvider>
			</>
		)
	}
}

export default MyApp
