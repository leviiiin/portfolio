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

// top scroll
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 500 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
btnUp.addEventListener();

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