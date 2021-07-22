$(document).ready(function () {
    const navBtn = document.querySelectorAll('.navigation__item-open');
    const tabItem = document.querySelectorAll('.navigation__wrapp');
    navBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let activeBtn = item;
            let activeId = activeBtn.getAttribute('data-tab');
            let activeTab = document.querySelector(activeId);

            tabItem.forEach(function (item) {
                activeTab.classList.remove('navigation__wrapp-active');
            });

            $(activeBtn).toggleClass('navigation__item-close')
            activeTab.classList.add('navigation__wrapp-active');
            if (!activeBtn.classList.contains('navigation__item-close')) {
                activeTab.classList.remove('navigation__wrapp-active');
            }
        });
    });
    $('.header__open-btn').click((event) => {
        $('body').toggleClass('look')
    });

    $('.authorization__registration-transition').click((event) => {
        $('.authorization__wrapp-input').toggleClass('authorization__active'),
            $('.authorization__wrapp-registration').removeClass('authorization__active')
    });

    $('.authorization-deactive').click((event) => {
        $('.authorization__wrapp-registration').toggleClass('authorization__active'),
            $('.authorization__wrapp-input').removeClass('authorization__active')
    });


    $('.main__slaider-wrapp').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('body').on('click', '.password-control', function () {
        if ($('#password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
        }
        return false;
    });

    $('body').on('click', '.password-control', function () {
        if ($('#password-input-2').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-input-2').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input-2').attr('type', 'password');
        }
        return false;
    });

    $('.authorization-popup-active').magnificPopup({});

});