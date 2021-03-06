import axios from 'axios';

import { API_KEY } from '../constans/api'

class GetDataApi {
	async getDate(url) {
		try {
			const response = await axios.get(url, {
				params: {
					apikey: API_KEY,
					limit: 100
				}
			});

			return response.data.data.results;
		} catch (error) {
			return false
		}
	}
}

export const getDataApi = new GetDataApi();