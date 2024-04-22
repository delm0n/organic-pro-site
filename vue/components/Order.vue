<template>
  <section id="order">
    <div class="container">
      <div class="order-container">
        <div class="title">
          <h2>Оформление заказа</h2>
        </div>
        <div class="order-wrapper">
          <order-kit @open-modal="openModal" />

          <div class="order-wraper__features">
            <div
              v-for="(item, index) in features"
              :key="index"
              class="feature-item"
            >
              <my-image
                :alt="'#'"
                :floder="'order'"
                :imgName="item.img"
                :mobile="false"
              />
              <h3 v-html="item.title"></h3>
              <p v-html="item.decr"></p>
            </div>
          </div>
        </div>
      </div>

      <order-decision />
    </div>
  </section>
</template>

<script>
import OrderKit from "./OrderKit.vue";
import OrderDecision from "./OrderDecision.vue";

import MyImage from "../UI/MyImage.vue";
import { mapGetters, mapMutations } from "vuex";
import DopModal from "../UI/ModalForDop.vue";

export default {
  components: { MyImage, OrderKit, DopModal, OrderDecision },
  data() {
    return {
      features: [
        {
          img: "order-1",
          title: "3 этапа контроля качества ",
          decr: "Брак исключён",
        },

        {
          img: "order-2",
          title: "Отгрузка в день заказа",
          decr: "Быстрая доставка в любой регион&nbsp;РФ",
        },

        {
          img: "order-3",
          title: "Гарантия 3 года",
          decr: "Мы уверены в качестве нашего товара",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setDopModal"]),

    openModal(item) {
      this.setDopModal({
        floder: "order",
        img: item.img,
        id: item.id,
        name: item.name,
        text: item.modalText,
        price: item.price,
        oldPrice: item.oldPrice,
      });

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#dop-modal",
          },
        ]);
      }, 500);
    },
  },
  computed: mapGetters(["getModules"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#order {
  @extend %padd;
  overflow: hidden;

  .order-container {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  }

  .order-container {
    padding: 50px 20px 20px;
    margin-bottom: 50px;

    .order-wrapper {
      max-width: 1320px;
      margin: 0 auto;

      .order-wraper__features {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;

        @media (max-width: 992px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }

      .feature-item {
        display: flex;
        padding: 20px;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        border: 2px solid #c8ac6c;

        @media (max-width: 1280px) {
          justify-content: center;
        }

        @media (max-width: 992px) {
          max-width: calc(50% - 15px);
          width: 100%;
        }

        @media (max-width: 768px) {
          max-width: 340px;
          width: 100%;
          margin: 0 auto;
        }

        @include aspect() {
          aspect-ratio: 84/84;
          max-width: 84px;

          picture {
            justify-content: center;
          }
        }

        h3,
        p {
          color: #323232;
          text-align: center;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 768, 1024);
        }

        h3 {
          margin: 15px auto 5px;
          font-weight: 500;
        }

        p {
          font-weight: 300;
        }
      }
    }
  }
}
</style>