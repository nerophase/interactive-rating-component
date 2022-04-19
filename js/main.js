document.addEventListener('DOMContentLoaded', () => {
	let current_rating = 0;
	const ratings = document.querySelector('.ratings').children;
	const submit = document.querySelector('.submit');
	const message = document.querySelector('.message');
	const rating_card = document.querySelector('#rating-card');
	const thank_card = document.querySelector('#thank-card');
	const rate_message = document.querySelector('#rate-message');

	for (item of ratings) {
		item.addEventListener('click', function () {
			for (rating of ratings) {
				rating.classList.remove('active');
			}

			this.classList.toggle('active');
			current_rating = parseInt(this.children[0].textContent);
			// console.log(current_rating);
		});
	}

	submit.onclick = function () {
		if (current_rating === 0) {
			message.classList.remove('d-none');
			message.classList.add('d-flex');
			return;
		}

		message.classList.add('d-none');
		message.classList.remove('d-flex');

		rating_card.classList.add('d-none');
		thank_card.classList.remove('d-none');

		rate_message.innerText = `You selected ${current_rating} out of 5`;
	};
});
