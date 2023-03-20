const navToggle = document.querySelector('.mobile-nav-toggle');
const headBtns = document.querySelector('.main-header__buttons');
const headLog = document.querySelector('.top-header__log');

navToggle.addEventListener('click', () => {
	const visibility = headBtns.getAttribute('data-visible');
	const isVisible = visibility === 'true';

	if (!isVisible) {
		headLog.setAttribute('data-visible', isVisible);
		headBtns.setAttribute('data-visible', !isVisible);
	} else {
		headLog.setAttribute('data-visible', isVisible);
		headBtns.setAttribute('data-visible', !isVisible);
	}
})