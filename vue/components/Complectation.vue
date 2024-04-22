<template>
  <section id="complectation">
    <div class="container">
      <div class="complectation-container">
        <div class="complectation-title-container">
          <div class="complectation-title">
            <h2>
              Полная <br />
              комплектация
            </h2>
          </div>
        </div>
        <complectation-wrapper :break1280="break1280" :complect="complect" />
      </div>
      <complectation-presents />
    </div>
  </section>
</template>

<script>
import ComplectationPresents from "./ComplectationPresents.vue";
import MyImage from "../UI/MyImage.vue";
import ComplectationWrapper from "./ComplectationWrapper.vue";
export default {
  components: {
    MyImage,
    ComplectationPresents,
    ComplectationWrapper,
  },
  data() {
    return {
      break1280: window.innerWidth < 1281,

      complect: [
        {
          name: "Холодильник <br> с соединительной трубкой",
          nameModal: "",
          hover: false,
          img: "main",

          imgModal: "",
          text: "",
        },

        {
          name: "Кламп на 2 дюйма <br> с силиконовой прокладкой",
          nameModal: "",
          hover: false,

          imgModal: "",
          text: "",
        },

        {
          name: "Чешуйчатые тарелочки",
          nameModal: "",
          hover: false,

          imgModal: "",
          text: "",
        },

        {
          name: "Набор термометров (2&nbsp;шт.)",
          nameModal: "",
          hover: false,
          img: "term",

          imgModal: "",
          text: "",
        },

        {
          name: "Стеклянная царга",
          nameModal: "",
          hover: false,
          img: "",

          imgModal: "",
          text: "",
        },

        {
          name: "Стальной хомут",
          nameModal: "",
          hover: false,
          img: "",

          imgModal: "",
          text: "",
        },

        {
          name: "Купольная крышка <br> с силиконовой прокладкой",
          nameModal: "",
          hover: false,
          img: "",

          imgModal: "",
          text: "",
        },

        {
          name: "Перегонный куб",
          nameModal: "",
          hover: false,
          img: "",

          imgModal: "",
          text: "",
        },

        {
          name: "Инструкция и гарантия",
          nameModal: "",
          hover: false,
          img: "book",

          imgModal: "",
          text: "",
        },

        {
          name: "ПВХ шланг 4&nbsp;м",
          nameModal: "",
          hover: false,
          img: "shlang",

          imgModal: "",
          text: "",
        },
      ],
    };
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1280px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.break1280 = false;
      } else {
        this.break1280 = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#complectation {
  @extend %padd;
  overflow: hidden;
  .complectation-container {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    padding: 0 20px 30px;

    @media (max-width: 576px) {
      padding: 0 10px 20px;
    }

    img:not(.loaded) {
      opacity: 0;
    }

    .img-wrap.loaded {
      img:not(.loaded) {
        opacity: 1;
      }
    }
  }

  .complectation-title {
    &-container {
      flex-direction: column;
      gap: 20px;
      align-items: center;
      display: flex;
    }
    h2 {
      color: #fff;
      text-align: center;
      font-family: "Gilroy";
      font-size: 44px;
      font-style: normal;
      font-weight: 600;
      line-height: 113.462%;
      text-transform: uppercase;

      @include fluidFontSize(22, 44, 320, 992);
      @media (min-width: 769px) {
        br {
          display: none;
        }
      }
    }

    padding: 10px 20px;
    border-radius: 0px 0px 10px 10px;
    background: #c8ac6c;

    @media (max-width: 992px) {
      margin: 0 auto;
    }
  }
}
</style>