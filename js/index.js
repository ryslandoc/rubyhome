const triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})

$(function () {
    $(document).on('click', '.menu-btn', function () {
        let wrapper = $('.wrapper-nav')
        let body = $('.body')
        if (wrapper.hasClass('open')) {
            body.addClass('active-body');
        } else {
            body.removeClass('active-body');
        }
        $(wrapper).toggleClass('open');
    });

    const navMenu = document.querySelector("#navMenu");
    navMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

$(document).ready(function () {
    $('.carousel-reviews').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: '.carousel-dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});