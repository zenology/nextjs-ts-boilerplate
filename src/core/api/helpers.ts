import axios, { AxiosResponse } from 'axios'

export const fetchAPI = async <T = any>(
	apiUrl = process.env.API_URL || '',
	path?: string,
	...options: any[]
): Promise<AxiosResponse<T, any>> => {
	return await axios({ baseURL: `${apiUrl}${path}`, ...options })
}
