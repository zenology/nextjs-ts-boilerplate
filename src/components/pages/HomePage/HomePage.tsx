import envObj from 'core/config/env'
import { withPage } from 'core/hocs'

import { PageWrapper } from './HomePage.styled'

import type { GetStaticProps } from 'next'

type PageProps = {
	title: string
	description: string
}

const Home: Page.PageType<PageProps> = ({ t }) => {
	return (
		<div className="container">
			<PageWrapper>
				<span>{t('page.home.text-1')}</span>
				<h1>{t('page.home.text-2', { env: envObj.NODE_ENV })}</h1>
			</PageWrapper>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			title: 'Welcome Home',
			description: 'Hello World'
		}
	}
}

export default withPage()(Home)
