import { getDataApi } from '../../utils/getDataApi';
import { API_URL, URL_COMICS } from '../../constans/api';

import './App.css'

class App {
	async render() {
		const data = await getDataApi.getDate(API_URL + URL_COMICS)
		console.log(data)
	}
}

export default new App();