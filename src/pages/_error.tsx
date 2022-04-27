import { NextPage } from 'next'

import Error500Page from 'components/pages/error/Error500Page/Error500Page'

const ErrorPage: NextPage = () => {
	return <Error500Page />
}

ErrorPage.getInitialProps = async ({ res, err }) => {
	if (res?.statusCode === 404) {
		return {
			notFound: false
		}
	}

	return { statusCode: err?.statusCode }
}

export default ErrorPage
