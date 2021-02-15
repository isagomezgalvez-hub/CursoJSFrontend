import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { tweetView } from '../views.js';

export default class PostsListController extends BaseController {

	render(tweets) {
		for (const tweet of tweets) {
			const article = document.createElement('article');
			article.innerHTML = tweetView(tweet);
			this.element.appendChild(article);
		}
	}

	async loadPosts() {
		this.publish(this.events.START_LOADING, {});
		try {
			const tweets = await dataService.getTweets();
			this.render(tweets);
		} catch (error) {
			console.error(error);
			this.publish(this.events.error, error);
		} finally {
			this.publish(this.events.FINISH_LOADING, {});
		}
	}

}

