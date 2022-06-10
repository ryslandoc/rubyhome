const triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})

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
                // breakpoint: 1024,
                // settings: {
                //     slidesToShow: 3,
                //     slidesToScroll: 3,
                //     infinite: true,
                //     dots: true
                // }
            },
            {
                // breakpoint: 600,
                // settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2
                // }
            },
            {
                // breakpoint: 480,
                // settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                // }
            }
        ]
    });
});