import { createApp } from "vue";
import App from "./App.vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.config({ nullTargetWarn: false });

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import "swiper/scss/effect-fade";

import store from "../store/store.js";
import LazyLoad from "vanilla-lazyload";

createApp(App)
  .use(store)
  .mixin({
    created: function () {
      this.gsap = gsap;
    },
    mounted: function () {
      setTimeout(() => {
        (function () {
          var lazyLoadInstance = new LazyLoad();
        })();
      }, 100);
    },
  })
  .mount("#app");
