<template>
  <div>
    <header>
      <header-top :navigations="nav" :refHeader="refHeader" />
      <header-main />
    </header>

    <my-set />
    <regim />
    <structure />
    <made />
    <complectation />

    <order />
    <dops />
    <benefit />
    <div id="tinkoff-delivery-group">
      <tinkoff />
      <delivery />
    </div>
    <description />
    <faq />
    <gallery />
    <question />
    <my-footer />
    <cart />

    <modal-call />
    <modal-success />
    <modal-kurs />
    <dop-modal />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineAsyncComponent } from "vue";
import HeaderTop from "../components/HeaderTopV2.vue";
import Regim from "../components/Regim.vue";
import Structure from "../components/Structure.vue";
import MySet from "../components/Set.vue";
import ModalKurs from "../components/ModalKurs.vue";
import HeaderMain from "../components/HeaderMain.vue";
import ModalCall from "../components/ModalCall.vue";
import ModalSuccess from "../components/ModalSuccess.vue";
import Dops from "../components/Dops.vue";
import Cart from "../components/Cart.vue";
import Order from "../components/Order.vue";
import DopModal from "../UI/ModalForDop.vue";

export default {
  data() {
    return {
      nav: [
        {
          name: "Режимы работы",
          selector: "#regim",
        },

        {
          name: "Колонна",
          selector: "#tank",
        },

        {
          name: "Модульный бак",
          selector: "#order",
        },

        {
          name: "О производителе",
          selector: "#made",
          hidden: true,
        },

        {
          name: "Доставка и оплата",
          selector: "#tinkoff-delivery-group",
        },
      ],

      refHeader: "#modal-call",
    };
  },
  methods: mapMutations(["setMobile"]),

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.setMobile(false);
      } else {
        this.setMobile(true);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  components: {
    HeaderTop,
    HeaderMain,
    Regim,
    MySet,
    Structure,
    Cart,
    Gallery: defineAsyncComponent(() => import("../components/Gallery.vue")),
    Question: defineAsyncComponent(() => import("../components/Question.vue")),
    Faq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    // Ten: defineAsyncComponent(() => import("../components/Ten.vue")),
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    Delivery: defineAsyncComponent(() => import("../components/Delivery.vue")),
    Complectation: defineAsyncComponent(() =>
      import("../components/Complectation.vue")
    ),
    Description: defineAsyncComponent(() =>
      import("../components/Description.vue")
    ),
    Tinkoff: defineAsyncComponent(() =>
      import("../components/TinkoffBlock.vue")
    ),
    MyFooter: defineAsyncComponent(() => import("../components/Footer.vue")),
    Benefit: defineAsyncComponent(() => import("../components/Benefit.vue")),
    ModalKurs,
    ModalCall,
    ModalSuccess,
    Dops,
    Order,
    DopModal,
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
@import "../../scss/_global.scss";

.tinkoff-delivery-group {
  @extend %padd;
  background: #f5f5f5;
}
</style>
