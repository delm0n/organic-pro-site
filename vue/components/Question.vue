<template>
  <section id="question">
    <div class="container">
      <div class="question__wrapper">
        <div class="question-title">
          <h2>У вас остались вопросы?</h2>
          <p class="subtitle">
            Мы с радостью поможем на&nbsp;них&nbsp;ответить
          </p>
        </div>
        <div class="question-call">
          <my-image
            :alt="''"
            :floder="'question'"
            :imgName="'helicon-logo'"
            :mobile="false"
          />
          <div>
            <p class="question-call__phone">{{ getPhone }}</p>
            <p class="question-call__button hyperlink" @click="openModalCall()">
              Заказать звонок
            </p>
          </div>
        </div>
        <div class="question-images">
          <div class="question-images__item">
            <my-image
              :alt="''"
              :floder="'question'"
              :imgName="'fire-line'"
              :media="577"
            />
            <div class="open-container">
              <p @click="openModalCall()">Да, хочу получить консультацию</p>
            </div>
          </div>

          <div class="question-images__item">
            <my-image
              :alt="''"
              :floder="'question'"
              :imgName="'construct'"
              :media="577"
            />
            <div class="open-container">
              <p @click="toOrder()">Все понятно, хочу сделать заказ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage },
  computed: mapGetters(["getPhone"]),
  methods: {
    toOrder() {
      this.gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: "#order" },
      });
    },

    openModalCall() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-call",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#question {
  @extend %padd;
  background: rgba(225, 225, 225, 0.15);

  .question-title {
    align-self: center;
    @media (max-width: 1024px) {
      margin-bottom: -20px;
      grid-column: 1/-1;
    }
    h2 {
      margin-bottom: 20px;

      color: #323232;
      font-family: "Gilroy";
      font-size: 52px;
      font-style: normal;
      font-weight: 600;
      line-height: 113.462%;
      text-transform: uppercase;

      @include fluidFontSize(40, 52, 992, 1920);

      @media (max-width: 1024px) {
        text-align: center;
      }

      @media (max-width: 768px) {
        font-size: 27px;
        line-height: 34px;
        margin-bottom: 10px;
      }

      @media (max-width: 576px) {
        font-size: 22px;
        line-height: 29px;
      }
    }

    .subtitle {
      color: #646464;
      font-family: "Gilroy";
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
      line-height: 125.926%;

      @include fluidFontSize(22, 27, 992, 1920);

      @media (max-width: 1024px) {
        text-align: center;
      }

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 29px;
      }

      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  .question__wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    width: 100%;
    gap: 50px 35px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .question-call {
    cursor: pointer;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
    gap: 40px;
    text-align: left;

    @media (min-width: 993px) {
      max-width: 560px;
      margin-left: auto;
    }

    @media (max-width: 1125px) {
      padding: 20px;
    }

    @media (max-width: 1024px) {
      padding: 15px 30px;
      grid-column: 1/-1;
      justify-content: center;

      padding: 30px;
      // margin-top: 20px;
      width: 100%;
      max-width: 824px;
    }

    @media (max-width: 576px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }

    &__phone {
      color: #646464;
      text-align: right;
      font-family: "Gilroy";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.32px;

      @include fluidFontSize(24, 32, 992, 1920);

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 29px;
      }
    }

    &__button {
      color: #292929;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.18px;
      text-decoration-line: underline;

      @include fluidFontSize(16, 18, 992, 1920);

      @media (max-width: 768px) {
        font-size: 15px;
        letter-spacing: 0.15px;
      }
    }
  }

  .question-images {
    display: flex;
    gap: 30px;
    grid-column: 1/-1;
    justify-content: center;
    width: 100%;
    align-items: stretch;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    &__item {
      align-items: stretch;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @media (min-width: 1025px) {
        width: calc(50% - 15px);
      }

      img {
        max-width: 100%;
      }

      .open-container {
        background: #c8ac6c;
        padding: 30px;
        flex-grow: 1;

        @media (max-width: 1280px) {
          padding: 20px 15px;
        }

        @media (max-width: 576px) {
          padding: 10px;
        }

        p {
          cursor: pointer;

          color: #fff;
          text-align: center;
          font-family: "Inter";
          font-size: 27px;
          font-style: normal;
          font-weight: 700;
          line-height: 130%;
          text-decoration-line: underline;

          @include fluidFontSize(20, 27, 992, 1920);

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px;
          }

          br {
            display: none;
            @media (max-width: 1280px) {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>