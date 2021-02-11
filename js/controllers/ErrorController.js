import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { errorView, tweetView } from '../views.js';

export default class ErrorController extends BaseController {

	showError(errorMessage) {
		this.element.innerHTML = errorView(errorMessage);
		this.element.classList.remove('hidden')
	}

	hideError() {

	}

}
