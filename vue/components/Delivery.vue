<template>
  <section id="delivery">
    <div class="container">
      <div class="delivery-wrapper">
        <div class="swiper-wrapper">
          <delivery-item
            v-for="(item, index) in list"
            :key="index"
            :item="item"
            :class="getMobile ? 'swiper-slide' : ''"
          />
        </div>
      </div>

      <div class="delivery-label">
        <my-image
          class="delivery-label__icon"
          :alt="'#'"
          :floder="'delivery'"
          :imgName="'label'"
          :mobile="false"
        />
        <p>
          Вы имеете право вскрыть посылку и проверить ее содержимое перед
          оплатой. Кроме того, вернуть товар можно в течение 14 дней с момента
          совершения покупки.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import DeliveryItem from "./DeliveryItem.vue";
import { Swiper } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { DeliveryItem, MyImage },
  data() {
    return {
      list: [
        {
          title: "Доставка по всей России",
          decr: "В ближайший пункт выдачи ТК, отделение Почты России или курьером до двери <span>без предоплаты</span>",
          time: "1-7 дней",
          price: "≈ 400 РУБ.",
          img: "regim",
        },

        {
          title: "Доставка в удаленные регионы, ПГТ, сёла",
          decr: "В ближайший пункт выдачи ТК или отделение Почты России <span>без предоплаты</span>",
          time: "3-9 дней",
          price: " ≈ 700 РУБ.",
          img: "regim",
        },

        {
          title: "Не хотите ждать? Получите аппарат сегодня!",
          decr: "По Москве, СПБ и близлежащим городам доступен самовывоз из наших официальных магазинов",
          time: "до 1 дня",
          price: "0 РУБ.",
          img: "regim",
        },
      ],
    };
  },
  computed: mapGetters(["getMobile"]),
  mounted() {
    let myDeliverySwiper;
    const DeliverySwiper = () => {
      myDeliverySwiper = new Swiper(".delivery-wrapper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,

        loop: false,

        breakpoints: {
          0: {
            slidesPerView: 1.05,
            spaceBetween: 20,
            loop: false,
          },
          421: {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: false,
          },
        },
      });
    };

    const windowbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (windowbreakpoint.matches) {
        if (myDeliverySwiper) {
          return myDeliverySwiper.destroy(true, true);
        }
      } else {
        return DeliverySwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#delivery {
  overflow: hidden;
  padding: 30px 0 0;

  .delivery-wrapper {
    @media (min-width: 769px) {
      .swiper-wrapper {
        display: flex;
        gap: 30px;
        align-items: stretch;

        @media (max-width: 1145px) {
          gap: 20px;
        }

        @media (max-width: 1136px) {
          flex-direction: column;
          gap: 50px;
        }
      }
    }
  }

  .delivery-label {
    margin-top: 30px;
    padding: 30px;
    padding-left: 40px;
    position: relative;
    border-radius: 10px;
    border: 3px solid #c8ac6c;

    @media (max-width: 768px) {
      padding: 20px;
      padding-left: 25px;

      &__icon {
        width: 20px;
      }
    }

    &__icon {
      position: absolute;
      left: 0;
      top: 30px;
    }

    p {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>