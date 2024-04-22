<template>
  <div class="benefit-box">
    <h3 v-html="drink.title"></h3>

    <collapse class="collapse-box" :when="getMobile ? drink.mobileShow : true">
      <div class="benefit-box__dops">
        <div v-for="(item, index) in drink.dops" :key="index" class="dops-item">
          <my-image
            :alt="item.title"
            :floder="'benefit'"
            :imgName="item.img"
            :mobile="false"
          />
          <p class="dops-item__title" v-html="item.title"></p>
          <p class="dops-item__decr" v-html="item.decr"></p>
        </div>
      </div>
    </collapse>

    <p
      v-if="getMobile"
      @click="drink.mobileShow = !drink.mobileShow"
      class="benefit-box__button"
    >
      {{ !drink.mobileShow ? "Ингридиенты" : "Скрыть" }}
    </p>

    <div
      :class="'benefit-box__img ' + (getWebp == 'webp' ? 'webp-bg' : 'png-bg')"
    >
      <div class="text-box">
        <div class="text-box__container">
          <p v-html="drink.imgTextTitle"></p>
          <p v-html="drink.imgTextDecr"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from "vue-collapsed";
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage, Collapse },
  computed: mapGetters(["getWebp", "getMobile"]),
  props: {
    idx: Number,
    drink: Object,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.benefit-box {
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  padding-left: 30px;
  display: grid;
  grid-template-columns: 18% auto minmax(200px, 282px);
  gap: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: auto minmax(calc(282px - 36px * 2), 282px);
    gap: 0 30px;
  }

  @media (max-width: 992px) {
    gap: 0 20px;
    grid-template-columns: 1fr minmax(47%, 282px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 0;
    max-width: 340px;
    margin: 0 auto;
  }

  h3 {
    color: #323232;
    font-family: "Gilroy";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 131.818%;
    display: flex;
    align-items: center;
    height: 100%;

    @include fluidFontSize(20, 22, 1300, 1920);

    @media (max-width: 1300px) {
      padding-top: 30px;
    }

    @media (max-width: 768px) {
      justify-content: center;
      text-align: center;
      padding-top: 20px;
    }

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }

  &__img {
    grid-column: 3/4;

    @media (max-width: 1300px) {
      grid-column: 2/3;
      grid-row: 1/3;
    }

    @media (max-width: 768px) {
      grid-row: auto;
      grid-column: 1/2;
    }

    @mixin benefit-bg($type) {
      background: url("/build/images/benefit/benefit-bg." + $type) no-repeat;
      background-size: cover;
      background-position: center;
    }

    &.webp-bg {
      @include benefit-bg("webp");
    }

    &.png-bg {
      @include benefit-bg("png");
    }

    .text-box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      @media (max-width: 768px) {
        padding: 75px 0;
      }

      &__container {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      p {
        color: #fff;
        font-family: "Gilroy";
        font-style: normal;

        &:first-child {
          font-size: 22px;
          font-weight: 500;
          line-height: 131.818%;
          margin-bottom: 5px;

          @media (max-width: 576px) {
            font-size: 20px;
          }
        }

        &:last-child {
          font-size: 18px;
          font-weight: 300;
          line-height: 138.889%;
          max-width: 210px;

          @media (max-width: 576px) {
            font-size: 16px;
          }
        }
      }
    }
  }

  &__dops {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 30px 0;
    min-width: 435px;

    @media (max-width: 1136px) {
      display: flex;
      flex-direction: column;
      min-width: 260px;
    }

    @media (max-width: 768px) {
      grid-row: 2/3;
      padding: 10px;
      gap: 15px;
    }

    .dops-item {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5px;

      @media (max-width: 1136px) {
        grid-template-columns: 55px 1fr;
        gap: 5px 10px;
      }

      .img-wrap {
        @media (max-width: 1136px) {
          grid-column: 1/2;
          grid-row: 1/3;
        }

        @include aspect() {
          aspect-ratio: 112/111;
        }
        picture {
          justify-content: center;
        }
      }

      p {
        color: #323232;
        text-align: center;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        line-height: 138.889%;

        @media (max-width: 1136px) {
          text-align: left;
          margin-top: 0;
        }
      }

      &__title {
        font-weight: 500;
        margin-top: 15px;
      }

      &__decr {
        font-weight: 300;

        @media (max-width: 576px) {
          font-size: 14px;
        }
      }
    }
  }

  &__button {
    margin: 10px 0 20px;
    color: #323232;
    text-align: center;
    font-family: "Inter";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.18px;
    text-decoration-line: underline;
  }

  //   .collapse-box {
  //     height: auto !important;
  //   }
}
</style>