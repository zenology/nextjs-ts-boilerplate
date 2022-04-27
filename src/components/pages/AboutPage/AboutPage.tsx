import { GetServerSideProps, NextPage } from 'next'
import { withPage } from 'core/hocs'

import { InnerWrapper, PageWrapper } from './AboutPage.styled'

import { fetchAPI } from 'core/api'

interface IAboutPage {
	data?: {
		userId: string
		id: string
		title: string
		completed: string
	}
}

const AboutPage: NextPage<IAboutPage> = ({ data }) => {
	return (
		<PageWrapper>
			<InnerWrapper>
				<p>About Page</p>
				<strong>Server Render Content</strong>
				<div>User ID: {data?.userId}</div>
				<div>Id: {data?.id}</div>
				<div>Title: {data?.title}</div>
				<div>Completed: {String(data?.completed)}</div>
			</InnerWrapper>
		</PageWrapper>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const data = await fetchAPI('https://jsonplaceholder.typicode.com/todos/', query?.id as string)

	return {
		props: {
			title: 'About Page',
			data
		}
	}
}

export default withPage()(AboutPage)
