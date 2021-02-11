import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { tweetView } from '../views.js';

export default class LoaderController extends BaseController {

	showLoading() {
		this.element.classList.remove('hidden');
	}

	hideLoading() {
		this.element.classList.add('hidden');
	}

}
