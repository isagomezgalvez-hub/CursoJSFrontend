import PostsListController from './controllers/PostListController.js';
import LoaderController from './controllers/LoaderController.js'
import ErrorController from './controllers/ErrorController.js'

window.addEventListener("DOMContentLoaded", (event) => {
	const loader = document.querySelector(".lds-ring");
	const loaderController = new LoaderController(loader);

	const element = document.querySelector('.posts-list');
	const controller = new PostsListController(element);
	controller.loader = loaderController;
	controller.loadPosts();

	const errorElement = document.querySelector('.global-error');
	const errorControler = new ErrorController(errorElement);
	errorControler.showError();

});


