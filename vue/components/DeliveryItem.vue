<template>
  <div class="delivery-item">
    <div class="delivery-item__img">
      <my-image
        :alt="''"
        :floder="'regim'"
        :imgName="item.img"
        :mobile="false"
      />
    </div>
    <div class="delivery-item__content">
      <div>
        <h3 v-html="item.title"></h3>
        <p class="delivery-item__decr" v-html="item.decr"></p>
        <div class="delivery-item__char">
          <p><b>Срок:</b> <span v-html="item.time"></span></p>
          <p><b>Стоимость:</b> <span v-html="item.price"></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.delivery-item {
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
    height: auto;
    max-width: 340px;
    margin: 0 auto;
  }

  &__img {
    @media (min-width: 769px) and (max-width: 1136px) {
      width: 52%;
    }

    .img-wrap {
      width: 100%;

      @include aspect() {
        aspect-ratio: 1/1;
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
      justify-content: center;
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
        font-size: 18px;
        font-weight: 600;
        line-height: 25px; /* 138.889% */
        margin-bottom: 10px;
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
      @include fluidFontSize(15, 18, 768, 1024);
    }

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }

    span {
      text-decoration: underline;
    }
  }

  &__char {
    margin-top: 20px;
    p {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      line-height: 131.818%;
      @include fluidFontSize(18, 22, 1024, 1920);

      &:not(:last-child) {
        margin-bottom: 10px;

        @media (max-width: 768px) {
          margin-bottom: 5px;
        }
      }

      b {
        font-weight: 500;
      }

      span {
        font-weight: 300;
        white-space: nowrap;
      }
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
}
</style>