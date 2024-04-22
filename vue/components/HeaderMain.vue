<template>
  <div id="header-main">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-wrapper__title">
          <h1>
            <span
              >Откройте новый уровень самогоноварения с профессиональным
              аппаратом</span
            >

            <b>ORGANIC 3 PRO</b>
          </h1>
        </div>
        <div class="header-wrapper__img">
          <my-image
            class="main"
            :lazyLoad="false"
            :media="993"
            :alt="'Органик 3 про'"
            :floder="'header'"
            :imgName="'hero'"
          />

          <div class="header-wrapper__banner">
            <div class="banner">
              <my-image
                class="shield"
                :lazyLoad="false"
                :mobile="false"
                :alt="'Органик c гарантией'"
                :floder="'header'"
                :imgName="'shield'"
              />

              <p>
                Расширенная <br />
                до 3 лет гарантия
              </p>
            </div>
            <a
              class="banner banner-link"
              data-fancybox
              href="https://www.youtube.com/watch?v=OXit5Cko6WQ"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="79"
                height="79"
                viewBox="0 0 79 79"
                fill="none"
              >
                <circle
                  cx="39.5"
                  cy="39.5"
                  r="39.5"
                  fill="#E1C9A1"
                  fill-opacity="0.4"
                />
                <circle
                  cx="39.8337"
                  cy="39.8318"
                  r="33.8571"
                  fill="#E1C9A1"
                  fill-opacity="0.7"
                />
                <circle cx="39.8316" cy="39.8316" r="27.8824" fill="#E1C9A1" />
                <path
                  d="M47.7695 36.0356C50.4362 37.5752 50.4362 41.4242 47.7695 42.9638L38.3599 48.3964C35.6932 49.936 32.3599 48.0115 32.3599 44.9323L32.3599 34.067C32.3599 30.9878 35.6932 29.0633 38.3599 30.6029L47.7695 36.0356Z"
                  fill="#6E5F3C"
                />
              </svg>
              <p>
                Смотреть <br />
                видео
              </p></a
            >
          </div>
        </div>
        <div class="header-wrapper__features">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="features-item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M16.5326 12.716L17.8344 20L11.0651 16.5432L4.16577 20L5.46754 12.716L0 7.65433L7.55033 6.54319L11.0651 0L14.4498 6.54319L22 7.65433L16.5326 12.716Z"
                fill="#C8AC6C"
              />
            </svg>

            <div>
              <p class="features-item__title" v-html="item.title"></p>
              <p class="features-item__text" v-html="item.text"></p>
            </div>
          </div>
        </div>
        <div class="header-wrapper__offer">
          <div class="offer-prices">
            <div class="discont">-20%</div>
            <div
              class="new"
              v-html="getMainFirst.price.toLocaleString() + ' РУБ.'"
            ></div>
            <div
              class="old"
              v-html="getMainFirst.oldPrice.toLocaleString() + ' РУБ.'"
            ></div>
          </div>
          <div class="offer-buttons">
            <button class="button">Заказать</button>
            <button class="button button-tinkoff">
              <my-image
                class="tinkoff-icon"
                :alt="'#'"
                :imgName="'tinkoff-icon'"
                :floder="'tinkoff'"
                :mobile="false"
              />
              {{ getMobile ? "Заказать" : "" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage },
  data() {
    return {
      features: [
        {
          title: "Производственная система охлаждения",
          text: "Получайте до  ... л/час благодаря холодильнику Димрота и Х-трубному доохладителю",
        },

        {
          title: "8-ступенчатая очистка спиртовых паров",
          text: "Очищайте и укрепляйте самогон ещё лучше со стеклянной царгой на 8 тарелочек",
        },

        {
          title: "3 режима работы",
          text: "Делайте спирт-сырец (40°), классический дистиллят (до  ... °) или чистый спирт (96,6°)",
        },
      ],
    };
  },
  computed: mapGetters(["getMobile", "getMainFirst"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#header-main {
  padding-top: 140px;
  margin-bottom: 100px;
  background: #f5f5f5;
  @media (max-width: 768px) {
    padding-top: 90px;
    margin-bottom: 60px;
  }
  overflow: hidden;

  .header-wrapper {
    display: grid;
    grid-template-columns: 576px auto;
    gap: 50px 30px;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-bottom: 50px;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 576px) {
      margin-bottom: 20px;
      gap: 20px;
    }

    &__title {
      align-self: center;
      @media (max-width: 1280px) {
        grid-row: 1/2;
        max-width: 700px;
        margin: 0 auto;
        text-align: center;

        @media (min-width: 993px) {
          grid-column: 1/3;
        }
      }

      h1 {
        span {
          display: block;
          color: #646464;
          font-family: "Gilroy";
          font-size: 27px;
          font-style: normal;
          font-weight: 500;
          line-height: 34px; /* 125.926% */
          margin-bottom: 15px;

          @media (max-width: 576px) {
            margin-bottom: 5px;
            font-size: 18px;
            line-height: 25px;
          }
        }

        b {
          color: #c8ac6c;
          font-family: "Gilroy";
          font-size: 52px;
          font-style: normal;
          font-weight: 800;
          line-height: 59px; /* 113.462% */
          text-transform: uppercase;

          @media (max-width: 576px) {
            font-size: 22px;
            line-height: 29px; /* 131.818% */
          }
        }
      }
    }

    &__img {
      margin-left: auto;
      grid-row: 1/4;
      align-self: center;
      grid-column: 2/3;
      position: relative;

      .main {
        max-width: 695px;
        width: 100%;
      }

      @media (max-width: 1280px) {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 2/3;
        margin: 0 auto;
        max-width: 475px;
      }
    }

    &__features {
      align-self: center;
      .features-item {
        &:not(:last-child) {
          margin-bottom: 30px;

          @media (max-width: 576px) {
            margin-bottom: 10px;
          }
        }

        svg {
          flex-shrink: 0;
        }

        display: flex;
        gap: 15px;

        @media (max-width: 992px) {
          gap: 5px;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        &__text {
          color: #646464;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 768, 1136);

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
          }
        }

        &__title {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 131.818%;
          margin-bottom: 5px;

          @include fluidFontSize(18, 22, 768, 1136);

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
            margin-bottom: 0;
          }
        }
      }
    }

    &__offer {
      max-width: 534px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      align-self: start;

      @media (max-width: 1280px) {
        margin: 0 auto;
        width: 100%;

        @media (min-width: 993px) {
          grid-column: 1/3;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .offer-prices {
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      .offer-buttons {
        flex-grow: 1;
        display: flex;
        gap: 10px;

        .button-tinkoff {
          @media (min-width: 769px) {
            width: 77px;
          }
        }

        @media (max-width: 768px) {
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
      }

      .discont {
        border-radius: 50px;
        background: #ff5655;
        padding: 5px 10px;
        max-width: max-content;

        color: #fff;
        font-family: "Inter";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px; /* 143.75% */

        @media (max-width: 576px) {
          font-size: 12px;
          line-height: 19px;
          padding: 1px 5px;
        }
      }

      .new {
        margin-top: 5px;
        color: #323232;
        font-family: "Gilroy";
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }
      .old {
        color: #c8c8c8;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        text-decoration-line: line-through;

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
    }

    &__banner {
      position: absolute;
      right: 0;
      top: 40px;

      @media (max-width: 1400px) {
        top: 20px;
        transform: scale(0.9) translateX(calc(10% - 20px));
      }
      @media (max-width: 1136px) {
        transform: scale(0.8) translateX(calc(20% - 20px));
        top: 10px;
      }

      @media (max-width: 768px) {
        width: 57%;
        min-width: 205px;
        top: 9%;

        @media (min-width: 376px) {
          transform: scale(1) translate(0);
        }
      }

      .banner {
        height: 109px;
        border-radius: 150px;
        border: 4px solid #e1c9a1;

        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(4px);
        padding: 13px 15px;
        display: flex;
        gap: 10px;
        align-items: center;
        width: 330px;

        @media (max-width: 1400px) {
          width: 290px;
        }

        @media (max-width: 768px) {
          max-width: 100%;
          width: 234px;
          border: 2px solid #e1c9a1;
          height: auto;
        }

        .shield {
          width: 79px;
          aspect-ratio: 1/1;

          @media (max-width: 768px) {
            width: 40px;
          }
        }

        &.banner-link {
          svg {
            flex-shrink: 0;

            @media (max-width: 768px) {
              width: 40px;
              height: 40px;
            }

            circle {
              transform-origin: center;
              transition: all 0.3s 0.2s;
            }
          }

          &:hover {
            svg {
              circle {
                &:nth-child(3) {
                  transform: scale(0.9);
                }
                &:nth-child(2) {
                  transform: scale(0.95);
                }
              }
            }
          }
        }

        &:first-child {
          margin-bottom: 20px;

          @media (max-width: 768px) {
            margin-bottom: 10px;
          }
        }

        p {
          color: #323232;
          font-family: "Gilroy";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 25px;

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>