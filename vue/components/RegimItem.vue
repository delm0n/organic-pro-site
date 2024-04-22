<template>
  <div class="regim-item">
    <div class="regim-item__img">
      <div class="label-container">
        <div class="label label-g" v-html="item.gradus"></div>
        <div class="label label-l" v-html="item.litr"></div>
      </div>

      <my-image
        :alt="item.title"
        :floder="'regim'"
        :imgName="item.img"
        :media="1137"
      />
    </div>

    <div class="regim-item__content">
      <div>
        <h3 v-html="item.title"></h3>

        <p class="regim-item__decr" v-html="item.decr"></p>

        <collapse :when="getMobile ? item.mobileShow : true">
          <div class="regim-item__char">
            <p>Скорость перегонки:&nbsp;<span v-html="item.speed"></span></p>
            <p>
              Объем спирта-сырца на выходе:&nbsp;<span
                v-html="item.volume"
              ></span>
            </p>
            <p>Расход воды:&nbsp;<span v-html="item.expens_water"></span></p>
            <p>
              Расход электричества:&nbsp;<span v-html="item.expens_el"></span>
            </p>
          </div>
        </collapse>
      </div>

      <p
        @click="$emit('regim-click', index)"
        class="regim-item__button hyperlink"
      >
        {{
          getMobile
            ? !item.mobileShow
              ? "Узнать больше"
              : "Скрыть"
            : "Узнать больше"
        }}
      </p>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";
import { Collapse } from "vue-collapsed";

export default {
  components: { MyImage, Collapse },
  computed: mapGetters(["getMobile"]),
  props: {
    item: Object,
    index: Number,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.regim-item {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;

  @media (max-width: 1136px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    max-width: 340px;
    margin: 0 auto;
  }

  &__img {
    background: #f7f7f7;
    @media (min-width: 769px) and (max-width: 1136px) {
      width: 52%;

      // img {
      //   max-height: 80%;
      // }
    }

    .label {
      &-container {
        display: flex;
        gap: 10px;
        align-items: center;

        position: absolute;
        top: 30px;
        left: 30px;

        @media (max-width: 1440px) {
          top: 20px;
          left: 20px;
        }

        @media (max-width: 1280px) {
          gap: 8px;
        }

        @media (max-width: 576px) {
          gap: 6px;
          top: 14px;
          left: 14px;
        }
      }

      width: 58px;
      height: 58px;
      border-radius: 100%;
      background: #c8ac6c;

      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;

      color: #fff;
      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 138.889% */

      @media (max-width: 1280px) {
        width: 50.83px;
        height: 50.83px;

        font-size: 15.775px;
        line-height: 21.909px;
      }

      @media (max-width: 576px) {
        width: 35.85px;
        height: 35.85px;

        font-size: 11.126px;
        line-height: 15.453px;
      }
    }

    .img-wrap {
      width: 100%;

      @include aspect() {
        aspect-ratio: 440/598;
      }
    }
  }
  &__content {
    padding: 30px;
    font-style: normal;
    font-family: "Gilroy";
    color: #323232;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1280px) {
      padding: 20px;
    }

    @media (min-width: 769px) and (max-width: 1136px) {
      padding: 30px;
      width: 48%;
    }

    @media (max-width: 992px) {
      padding: 30px 20px;
    }
    @media (max-width: 576px) {
      padding: 20px 10px;
    }
    h3 {
      font-size: 27px;
      font-weight: 700;
      line-height: 125.926%;

      @include fluidFontSize(22, 27, 1024, 1920);

      margin-bottom: 20px;
      @media (max-width: 992px) {
        margin-bottom: 15px;
      }

      @media (max-width: 768px) {
        margin-bottom: 10px;
        font-size: 18px;
      }
    }
  }

  &__decr {
    font-size: 22px;
    font-weight: 300;
    line-height: 131.818%;

    margin-bottom: 20px;

    @include fluidFontSize(18, 22, 1024, 1920);

    @media (max-width: 992px) {
      margin-bottom: 15px;
      @include fluidFontSize(16, 18, 768, 1024);
    }
  }

  &__char {
    p {
      font-size: 22px;
      font-weight: 500;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 1024, 1920);

      @media (max-width: 992px) {
        @include fluidFontSize(15, 18, 768, 1024);
      }

      span {
        font-weight: 300;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  &__button {
    color: #323232;
    font-family: "Inter";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.18px;
    text-decoration-line: underline;
    cursor: pointer;

    @media (max-width: 992px) {
      font-size: 16px;
    }
  }
}
</style>