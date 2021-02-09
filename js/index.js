import { tweetView } from "./views.js";
import dataService from "./services/DataService.js";

window.addEventListener("DOMContentLoaded", async (event) => {
	const loader = document.querySelector(".lds-ring");
	loader.classList.add("hidden");

	const cargarTweets = (tweets) => {
		console.log('BIEN! VOY A PINTAR LOS TWEETS');
		const list = document.querySelector(".posts-list");
		for (const tweet of tweets) {
			const tweetElement = document.createElement("article");
			const tweetHTML = tweetView(tweet);
			tweetElement.innerHTML = tweetHTML;
			list.appendChild(tweetElement);
		}
	};

	const avisarDelError = (error) => {
		console.error('NO SE HAN PODIDO CARGAR LOS TWEETS');
	};

	dataService.getTweets().then(cargarTweets).catch(avisarDelError);


	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log('Estos son los datos', data)
	} catch (error) {
		console.error('Se ha producido un error', error)
	}





});
