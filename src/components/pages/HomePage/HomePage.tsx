import { GetStaticProps, NextPage } from 'next'
import { withPage } from 'core/hocs'

import { PageWrapper } from './HomePage.styled'

const Home: NextPage = () => {
	return (
		<div className="container">
			<PageWrapper>
				<span>The React starter for</span>
				<h1>Server-Rendered Apps</h1>
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
