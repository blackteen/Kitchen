function initPreloader(callback) {
    let time = 1000,
        body = document.getElementById('preloader');

    function fadeIn() {
        body.remove()
    }
    setTimeout(fadeIn, time)
    callback(time)
}
initPreloader(function (n) {
    let logo = document.getElementById('logo'),
        nav = document.getElementById('nav'),
        main = document.getElementById('main');
    setTimeout(() => {
        [nav, main].forEach((i) => {
            i.style.opacity = 1
        })
    }, n + n / 2)
    // setTimeout(() => {
    //     logo.classList.add("faded");
    // }, n * 2)
})

function elementPartInViewport(el) {
    let top = el.offsetTop,
        left = el.offsetLeft,
        width = el.offsetWidth,
        height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

function animateIfVisible() {
    let arr = document.getElementsByClassName('animate');
    [].forEach.call(arr, (el, i) => {
        if (elementPartInViewport(el)) {
            el.classList.add('animated');
        } else {
            //            el.classList.remove('animated');
        }
    })
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function animateHeader() {
    let distance = window.pageYOffset;
    let element = document.getElementsByTagName("header")[0];
    if (distance > 99) {
        element.classList.add("sticy")
    } else {
        element.classList.remove("sticy")
    }
}
window.addEventListener('scroll', debounce(() => animateHeader(), 10));
window.addEventListener('scroll', debounce(() => animateIfVisible(), 10));

animateIfVisible();