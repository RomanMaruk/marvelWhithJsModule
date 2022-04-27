import { ROOT_INDEX } from '../../constans/root'

import './Error.css'

class Error {
	render() {
		const htmlWrap = `
			<div class="container__error">
				<span>
					<p class="error__text">Error!!!</p>
					<p class="error__text">Try later</p>
				</span>
			</div>
		`;

		ROOT_INDEX.innerHTML = htmlWrap;
	}
}

export default new Error()