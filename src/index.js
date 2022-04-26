import 'regenerator-runtime/runtime'; // becouse async doesn't work in parsel and in webpack 

import { getDataApi } from './utils/getDataApi';
import {
	API_URL,
	URL_COMICS,
	URL_CHARACTERS
} from './constans/api'


(async () => {
	const data = await getDataApi.getDate(API_URL + URL_COMICS)
	console.log(data)
})();