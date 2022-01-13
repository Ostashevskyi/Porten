const navToggle = document.querySelector('.mobile-nav-toggle');
const headBtns = document.querySelector('.main-header__buttons');
const headLog = document.querySelector('.top-header__log');

navToggle.addEventListener('click', () => {
	const visibility = headBtns.getAttribute('data-visible');

	if (visibility === 'false') {
		headLog.setAttribute('data-visible', "false");
		headBtns.setAttribute('data-visible', "true");
	} else {
		headLog.setAttribute('data-visible', "true");
		headBtns.setAttribute('data-visible', "false");
	}
})