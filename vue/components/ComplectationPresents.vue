<template>
  <div class="complectation-presents">
    <div class="presents-title">
      <p>
        <span> + {{ presents.length }} </span>
      </p>

      <my-image
        :alt="'#'"
        :floder="'src'"
        :mobile="false"
        :imgName="'present-icon-red'"
      />

      <p>
        <span>при заказе</span>
      </p>

      <p class="last-row">
        с {{ getToday }} по {{ tomorrowWithoutZeroPlus3 }}&nbsp;{{ getMonth }}
      </p>
    </div>

    <div class="complectation-presents__container">
      <div class="complectation-presents__slider">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in presents"
            :key="index"
            class="swiper-slide present-item"
          >
            <my-image
              :alt="'#'"
              :floder="'presents'"
              :mobile="false"
              :imgName="item.img"
            />
            <p v-html="item.name"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper } from "swiper";
import { mapGetters } from "vuex";

export default {
  components: {
    MyImage,
  },

  computed: mapGetters(["getToday", "tomorrowWithoutZeroPlus3", "getMonth"]),

  data() {
    return {
      presents: [
        {
          img: "present-1",
          name: "Медная <br> РПН",
        },

        {
          img: "present-2",
          name: "Книга <br> рецептов",
        },

        {
          img: "present-3",
          name: "Гидрозатвор",
        },

        {
          img: "present-4",
          name: "Переходник <br> на кран",
        },

        {
          img: "present-5",
          name: "Спиртометр",
        },

        {
          img: "present-6",
          name: "Купон<br>на 1000 руб.",
        },

        {
          img: "present-7",
          name: "Набор трав <br> и специй",
        },

        // {
        //   img: "present-7",
        //   name: "Чешуйчатые <br> тарелочки",
        // },
      ],
    };
  },

  mounted() {
    let myCompSwiper;
    const CompSwiper = () => {
      myCompSwiper = new Swiper(".complectation-presents__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        if (myCompSwiper) {
          return myCompSwiper.destroy(true, true);
        }
      } else {
        return CompSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.complectation-presents {
  border-radius: 0px 0px 10px 10px;
  background: #f9f9f9;
  padding: 30px 26px;
  max-width: 1220px;
  width: 95%;
  margin: 0 auto;
  @media (max-width: 1136px) {
    max-width: 740px;
  }

  .complectation-presents__container {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  .presents-title {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 7px;
    justify-content: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(3, auto);

      .last-row {
        grid-column: 1/4;
        text-align: center;
        align-self: center;
      }
    }

    p {
      color: #323232;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 29px;

      @media (max-width: 576px) {
        font-size: 18px;

        span {
          font-weight: 700;

          &:first-child {
            font-size: 22px;
          }
        }
      }

      span {
        color: #ff5655;
      }
    }
  }
  @media (min-width: 769px) {
    .swiper-wrapper {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      // @media (max-width: 993px) {
      //   gap: 10px;
      // }
    }
  }

  .present-item {
    border-radius: 10px;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;

    @media (min-width: 769px) {
      min-width: 125px;
      width: calc((100% - 10px * 6) / 7);
      @media (max-width: 1440px) {
        width: calc((100% - 10px * 3) / 4);
      }

      @media (max-width: 1136px) {
        width: calc((100% - 30px * 2) / 3);
      }
      // @media (max-width: 1136px) {
      //   width: calc((100% - 30px * 3) / 4);
      // }
      // @media (max-width: 993px) {
      //   width: calc((100% - 20px * 3) / 4);
      // }
    }
    @media (max-width: 768px) {
      width: 135px;
    }

    @include aspect() {
      max-width: 94px;
      aspect-ratio: 1/1;
    }

    p {
      color: #323232;
      text-align: center;
      font-family: "Roboto";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 138.889% */
    }
  }
}
</style>