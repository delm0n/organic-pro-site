<template>
  <section id="ten">
    <div class="container">
      <div class="ten-wrapper">
        <div class="ten-wrapper__container">
          <div class="ten-wrapper__slider">
            <div class="swiper-wrapper">
              <my-image
                class="swiper-slide"
                :alt="'автоклав крестьянка с тен'"
                :floder="'ten'"
                :lazyLoad="true"
                :mobile="false"
                :imgName="'ten-1'"
              />

              <my-image
                class="swiper-slide"
                :alt="'автоклав крестьянка с тен'"
                :floder="'ten'"
                :lazyLoad="true"
                :mobile="false"
                :imgName="'ten-2'"
              />
            </div>

            <div class="ten-prev">
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

            <div class="ten-next">
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
          </div>
        </div>
        <div class="ten-wrapper__content">
          <h2>ТЭН на 1,5 кВт</h2>
          <p class="subtitle">Автономный нагрев аппарата</p>

          <p class="decr">
            <span>Расширьте возможности</span> трубогиба на максимум всего с
            одним приспособлением!
            <span>Сгибайте профиль под идеально-прямым углом</span> сразу на
            станке, без резки и сварки или покупки дорогостоящего оборудования!
          </p>

          <p class="decr-title">Характеристики:</p>

          <ul>
            <li>Длина: <span>149 мм</span></li>
            <li>Ширина: <span>74 мм</span></li>
            <li>Высота: <span>88 мм</span></li>
            <li>Вес: <span>1,6 кг</span></li>
          </ul>

          <div class="ten-offer">
            <div class="offer-prices">
              <div class="discont">
                <p>
                  -{{
                    Math.round(
                      (1 - (getTen.price / getTen.oldPrice).toFixed(2)) * 100
                    )
                  }}%
                </p>
              </div>
              <div class="new">
                <p>{{ getTen.price.toLocaleString() }} РУБ.</p>
              </div>
              <div class="old">
                <p>{{ getTen.oldPrice.toLocaleString() }} РУБ.</p>
              </div>
            </div>
            <button @click="addToCart()" class="button">
              Добавить в заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation } from "swiper";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    MyImage,
  },
  computed: mapGetters(["getMainPricesTen", "getTen"]),
  mounted() {
    let myTenSwiper;
    const TenSwiper = () => {
      myTenSwiper = new Swiper(".ten-wrapper__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: ".ten-next",
          prevEl: ".ten-prev",
        },
        loop: true,
        modules: [Navigation],
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: false,
          },
          769: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
          },
        },
      });
    };

    const windowbreakpoint = window.matchMedia(
      "(max-width: 1136px) and (min-width: 769px)"
    );
    const breakpointChecker = () => {
      if (windowbreakpoint.matches) {
        if (myTenSwiper) {
          return myTenSwiper.destroy(true, true);
        }
      } else {
        return TenSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  methods: {
    ...mapMutations(["addModuleToCart"]),

    addToCart() {
      this.addModuleToCart(this.getTen.id);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#ten {
  overflow: hidden;
  @extend %padd;

  img {
    max-width: 100%;
  }

  .ten-wrapper {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;
    gap: 30px;
    padding: 50px 30px;

    @media (max-width: 1366px) and (min-width: 1137px) {
      padding: 30px;
      gap: 20px;
    }

    @media (max-width: 992px) {
      padding: 30px;
      gap: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 20px 0;
    }

    &__content {
      font-family: "Gilroy";
      font-style: normal;

      @media (max-width: 768px) {
        padding: 0 20px;
      }

      h2 {
        color: #323232;
        font-size: 52px;
        font-weight: 600;
        line-height: 113.462%;
        text-transform: uppercase;

        @include fluidFontSize(38, 52, 1025, 1440);

        @media (max-width: 576px) {
          font-size: 22px;
          line-height: 29px;
        }
      }

      .subtitle {
        color: #646464;
        font-size: 27px;
        font-weight: 500;
        line-height: 125.926%;
        margin-top: 20px;

        @include fluidFontSize(24, 27, 1025, 1440);

        @media (max-width: 1366px) and (min-width: 1137px) {
          margin-top: 10px;
        }

        @media (max-width: 992px) {
          margin-top: 10px;
        }

        @media (max-width: 576px) {
          font-size: 18px;
          line-height: 25px;
          margin-top: 5px;
        }
      }

      .decr {
        color: #323232;
        margin-top: 50px;
        font-size: 22px;
        font-weight: 400;
        line-height: 131.818%;

        @include fluidFontSize(20, 22, 1025, 1440);

        @media (max-width: 1366px) and (min-width: 1137px) {
          margin-top: 30px;
        }

        @media (max-width: 992px) {
          margin-top: 30px;
        }

        @media (max-width: 576px) {
          font-size: 15px;
          line-height: 22px;
          margin-top: 20px;
        }

        span {
          font-weight: 600;
        }

        &-title {
          font-size: 22px;
          font-weight: 700;
          margin-top: 20px;

          @include fluidFontSize(20, 22, 1025, 1440);

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
            margin-top: 20px;
          }
        }
      }

      ul {
        margin-top: 10px;
        li {
          padding-left: 20px;
          color: #323232;
          font-size: 22px;
          font-weight: 400;
          line-height: 131.818%;
          position: relative;

          @include fluidFontSize(20, 22, 1025, 1440);

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
          }

          &:before {
            content: "•";
            position: absolute;
            left: 5px;
          }

          span {
            font-weight: 300;
          }
        }
      }

      .ten-offer {
        display: flex;
        gap: 30px;
        margin-top: 50px;
        @media (max-width: 1366px) and (min-width: 1137px) {
          margin-top: 30px;
        }
        @media (max-width: 1136px) {
          flex-direction: column;
        }

        @media (max-width: 992px) {
          margin-top: 30px;
        }
        @media (max-width: 768px) {
          align-items: center;
          margin-top: 20px;
          gap: 20px;
        }
      }
      .offer-prices {
        display: grid;
        grid-template-columns: auto auto;
        max-width: 165px;
        align-items: center;
        gap: 5px;
        position: relative;

        @media (max-width: 576px) {
          display: grid;
          grid-template-columns: auto;
          justify-items: center;
        }

        .new {
          grid-column: 1/3;
          grid-row: 2/3;

          @media (max-width: 576px) {
            grid-column: 1/2;
          }

          p {
            white-space: nowrap;
            color: #323232;
            font-family: "Gilroy";
            font-size: 27px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;

            @media (max-width: 576px) {
              font-size: 18px;
            }
          }
        }

        .old {
          grid-column: 1/2;
          grid-row: 1/2;

          @media (max-width: 576px) {
            grid-row: 3/4;
          }
          p {
            white-space: nowrap;
            color: #c8c8c8;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            text-decoration: line-through;
            @media (max-width: 576px) {
              font-size: 15px;
            }
          }
        }

        .discont {
          grid-column: 2/3;
          grid-row: 1/2;
          display: flex;
          padding: 5px 10px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 50px;
          background: #ff5655;

          @media (max-width: 576px) {
            padding: 0px 10px;
            grid-column: 1/2;
            max-width: max-content;
          }
          p {
            color: #fff;
            font-family: "Inter";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px; /* 143.75% */
            text-align: center;
            @media (max-width: 576px) {
              font-size: 12px;
              line-height: 19px;
            }
          }
        }
      }
    }

    &__container {
      overflow: hidden;
      position: relative;

      .swiper-wrapper {
        @media (max-width: 1136px) and (min-width: 769px) {
          flex-direction: column;
          gap: 30px;
        }
      }

      .ten-prev,
      .ten-next {
        position: absolute;
        top: 50%;
        cursor: pointer;
        user-select: none;
        transform: translateY(-50%);
        z-index: 6;

        transition: opacity 0.2s;
        &:hover {
          opacity: 0.5;
        }

        @media (max-width: 1136px) {
          display: none;
        }
      }

      .ten-next {
        right: 30px;
        @media (max-width: 1366px) {
          right: 20px;
        }
      }
      .ten-prev {
        left: 30px;
        @media (max-width: 1366px) {
          left: 20px;
        }
      }

      .swiper-slide {
        @include aspect() {
          aspect-ratio: 1/1;
        }

        @media (max-width: 768px) {
          &:first-child {
            padding-left: 20px;
          }

          &:last-child {
            padding-right: 20px;
          }
        }
      }
    }
  }
}
</style>