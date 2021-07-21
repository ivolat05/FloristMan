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


});