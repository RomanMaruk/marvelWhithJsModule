import { ROOT_MODAL } from '../../constans/root'
import { getDataApi } from '../../utils/getDataApi'

import './Characters.css' 

class Characters {

	renderContent(data) {
		console.log('Content exist')
		let htmlCard = ''
		data.forEach(({name, thumbnail: {extension, path}}) => {
			htmlCard += `
				<li class="characters__item">
				<img class="characters__img" src=${path}/standard_xlarge.${extension} alt="photo character" />
					<span class="characters__name">${name}</span> 
				</li>
			`;
		})

		const htmlWrap = `
			<div class="wrapper">
				<button
					class="characters-close"
					onClick="modal.innerHTML = ''"
				><i class="btn-cross">&#10006;</i></button>
				<ul class="characters__container">
					${htmlCard}
				</ul>
			</div>
		`;

		ROOT_MODAL.innerHTML = htmlWrap
	}

	renderNotification() {

		const html = `
			<div class="wrapper">
				<button
					class="characters-close"
					onClick="modal.innerHTML = ''"
				><i class="btn-cross">&#10006;</i></button>
				<div class="characters__container text">
					<h3 class="characters__text">There no Characters</h3>
				</div>
			</div>
		`
		ROOT_MODAL.innerHTML = html
	}

	async render(url) {
		const data = await getDataApi.getDate(url)

		data.length !== 0 ? this.renderContent(data) : this.renderNotification()

		console.log(data.length)
	}
}

export default new Characters()