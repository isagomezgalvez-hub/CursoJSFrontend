export const tweetView = (tweet) => {
  return `<div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${tweet.author}</p>
        </div>
      </div>
      <div class="content">
        ${tweet.message}
        <br>
        <time datetime="${tweet.date}">${tweet.date}</time>
      </div>
    </div>
    <div class="card-image">
        <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </div>
  </div>`;
}

export const errorView = (errorMessage) => {
  return `<article class="message is-danger">
			<div class="message-header">
				<p>Error</p>
				<button class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				${errorMessage}
			</div>
		</article>`;
}
