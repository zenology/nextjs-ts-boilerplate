import React from 'react'

import Head from 'next/head'

import type { Router } from 'next/router'

interface IMetaPageComponent {
	router: Router
	title?: string
	meta?: Record<string, any>
	[key: string]: any
}

const withMeta = (
	PageComponent: React.ComponentType<IMetaPageComponent>
): React.FC<IMetaPageComponent> => {
	const EnhancedPageComponent: React.FC<IMetaPageComponent> = (props) => {
		const { router, title, meta = {} } = props

		return (
			<>
				<Head>
					{title && <title>{title}</title>}
					{Object.keys(meta).map((name) => (
						<meta key={name} name={name} content={meta[name]} />
					))}
					<meta property="og:url" content={router?.asPath} />
					<link rel="canonical" href={router?.asPath} />
				</Head>
				<PageComponent {...props} />
			</>
		)
	}

	return EnhancedPageComponent
}

export default withMeta
