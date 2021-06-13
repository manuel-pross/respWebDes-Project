import "./styles/main.scss";

import $ from "jquery";
import "slick-carousel";
import AOS from "aos";
import lazylad from "lazyload";

const btnBackToTop = document.querySelector("#btnBackToTop");

AOS.init({
    disable: "mobile",
});

lazyload();

$(".header__carousel").slick({
    centerMode: true,
    arrows: true,
    prevArrow:
        "<div class='slick-arrow-prev'><span class='arrow-content-prev'></span></div>",
    nextArrow:
        "<div class='slick-arrow-next'><span class='arrow-content-next'></span></div>",
});

$(".photo-wall__carousel").slick({
    slidesToShow: 1,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
        "<div class='slick-arrow-prev'><span class='arrow-content-prev'></span></div>",
    nextArrow:
        "<div class='slick-arrow-next'><span class='arrow-content-next'></span></div>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

window.onscroll = () => {
    if(window.scrollY > 500) {
        btnBackToTop.classList.add("display-block");
    } else {
        btnBackToTop.classList.remove("display-block");
    }
};
