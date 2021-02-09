import { tweetView } from './views.js';
import DataService from './services/DataService.js';

window.addEventListener('DOMContentLoaded', (event) => {

	const loader = document.querySelector('.lds-ring');
	loader.classList.add('hidden');

	const tweets = DataService.getTweets();

	const list = document.querySelector('.posts-list');
	for (const tweet of tweets) {
		const tweetElement = document.createElement('article');
		const tweetHTML = tweetView(tweet);
		tweetElement.innerHTML = tweetHTML;
		list.appendChild(tweetElement);
	}

});
