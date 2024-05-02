<template>
  <div class="structure-item">
    <div class="structure-item__content">
      <h3 v-html="item.title"></h3>
      <p class="decr" v-html="item.decr"></p>
      <ul>
        <li v-for="(li, i) in item.list" :key="i">
          <b v-html="li.title"></b>
          <span v-html="li.text"></span>
        </li>
      </ul>

      <p @click="$emit('show-modal', item)" class="modal-button">Подробнее</p>
    </div>
    <div class="structure-item__slider-container">
      <div :class="'structure-item__slider structure-item__slider-' + index">
        <div class="swiper-wrapper">
          <div v-for="(img, i) in item.imgList" :key="i" class="swiper-slide">
            <my-image
              :alt="'#'"
              :floder="'structure'"
              :imgName="img"
              :mobile="577"
            />
          </div>
        </div>

        <div class="sldr-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="30"
            viewBox="0 0 23 30"
            fill="none"
          >
            <path d="M23 0H14L0 15L14 30H23L9 15L23 0Z" fill="#646464" />
          </svg>
        </div>

        <div class="sldr-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="30"
            viewBox="0 0 23 30"
            fill="none"
          >
            <path d="M0 0H9L23 15L9 30H0L14 15L0 0Z" fill="#646464" />
          </svg>
        </div>

        <div class="sldr-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  components: {
    MyImage,
  },
  props: {
    item: Object,
    index: Number,
  },

  mounted() {
    let mySwiper;

    const SwiperLoad = () => {
      mySwiper = new Swiper(".structure-item__slider-" + this.index, {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,

        navigation: {
          nextEl: ".sldr-next",
          prevEl: ".sldr-prev",
        },
        pagination: {
          el: ".sldr-pagination",
          type: "progressbar",
        },
        loop: true,
        modules: [Navigation, Pagination],

        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: false,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },

          577: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
        },
      });
    };

    SwiperLoad();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.structure-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    max-width: 665px;
    margin: 0 auto;
  }

  &:nth-child(2n + 1) {
    @media (min-width: 769px) {
      flex-direction: row-reverse;
    }
  }

  &__content {
    max-width: 50%;
    width: 100%;

    @media (max-width: 991px) {
      max-width: 100%;
    }
    color: #323232;
    font-family: "Gilroy";
    font-style: normal;

    h3 {
      font-size: 27px;
      font-weight: 600;
      line-height: 125.926%;
      margin-bottom: 20px;

      @media (max-width: 1199px) {
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
        margin-bottom: 0;
      }

      @include fluidFontSize(22, 27, 992, 1920);
    }

    .decr {
      font-size: 22px;
      font-weight: 400;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      padding-bottom: 15px;
      border-bottom: 2px solid #e8e8e8;

      @media (max-width: 1199px) {
        display: none;
      }

      span {
        color: #c8ac6c;
        font-family: "Gilroy";
        font-size: 22px;
        font-weight: 600;
        line-height: 29px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 30px;
      padding-top: 28px;

      @media (max-width: 1199px) {
        gap: 20px;
      }

      @media (max-width: 576px) {
        display: none;
      }

      li {
        font-size: 18px;
        line-height: 138.889%;
        position: relative;
        padding-left: 40px;

        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 576px) {
          padding-left: 27px;
        }

        &::before {
          content: "";
          position: absolute;
          top: -4px;
          left: 0;
          width: 30px;
          height: 30px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkVsbGlwc2UgMjQ2Ij4KPHBhdGggaWQ9IlZlY3RvciA3MSIgZD0iTTYuODc1IDE0LjM3NUwxMi41IDIwTDIxLjg3NSAxMC42MjUiIHN0cm9rZT0iI0M4QUM2QyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9nPgo8L3N2Zz4K);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: center;

          @media (max-width: 576px) {
            width: 22px;
            height: 22px;
            top: 0;
          }
        }

        b {
          font-weight: 500;
        }

        span {
          display: block;
          margin-top: 7.5px;
          font-weight: 300;

          @media (max-width: 1199px) {
            display: none;
          }
        }
      }
    }
  }

  &__slider {
    &-container {
      max-width: 665px;
      position: relative;
      width: 48.86%;
      overflow: hidden;

      @media (max-width: 991px) {
        width: 100%;
      }

      @media (max-width: 576px) {
        width: calc(100% + 40px);
        // margin: 0 -20px;
      }
    }

    .sldr-prev,
    .sldr-next {
      position: absolute;
      top: 50%;
      cursor: pointer;
      user-select: none;
      transform: translateY(-50%);
      z-index: 6;

      @media (max-width: 576px) {
        display: none;
      }

      transition: opacity 0.2s;
      &:hover {
        opacity: 0.5;
      }
    }

    .sldr-next {
      right: 30px;
      @media (max-width: 1366px) {
        right: 20px;
      }
    }
    .sldr-prev {
      left: 30px;
      @media (max-width: 1366px) {
        left: 20px;
      }
    }

    .sldr-pagination {
      @media (min-width: 577px) {
        display: none;
      }

      margin-top: 10px;
      height: 2px;
      position: relative;
      background: #cecece;
      width: calc(100% - 40px) !important;
      transform: translateX(20px);

      .swiper-pagination-progressbar-fill {
        background: #c8ac6c;
      }
    }

    .swiper-slide {
      video,
      img {
        width: 100%;
        aspect-ratio: 1/1;
      }

      img {
        &:not(.loaded) {
          opacity: 0;
        }
      }
    }
  }

  .modal-button {
    @media (min-width: 1199px) {
      display: none;
    }

    cursor: pointer;
    margin-top: 30px;
    color: #323232;
    font-family: "Inter";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.18px;
    text-decoration-line: underline;

    @media (max-width: 576px) {
      margin-top: 15px;
    }
  }
}
</style>