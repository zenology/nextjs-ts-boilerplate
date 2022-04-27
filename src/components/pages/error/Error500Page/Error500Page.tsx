import { NextPage } from 'next'

type Error500PageProps = {
	statusCode?: number
}

const Error500Page: NextPage<Error500PageProps> = ({ statusCode }) => {
	return <p>Error {statusCode}: Something went wrong.</p>
}

export default Error500Page
