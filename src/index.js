import "./styles/main.scss";

import $ from "jquery";
import "slick-carousel";

console.log("hi");
console.log("hello");

$('.header__carousel').slick({
    centerMode: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
              arrows: false,
          }
        }
      ]
});
