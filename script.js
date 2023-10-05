const testiomnialData = [
    "images/al05.png",
    "images/al01.jpg",
    "images/al04.jpg",
    ]
    const slideHolder = document.querySelector("#slideHolder")
    for (let i of testiomnialData) slideHolder.innerHTML += "<div class='swiper-slide'><img src="+i+"></div>"
    const swiper = new Swiper('.MainSlider', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: { delay: 5000 }
    });
    const Cateogryswiper = new Swiper(".categories", {
        slidesPerView:"auto",
        spaceBetween: 10,
        freeMode: true,
      });