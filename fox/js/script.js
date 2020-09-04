document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll('.experience-wrap__info--card')
    const cardsStatus = document.querySelectorAll('.experience-wrap__info--card .status')
    const anchors = document.querySelectorAll('a[href*="#"]')
    const form = document.getElementById('form')
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const formInputs = document.querySelectorAll('.contact-wrap__form input')
    const textArea = document.querySelector('.contact-wrap__form textarea')
    const formSubmited = document.querySelector('.form-submit')
    const mobileMenu = document.querySelector('.header-wrap__mobile--menu')
    const menu = document.querySelector('.header-wrap__menu')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)
            menu.classList.remove('show-menu')
            mobileMenu.classList.remove('opened')
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    if (form !== null) {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            if (name.value.length < 2) {
                name.classList.add('novalid')
            }
            else {
                name.classList.remove('novalid')
            }
            if (phone.value.length < 1) {
                phone.classList.add('novalid')
            }
            else {
                phone.classList.remove('novalid')
            }
            if (name.value.length > 2 && phone.value.length > 0) {
                name.classList.remove('novalid')
                phone.classList.remove('novalid')
                formSubmited.classList.add('submited')
                formInputs.forEach(item => item.value = '')
                textArea.value = ''
                setTimeout(() => {
                    formSubmited.classList.remove('submited')
                }, 4000)
            }
        })
    }


    if (cardsStatus !== null) {
        let tempStatus = 'en'
        cardsStatus.forEach(item => item.addEventListener("click", (e) => {
            if (cards[Number(e.target.id)].getAttribute('lang') !== null) {
                tempStatus = cards[Number(e.target.id)].getAttribute('lang')
            }
            cards.forEach(item2 => {
                item2.classList.remove('active')
                item2.setAttribute('lang', 'en')
            })
            cardsStatus.forEach(item3 => {
                item3.removeAttribute('lang')
                item3.innerHTML = '+'
                if (item3.getAttribute('lang') != 'ru') {
                    item3.innerHTML = '+'
                    item3.setAttribute('lang', 'en')
                }
            })
            if (tempStatus == cards[Number(e.target.id)].getAttribute('lang')) {
                cards[Number(e.target.id)].classList.add('active')
                cards[Number(e.target.id)].setAttribute('lang', 'ru')
                e.target.setAttribute('lang', 'ru')
                e.target.innerHTML = '-'
            }
            else {
                cards[Number(e.target.id)].classList.remove('active')
                cards[Number(e.target.id)].setAttribute('lang', 'en')
                e.target.setAttribute('lang', 'en')
                e.target.innerHTML = '+'
            }
        }))
    }

    if (mobileMenu !== null) {
        mobileMenu.addEventListener("click", () => {
            menu.classList.toggle('show-menu')
            mobileMenu.classList.toggle('opened')
        })
    }

    jQuery('.reviews-wrap__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    jQuery("#phone").mask("+38 (099) 99-99-999")


    function testWebP(callback) {

        var webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        }
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp')
        }
    })

})