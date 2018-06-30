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
    var logo = document.getElementById('logo'),
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


function animateHeader() {
    let distance = window.pageYOffset;
    let element = document.getElementsByTagName("header")[0];
    if (distance > 99) {
        element.classList.add("sticy")
    } else {
        element.classList.remove("sticy")
    }
}

window.onscroll = function () {
    animateHeader()
    animateIfVisible();
}

animateIfVisible();