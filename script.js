let btn = document.querySelector(".show-close-button");
let brands = document.querySelector(".brands");
let img = document.querySelector(".show-close-button__image");

btn.addEventListener('click', function () {
    if (brands.style.height === "auto") {
        brands.style.height = "175px";
        btn.textContent = "Показать всё";
        brands.style.overflow = "hidden";
        img.style.transform = "rotate(0deg)";
    } else {
        brands.style.overflow = "visible";
        brands.style.height = "auto";
        btn.textContent = "Скрыть";
        img.style.transform = "rotate(180deg)";
    }
});

new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },

    slidesPerView: 1.2,

    spaceBetween: 16,

    watchOverflow: true,

    breakpoints: {
        289: {
            slidesPerView: 1.14,
        },
        320: {
            slidesPerView: 1.25,
        },
        360: {
            slidesPerView: 1.41,
        },
        390: {
            slidesPerView: 1.53,
        }
    },
    
});