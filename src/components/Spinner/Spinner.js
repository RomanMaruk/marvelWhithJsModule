import { ROOT_MODAL } from '../../constans/root';
import './Spinner.css';
import spinnerSVG from './spinner.svg'

class Spinner {

	render() {
		const html = `
			<div class="container-spinner" style="background-image: url(${spinnerSVG})">
			</div>
		`

		ROOT_MODAL.innerHTML = html
	}
}

export default new Spinner()
