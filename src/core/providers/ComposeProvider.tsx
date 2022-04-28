import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import i18n from 'core/config/i18n'
import { styleGuide } from 'core/styles'

interface IComposeProvider {
	children?: React.ReactNode
}

type Provider = {
	provider: React.ElementType<any>
	props?: Record<string, any>
}

const ComposeProvider: React.FC<IComposeProvider> = ({ children }) => {
	const providers = React.useMemo<Provider[]>(
		() => [
			{ provider: I18nextProvider, props: { i18n } },
			{ provider: ThemeProvider, props: { theme: styleGuide } }
		],
		[]
	)

	const renderProvider = React.useMemo(() => {
		return providers.reduceRight((componentTree, cfg) => {
			const { Provider, props } = { Provider: cfg.provider, props: cfg.props || {} }

			return <Provider {...props}>{componentTree}</Provider>
		}, children) as JSX.Element
	}, [children, providers])

	return renderProvider || <div>{children}</div>
}

export default ComposeProvider
