import PostsListController from './controllers/PostListController.js';

window.addEventListener("DOMContentLoaded", async (event) => {
	const loader = document.querySelector(".lds-ring");
	loader.classList.add("hidden");

	const element = document.querySelector('.posts-list');
	const controller = new PostsListController(element);
	controller.loadPosts();

});

