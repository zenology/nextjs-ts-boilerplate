import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentInitialProps,
	DocumentContext
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

type InitialProps = {
	styles: DocumentInitialProps['styles']
	[key: string]: any
}

export default class MyDocument extends Document<InitialProps> {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: React.ComponentType<any>) => (props: any) =>
						sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: sheet.getStyleElement()
			}
		} finally {
			sheet.seal()
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href={'/favicon.ico'} />
					{this.props.styles}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
