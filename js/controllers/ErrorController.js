import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { errorView, tweetView } from '../views.js';

export default class ErrorController extends BaseController {
	constructor(element) {
		super(element);
		this.subscribe(this.events.ERROR, (error) => {
			this.showError(error);
		})
	}

	showError(errorMessage) {
		this.element.innerHTML = errorView(errorMessage);
		this.element.classList.remove('hidden');
		this.element.addEventListener('click', (event) => {
			console.log('CLIk para cerrar', event)
			if (event.target === this.element || event.target.classList.contains('delete')) {
				this.element.classList.add('hidden');
			}

		})
	}

	hideError() {

	}

}
