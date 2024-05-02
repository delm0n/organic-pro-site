<template>
  <section id="made">
    <div class="container">
      <div class="title">
        <h2>инновационные решения и современные технологии</h2>
        <p class="subtitle">
          Сочетание качественных материалов, надёжной конструкции и оригинальных
          запатентованных комплектующих
        </p>
      </div>
      <div class="made-wrapper">
        <div class="made-wrapper__slider">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in slides"
              :key="index"
              class="swiper-slide"
            >
              <my-image
                :alt="'#'"
                :floder="'made'"
                :media="769"
                :imgName="item"
              />
            </div>
          </div>

          <div class="made-prev">
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

          <div class="made-next">
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

          <div class="made-pagination"></div>
        </div>

        <div id="made-wrapper__modal" class="made-wrapper__modal">
          <div class="made-modal">
            <div class="made-modal__img">
              <my-image
                :imgName="'big-logo'"
                :floder="'src'"
                :mobile="false"
                :alt="'производитель helicon'"
              />
            </div>
            <div class="made-modal__content">
              <h3>Производитель «Геликон&nbsp;Пром»</h3>
              <p>
                Мы работаем с 2012 года, и производим качественные товары,
                используя экологичные технологии производства. Только лучшее —
                всё оборудование и материалы проходят трёхэтапную проверку. Мы
                постоянно обновляем конструкции наших изделий, используя
                инновационные технологии и авторские оригинальные решения.
              </p>
              <p>
                Недавно мы сделали гриндер «Удачный» ещё более эффективным.
                Шкала угла наклона столиков теперь — не только в вертикальной,
                но и горизонтальной плоскости (2 типа столиков). Это позволяет
                формировать сложные углы в двух плоскостях одновременно.
                Изменилась и система регулировки ленты. Увеличилось число
                отверстий для перестановки пружины на рычаге — теперь натяжение
                ленты можно настроить ещё точнее. Сам узел регулировки стал
                бесшарнирным, что повышает стабильность ленты.
              </p>
            </div>
          </div>
        </div>

        <div @click="openModal()" class="made-wrapper__about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#C8AC6C" />
            <path
              d="M16.7 16.5H13.18C13.18 16.0307 13.2973 15.5833 13.532 15.158C13.7813 14.718 14.0747 14.3367 14.412 14.014C14.764 13.6767 15.1087 13.354 15.446 13.046C15.798 12.738 16.0913 12.408 16.326 12.056C16.5753 11.704 16.7 11.352 16.7 11C16.7 10.1493 16.1573 9.724 15.072 9.724C14.016 9.724 13.224 10.34 12.696 11.572L9.66 9.834C10.144 8.734 10.8773 7.86867 11.86 7.238C12.8573 6.60733 13.972 6.292 15.204 6.292C16.5533 6.292 17.7267 6.688 18.724 7.48C19.7213 8.272 20.22 9.34267 20.22 10.692C20.22 11.2933 20.0953 11.858 19.846 12.386C19.6113 12.914 19.318 13.3613 18.966 13.728C18.6287 14.0947 18.284 14.432 17.932 14.74C17.5947 15.048 17.3013 15.356 17.052 15.664C16.8173 15.9573 16.7 16.236 16.7 16.5ZM17.03 20.218C17.03 20.79 16.8247 21.2813 16.414 21.692C16.0033 22.1027 15.512 22.308 14.94 22.308C14.368 22.308 13.8767 22.1027 13.466 21.692C13.0553 21.2813 12.85 20.79 12.85 20.218C12.85 19.646 13.0553 19.1547 13.466 18.744C13.8767 18.3333 14.368 18.128 14.94 18.128C15.512 18.128 16.0033 18.3333 16.414 18.744C16.8247 19.1547 17.03 19.646 17.03 20.218Z"
              fill="white"
            />
          </svg>
          <p>О производителе</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation, Pagination, EffectFade } from "swiper";

