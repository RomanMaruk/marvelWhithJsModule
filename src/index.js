import 'regenerator-runtime/runtime'; // becouse async doesn't work in parsel and in webpack 

import App from './components/App/App';

(async () => {
	await App.render()
})();