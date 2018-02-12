import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import '../assets/css/base.css';
import filter from '../common/filter';
import store from '../vuex/store';
import routes from '../route/router.js';
//import routes from '../route/lazyRouter.js';
import Fastclick from 'fastclick'

Vue.use(VueRouter);
Vue.use(Vuex);

document.addEventListener('DOMContentLoaded', function() {
    Fastclick.attach(document.body);
}, false);
document.addEventListener("touchstart", function() {},false);

var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        var fontSize = 200 * (clientWidth / 750);
        //fontSize = (fontSize > 54) ? 54: fontSize;

        //如果是pc访问
        if(!/windows phone|iphone|android/ig.test(window.navigator.userAgent)) {
            fontSize = 100;
        }

        docEl.style.fontSize = fontSize + 'px';
    };
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

Object.keys(filter).forEach(function(k) {
    Vue.filter(k, filter[k]);
});

const router = new VueRouter({
    mode: 'history',
    routes : routes
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('app')