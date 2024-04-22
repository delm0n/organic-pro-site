<template>
  <div class="set-item">
    <div class="set-item-wrapper">
      <div class="set-item__title">
        <slot name="title"></slot>
      </div>

      <div class="set-item__img">
        <my-image :alt="'#'" :floder="'set'" :imgName="img" :media="1199" />
      </div>

      <div class="set-item__text">
        <slot name="text"></slot>
      </div>

      <div class="set-item__offer">
        <slot name="offer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },

  props: {
    img: {
      type: String,
      default: "aroma",
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.set-item {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  padding: 50px;

  @media (max-width: 1366px) {
    padding: 30px;
  }

  @media (max-width: 1199px) {
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    padding: 20px 10px;
  }

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  &-wrapper {
    display: grid;
    grid-template-columns: auto 38%;
    gap: 50px 30px;

    @media (max-width: 1440px) {
      gap: 30px;
    }

    @media (max-width: 1199px) {
      grid-template-columns: auto 290px;
      gap: 20px;
    }

    @media (max-width: 992px) {
      grid-template-columns: auto 44%;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;

    grid-column: 1/2;
    grid-row: 1/2;

    @media (max-width: 1199px) {
      grid-column: 1/3;
      text-align: center;
    }

    .title-before {
      border-radius: 30px;
      border: 2px solid #ff5655;
      padding: 5px 20px;
      max-width: max-content;
      margin-bottom: 20px;

      @media (max-width: 1199px) {
        margin: 0 auto 20px;
      }

      @media (max-width: 768px) {
        margin-bottom: 10px;
      }

      p {
        color: #ff5655;
        text-align: center;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    h2 {
      color: #323232;
      font-family: "Gilroy";
      font-size: 52px;
      font-style: normal;
      font-weight: 600;
      line-height: 59px; /* 113.462% */
      text-transform: uppercase;
      margin-bottom: 20px;

      @media (max-width: 992px) {
        font-size: 38px;
        line-height: normal;
      }

      @media (max-width: 768px) {
        font-size: 26px;
        line-height: 33px;
        margin-bottom: 5px;
      }

      @media (max-width: 576px) {
        font-size: 22px;
        line-height: 29px;
      }
    }

    .title-subtitle {
      color: #646464;
      font-family: "Gilroy";
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
      line-height: 125.926%;

      @include fluidFontSize(24, 27, 993, 1920);

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 27px;
      }

      @media (max-width: 576px) {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  &__text {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: center;

    @media (max-width: 1199px) {
      grid-column: 2/3;
    }

    @media (max-width: 768px) {
      grid-column: 1/3;
      grid-row: 3/4;
    }

    .decr {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 131.818%;

      @include fluidFontSize(20, 22, 993, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }

    .check-list {
      margin-top: 30px;
      @media (max-width: 768px) {
        padding-bottom: 20px;
      }
      li {
        position: relative;
        padding-left: 40px;

        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 131.818%;
        @include fluidFontSize(18, 22, 993, 1920);

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        &::before {
          content: "";
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iMTUiIGZpbGw9IiMyQUEwMDAiLz4KPHBhdGggZD0iTTYuODc1IDE0LjM3NUwxMi41IDIwTDIxLjg3NSAxMC42MjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          width: 30px;
          height: 30px;
          position: absolute;
          left: 0;
          top: 0px;
        }
      }
    }

    .num-list {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(4, auto);
      grid-auto-flow: column;

      @media (max-width: 1199px) {
        grid-template-columns: 1fr;
        grid-auto-flow: row;
      }

      @media (max-width: 768px) {
        padding-bottom: 20px;
      }

      &__item {
        display: flex;
        gap: 10px;
        align-items: center;

        b {
          border-radius: 30px;
          background: #2aa000;

          display: flex;
          width: 30px;
          height: 30px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          text-align: center;

          color: #fff;
          font-family: "Roboto";
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          //   line-height: 25px; /* 138.889% */
        }

        p {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 993, 1920);
        }
      }
    }

    .show-more__button {
      color: rgba(50, 50, 50, 0.8);
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      text-align: center;
      transition: all 0.3s;
    }
  }

  &__img {
    grid-column: 2/3;
    grid-row: 1/4;
    align-self: center;

    @include aspect() {
      aspect-ratio: 1/1;
      max-width: 530px;
    }

    picture {
      justify-content: center;
    }

    @media (min-width: 769px) {
      padding: 30px 0;
    }

    @media (max-width: 1199px) {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }

  &__offer {
    grid-column: 1/3;
    grid-row: 3/4;
    align-self: end;
    flex-wrap: wrap;
    display: flex;
    gap: 20px 30px;
    align-items: center;

    @media (max-width: 1400px) and (min-width: 1200px) {
      gap: 20px;
    }

    @media (max-width: 1199px) {
      grid-row: 3/4;
      justify-content: center;
    }

    @media (max-width: 992px) {
      flex-direction: column;
    }

    @media (max-width: 768px) {
      grid-row: 4/5;
      gap: 20px;
    }

    .price {
      font-family: "Gilroy";
      font-style: normal;
      line-height: normal;
      white-space: nowrap;

      @media (max-width: 992px) {
        gap: 5px;
        display: flex;
        align-items: center;
      }

      .new {
        color: #323232;
        font-size: 27px;
        font-weight: 600;

        @media (max-width: 768px) {
          font-size: 18px;
          letter-spacing: 0.36px;
        }
      }

      .old {
        color: #c8c8c8;
        font-size: 18px;
        font-weight: 900;
        text-decoration-line: line-through;

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 20px; /* 133.333% */
        }
      }
    }

    .button-container {
      display: flex;
      align-items: center;
      gap: 10px;

      @media (min-width: 577px) {
        button {
          min-width: 285px;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
}
</style>

