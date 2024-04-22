<template>
  <div class="dop-item">
    <div class="dop-item__wrapper">
      <div class="dop-item__img">
        <div class="dop-img">
          <picture>
            <source
              :srcset="'/build/images/dops/' + dop.img + '.webp'"
              type="image/webp"
            />
            <img
              :src="'/build/images/dops/' + dop.img + '.png'"
              :alt="dop.name"
            />
          </picture>
        </div>
      </div>
      <div class="dop-item__content">
        <p class="content-title" v-html="dop.name"></p>
        <p class="content-modal hyperlink" @click="openModal(dop)">
          Характеристики
        </p>
        <div class="content-offer">
          <div class="price">
            <p class="old" v-html="dop.oldPrice + ' РУБ.'"></p>
            <div class="discont">
              {{
                "-" +
                Math.round(((dop.oldPrice - dop.price) / dop.oldPrice) * 100) +
                "%"
              }}
            </div>
            <p class="new" v-html="dop.price + ' РУБ.'"></p>
          </div>
          <div class="buttons-block">
            <button
              v-show="!Boolean(cartCount)"
              @click="addToCart(dop.id)"
              class="button"
            >
              Добавить в заказ
            </button>

            <div v-show="Boolean(cartCount)" class="cart-buttons">
              <div @click="removeCart(dop.id)" class="cart-remove">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                >
                  <rect
                    width="77"
                    height="77"
                    rx="15"
                    fill="#2AA000"
                    fill-opacity="0.6"
                  />
                  <g clip-path="url(#clip0_421_3605)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3661 24.3661C23.8543 23.878 24.6457 23.878 25.1339 24.3661L25.7412 24.9734C26.3639 25.5962 26.7476 26.4182 26.825 27.2955L26.9754 29H50.5C50.8639 29 51.2097 29.1586 51.4472 29.4343C51.6846 29.71 51.7901 30.0756 51.7362 30.4354L50.1805 40.8063C49.9052 42.642 48.3283 44 46.472 44H28.299L28.419 45.3599C28.4759 46.0051 29.0163 46.5 29.6641 46.5H45.5C47.5711 46.5 49.25 48.1789 49.25 50.25C49.25 52.3211 47.5711 54 45.5 54C43.4289 54 41.75 52.3211 41.75 50.25C41.75 49.8117 41.8252 49.391 41.9634 49H32.7866C32.9248 49.391 33 49.8117 33 50.25C33 52.3211 31.3211 54 29.25 54C27.1789 54 25.5 52.3211 25.5 50.25C25.5 49.1741 25.9531 48.2039 26.679 47.5201C26.2632 46.9741 25.993 46.3089 25.9286 45.5796L24.3347 27.5152C24.3089 27.2228 24.181 26.9488 23.9734 26.7412L23.3661 26.1339C22.878 25.6457 22.878 24.8543 23.3661 24.3661ZM45.5 49C44.8096 49 44.25 49.5596 44.25 50.25C44.25 50.9404 44.8096 51.5 45.5 51.5C46.1904 51.5 46.75 50.9404 46.75 50.25C46.75 49.5596 46.1904 49 45.5 49ZM28.0784 41.5H46.472C47.0908 41.5 47.6164 41.0473 47.7082 40.4354L49.0485 31.5H27.196L28.0784 41.5ZM29.25 49C28.5596 49 28 49.5596 28 50.25C28 50.9404 28.5596 51.5 29.25 51.5C29.9404 51.5 30.5 50.9404 30.5 50.25C30.5 49.5596 29.9404 49 29.25 49Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_421_3605">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(23 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="cart-control">
                <svg
                  @click="removeItemCart(dop.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M23.6672 16H16.5558H9"
                    stroke="#646464"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>

                <span>
                  {{ cartCount }}
                </span>

                <svg
                  @click="addToCart(dop.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M16.7282 24.1661L16.7282 17M24.0018 17H16.7282M16.7282 17L16.7282 9.83398M16.7282 17H9"
                    stroke="#646464"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapMutations } from "vuex";

