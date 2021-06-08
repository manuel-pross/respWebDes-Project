import "./styles/main.scss";

import $ from "jquery";
import "slick-carousel";

console.log("hi");
console.log("hello");

$(".header__carousel").slick({
    centerMode: true,
    arrows: true,
    prevArrow:
        "<div class='slick-arrow-prev'><span class='arrow-content-prev'></span></div>",
    nextArrow:
        "<div class='slick-arrow-next'><span class='arrow-content-next'></span></div>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            },
        },
    ],
});
