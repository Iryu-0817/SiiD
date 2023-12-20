import '../style/main.scss'
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import '@splidejs/splide/css/skyblue';
import Splide from '@pslidejs/splide';
import ActiveNav from './modules/activeNav';
import ForebaseTable from './modules/FirebaseTable';

if(document.getElementById('js-nav')!== null) {
    new ActiveNav ({
        navElement: 'js-nav'
    })
}


if(document.getElementsByTagName('splide')[0]) {
    new Splide('.splide').mount();
}