import { fetchAPI } from 'core/api'
import { withPage } from 'core/hocs'

import { InnerWrapper, PageWrapper } from './AboutPage.styled'

import type { GetServerSideProps } from 'next'

interface IAboutPage {
	title: string
	data?: {
		userId: string
		id: string
		title: string
		completed: string
	}
}

const AboutPage: Page.PageType<IAboutPage> = ({ t, data }) => {
	return (
		<PageWrapper>
			<InnerWrapper>
				<p>{t('page.about.text-1')}</p>
				<strong>{t('page.about.text-2')}</strong>
				<div>{t('page.about.user-id', { id: data?.userId })}</div>
				<div>{t('page.about.id', { id: data?.id })}</div>
				<div>{t('page.about.title', { name: data?.title })}</div>
				<div>{t('page.about.completed', { completed: data?.completed })}</div>
			</InnerWrapper>
		</PageWrapper>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const response = await fetchAPI(
		'https://jsonplaceholder.typicode.com/todos/',
		query?.id as string
	)

	return {
		props: {
			title: 'About Page',
			data: response.data
		}
	}
}

export default withPage()(AboutPage)
