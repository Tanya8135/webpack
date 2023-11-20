import Swiper from "swiper/bundle";
import 'swiper/css/bundle';
import './styles.css';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
                swiper.changeDirection(getDirection());
            },
        },
    });

    function getDirection() {
        const windowWidth = window.innerWidth;
        const direction = window.innerWidth <= 320 ? 'vertical' : 'horizontal';

        return direction;
    }
})