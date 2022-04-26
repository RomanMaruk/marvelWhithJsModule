import { getDataApi } from '../../utils/getDataApi';
import { API_URL, URL_CHARACTERS, URL_COMICS } from '../../constans/api';
import { ROOT_INDEX } from '../../constans/root';

import './Comics.css'

class Comics {

	openCharacter() {
		document.querySelectorAll('.comics__item').forEach(element => {
			const url = element.getAttribute('data-url')

			element.addEventListener('click', () => {
				console.log(url)
			})
		})
	}
	async render() {
		const data = await getDataApi.getDate(API_URL + URL_COMICS);
		let htmlCard = '';

		const comics = data.map(({id, title, thumbnail: {extension, path}}) => {
			return {id, title, extension, path}
		})
			.filter((arr) => !arr.path.includes('image_not_available'));

		comics.forEach(({id, title, extension, path}) => {
			const url = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;

			htmlCard += `
				<li class="comics__item" data-url=${url}>
					<span class="comics__name">${title}</span> 
					<img class="comics__img" src=${path}/standard_xlarge.${extension} alt="photo character" />
				</li>
			`;
		});

		ROOT_INDEX.innerHTML = `
			<ul class="comics-container">
				${htmlCard}
			</ul>
		`;
	}
}

export default new Comics();