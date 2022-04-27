import axios, { AxiosPromise } from 'axios'

export const fetchAPI = (
	apiUrl = process.env.API_URL || '',
	path?: string,
	...options: any[]
): AxiosPromise => {
	return axios({
		baseURL: `${apiUrl}${path}`,
		...options
	}).then(({ data }) => data)
}
