// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

//Init Swiper
const swiper = new Swiper('[data-swiper]', {
    //Optional parameters
    loop: true,

    // Pagination dots
    pagination: {
        el: '.swiper-pagination',
        //clickable: true,
    },

    //Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});