export default {
  data() {
    return {
      slides: [
        "made-1",
        "made-2",
        "made-3",
        "made-4",
        "made-5",
        "made-6",
        "made-7",
        "made-8",
        "made-9",
        "made-10",
        "made-11",
        "made-12",
      ],
    };
  },
  components: {
    MyImage,
  },
  mounted() {
    let myMadeSwiper;
    let myMadeSwiperMobile;

    const MadeSwiper = () => {
      myMadeSwiper = new Swiper(".made-wrapper__slider ", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: false,
        speed: 400,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".made-next",
          prevEl: ".made-prev",
        },
        loop: true,
        modules: [Navigation, EffectFade],
      });
    };

    const MadeSwiperMobile = () => {
      myMadeSwiperMobile = new Swiper(".made-wrapper__slider ", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".made-pagination",
          type: "progressbar",
        },
        modules: [Pagination],
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (windowbreakpoint.matches) {
        if (myMadeSwiper) {
          myMadeSwiper.destroy(true, true);
        }
        setTimeout(() => {
          return MadeSwiperMobile();
        }, 100);
      } else {
        if (myMadeSwiperMobile) {
          myMadeSwiperMobile.destroy(true, true);
        }
        setTimeout(() => {
          return MadeSwiper();
        }, 100);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  methods: {
    openModal() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#made-wrapper__modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#made {
  overflow: hidden;
  @extend %padd;

  padding-bottom: 0;
  // background: #f9f9f9;

  .made-wrapper {
    position: relative;
    &__slider {
      .swiper-slide {
        @include aspect() {
          aspect-ratio: 671/335;
        }
        picture {
          justify-content: center;
        }
        img {
          @media (min-width: 769px) {
            max-width: 94%;
          }

          width: 100%;
          margin: 0 auto;
          // transition: opacity 0.3s ease;
        }
      }

      .made-prev,
      .made-next {
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

        @media (max-width: 768px) {
          display: none;
        }
      }

      .made-next {
        right: 0px;
      }
      .made-prev {
        left: 0px;
      }

      .made-pagination {
        @media (min-width: 577px) {
          display: none;
        }

        margin-top: 10px;
        height: 2px;
        position: relative;
        background: #cecece;
        .swiper-pagination-progressbar-fill {
          background: #c8ac6c;
        }
      }
    }

    &__about {
      // display: none;

      // @media (max-width: 1280px) {
      display: flex;
      gap: 10px;
      align-items: center;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      cursor: pointer;
      padding: 10px 20px;

      circle,
      p {
        transition: all 0.3s;
      }

      @media (min-width: 769px) {
        position: absolute;
        z-index: 5;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;

        &:hover {
          svg circle {
            fill: #c8ac6c;
          }
          p {
            color: #c8ac6c;
          }
        }
      }

      @media (max-width: 768px) {
        max-width: 280px;
        justify-content: center;
        margin: 20px auto 0;
      }

      p {
        color: #c8ac6c;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 138.889% */
        text-decoration-line: underline;
      }
      // }
    }
  }
}

#made-wrapper__modal {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  padding: 20px;
  display: none;

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  // @media (min-width: 1281px) {
  //   display: block !important;
  //   position: absolute;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   right: 8%;
  //   width: 490px;
  //   z-index: 5;
  // }

  .made-modal {
    // @media (max-width: 1280px) {
    display: flex;
    gap: 30px;
    max-width: 936px;
    align-items: center;
    padding: 20px 0;

    @media (max-width: 768px) {
      padding: 10px 0 0;
    }
    // }

    &__img {
      img {
        max-width: 100%;
      }

      @media (max-width: 992px) {
        display: none;
      }

      // @media  (min-width: 993px) {
      //   display: block;
      // }
    }

    &__content {
      font-family: "Gilroy";
      font-style: normal;
      color: #323232;

      @media (min-width: 993px) {
        font-family: "Gilroy";
        width: 50%;
      }

      h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 138.889%;
        margin-bottom: 20px;

        @media (min-width: 993px) {
          font-size: 30px;
          font-weight: 700;
          line-height: normal;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          font-size: 16px;
          margin-bottom: 20px;
        }
      }

      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 138.889%;

        @media (min-width: 993px) {
          font-size: 20px;

          font-weight: 300;
          line-height: 27px;
        }

        @media (max-width: 768px) {
          font-size: 16px;
          margin-bottom: 15px;
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>