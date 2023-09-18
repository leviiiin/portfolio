// mobile menu script
const burger = document.querySelector('.burger');
const body = document.getElementById('body');
const menu = document.getElementById('menu');
const m_li = document.getElementById('m-li');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    if (burger.classList.contains('active')) {
        body.classList.add('stop-scroll');
    }
    else {
        body.classList.remove('stop-scroll');
    }

    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(burger);
        if (!withinBoundaries & burger.classList.contains('active')) {
            burger.classList.remove('active');
            menu.classList.remove('open')
            body.classList.remove('stop-scroll');
        }
    })

    m_li.addEventListener('click', function () {
        burger.classList.remove('active');
        menu.classList.remove('open')
        body.classList.remove('stop-scroll');
    })
})

// theme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();


// text animation
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.text-animation');
for (let elm of elements) {
    observer.observe(elm);
}


function onEntryTwo(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('block-show');
        }
    });
}
let options2 = {
    threshold: [0.5]
};
let observer2 = new IntersectionObserver(onEntryTwo, options);
let elements2 = document.querySelectorAll('.block-animation');
for (let elm of elements2) {
    observer2.observe(elm);
}


SmoothScroll({
    animationTime: 400,
    stepSize: 100,
    accelerationDelta: 30,
    accelerationMax: 2,
    touchpadSupport: true,
})

function scrollNav() {
    $('#m-li a').click(function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 300);
        return false;
    });
}
scrollNav();