export default {
  components: { MyImage },
  props: {
    dop: Object,
    index: Number,
  },
  computed: {
    cartCount() {
      return this.dop.selected ? this.dop.count + 1 : 0;
    },
  },
  methods: {
    openModal(dop) {
      this.$emit("open-modal", dop);
    },

    ...mapMutations(["setCountDop"]),
    // dop
    addToCart(id) {
      this.setCountDop({ id: id, action: "plus" });
    },
    removeItemCart(id) {
      this.setCountDop({ id: id, action: "minus" });
    },
    removeCart(id) {
      this.setCountDop({ id: id, action: "remove" });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../scss/_global.scss";

.dop-item {
  background: #ffffff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 420px;
  }

  &.swiper-slide {
    height: auto;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: 1024px) and (min-width: 769px) {
      flex-direction: row;
    }
  }

  &__img {
    background: #f5f5f5;
    width: 100%;

    @media (max-width: 1024px) and (min-width: 769px) {
      width: 40%;
      display: flex;
      align-items: center;
    }

    @media (min-width: 769px) {
      aspect-ratio: 333/382;
    }

    @media (max-width: 480px) {
      padding: 30px 10px 0;
      background: none;
    }

    picture {
      justify-content: center;
      img {
        max-width: 333;
        aspect-ratio: 333/382;
        width: 100%;
      }
    }
  }

  &__content {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    @media (max-width: 1024px) and (min-width: 769px) {
      justify-content: center;
      padding: 20px 24px;
    }

    @media (max-width: 480px) {
      padding: 30px 10px 20px;
    }

    .content-title {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 29px; /* 131.818% */
      margin-bottom: 10px;

      min-height: 60px;

      // @media (max-width: 1024px) and (min-width: 769px) {
      text-align: start;
      // }

      @media (max-width: 1024px) {
        margin-bottom: 30px;
      }

      @media (max-width: 768px) {
        text-align: center;
        color: #565656;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px; /* 138.889% */
      }
    }

    .content-modal {
      color: rgba(50, 50, 50, 0.8);
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      cursor: pointer;
      text-align: start;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .content-offer {
      .buttons-block {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;

        @media (max-width: 1024px) and (min-width: 769px) {
          justify-content: start;
        }

        .button {
          margin: 0 auto;
          @include fluidFontSize(18, 22, 577, 1920);

          @media (max-width: 1024px) {
            @media (min-width: 769px) {
              margin: 0;
            }

            @include fluidFontSize(18, 22, 577, 1024);
          }
        }

        .cart-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;

          .cart-remove {
            cursor: pointer;
            max-width: 67.2px;

            svg {
              display: block;
              max-width: 100%;
            }
          }

          .cart-control {
            align-items: center;
            border-radius: 10px;
            background: #f5f5f5;
            display: flex;
            gap: 8px;

            span {
              width: 26px;
              color: #646464;
              text-align: center;
              font-family: "Gilroy";
              font-size: 22px;
              font-style: normal;
              font-weight: 400;
              line-height: 29px; /* 131.818% */
              user-select: none;
              display: block;
            }

            svg {
              cursor: pointer;
              display: block;
            }
          }
        }
      }

      .price {
        margin: 30px auto 20px;
        width: max-content;
        font-family: "Gilroy";
        font-style: normal;
        line-height: normal;

        display: grid;
        grid-template-columns: auto 1fr;
        gap: 5px;
        align-items: center;

        @media (max-width: 1024px) and (min-width: 769px) {
          margin: 30px 0 20px;
        }

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 0px;
        }
      }

      .old {
        grid-column: 1/2;
        grid-row: 1/2;

        color: #c8c8c8;
        font-size: 18px;
        font-weight: 900;
        text-decoration-line: line-through;

        @media (max-width: 768px) {
          text-align: center;
          font-size: 15px;

          grid-row: 3/4;
        }
      }

      .new {
        grid-column: 1/3;
        grid-row: 2/3;

        color: #323232;
        font-size: 27px;
        font-weight: 600;

        @media (max-width: 768px) {
          text-align: center;
          font-size: 18px;

          grid-column: 1/2;
        }
      }

      .discont {
        grid-column: 2/3;
        grid-row: 1/2;
        width: max-content;
        color: #fff;
        font-family: "Inter";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px; /* 143.75% */
        border-radius: 50px;
        background: #ff5655;
        display: flex;
        padding: 5px 10px;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          padding: 1px 5px;
          font-size: 12px;
          line-height: 19px;
          margin: 0 auto 5px;
          grid-column: 1/2;
        }
      }
    }
  }
}
</style>