<template>
  <div ref="cart" id="cart" class="container">
    <div class="cart">
      <div
        v-click-outside="changeCollapseFalse"
        :style="'margin-right: ' + mr"
        class="cart-wrapper"
      >
        <div
          v-on:click.stop="collapse = !collapse"
          class="cart-wrapper__header"
        >
          <div class="cart-title">
            <div class="cart-count">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_169_28480)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.366116 0.366117C0.854272 -0.122039 1.64573 -0.122039 2.13388 0.366117L2.74121 0.973444C3.36395 1.59618 3.74764 2.41822 3.82505 3.29549L3.97544 5H27.5C27.8639 5 28.2097 5.15857 28.4472 5.4343C28.6846 5.71004 28.7901 6.07556 28.7362 6.43543L27.1805 16.8063C26.9052 18.642 25.3283 20 23.472 20H5.29897L5.41896 21.3599C5.4759 22.0051 6.01635 22.5 6.66412 22.5H22.5C24.5711 22.5 26.25 24.1789 26.25 26.25C26.25 28.3211 24.5711 30 22.5 30C20.4289 30 18.75 28.3211 18.75 26.25C18.75 25.8117 18.8252 25.391 18.9634 25H9.78662C9.92481 25.391 10 25.8117 10 26.25C10 28.3211 8.32107 30 6.25 30C4.17893 30 2.5 28.3211 2.5 26.25C2.5 25.1741 2.95313 24.2039 3.67897 23.5201C3.26321 22.9741 2.99299 22.3089 2.92864 21.5796L1.33472 3.51523C1.30892 3.2228 1.18102 2.94879 0.973444 2.74121L0.366116 2.13388C-0.122039 1.64573 -0.122039 0.854272 0.366116 0.366117ZM22.5 25C21.8096 25 21.25 25.5596 21.25 26.25C21.25 26.9404 21.8096 27.5 22.5 27.5C23.1904 27.5 23.75 26.9404 23.75 26.25C23.75 25.5596 23.1904 25 22.5 25ZM5.07839 17.5H23.472C24.0908 17.5 24.6164 17.0473 24.7082 16.4354L26.0485 7.5H4.19603L5.07839 17.5ZM6.25 25C5.55964 25 5 25.5596 5 26.25C5 26.9404 5.55964 27.5 6.25 27.5C6.94036 27.5 7.5 26.9404 7.5 26.25C7.5 25.5596 6.94036 25 6.25 25Z"
                    fill="#323232"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_169_28480">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>{{ countOfCart }}</p>
            </div>

            <p>
              {{
                collapse
                  ? "Оформление заказа"
                  : "на&nbsp;сумму " +
                    getLastPrice.toLocaleString() +
                    "&nbsp;РУБ."
              }}
            </p>
          </div>

          <div class="cart-icon">
            <svg
              v-show="!collapse"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M19 6L11.2071 13.7929C10.8166 14.1834 10.1834 14.1834 9.79289 13.7929L2 6"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>

            <svg
              v-show="collapse"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M2 18L10.5 10.5M19 18L10.5 10.5M10.5 10.5L19 2M10.5 10.5L2 2"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <collapse :when="collapse">
          <div class="cart-wrapper__bottom">
            <cart-dops @to-dops="toDops" />
            <div class="last-price">
              <p>ИТОГО: {{ getLastPrice.toLocaleString() + " руб." }}</p>
            </div>

            <form action="" v-on:submit.prevent method="post" class="spnForm">
              <div class="cart-input">
                <input
                  class="my-input"
                  type="text"
                  name="name"
                  placeholder="Имя"
                />
                <input
                  class="my-input"
                  type="text"
                  name="phone"
                  placeholder="+7 (___)-___-__-__"
                />
              </div>

              <div class="cart-buttons">
                <div class="cart-buttons__container">
                  <div @click="formEvent()" class="button">Купить</div>
                  <div @click="rassrEvent()" class="button button-tinkoff">
                    <my-image
                      class="tinkoff-icon"
                      :alt="'#'"
                      :imgName="'tinkoff-icon'"
                      :floder="'tinkoff'"
                      :mobile="false"
                    />
                    <!-- <p>В рассрочку</p> -->
                  </div>
                  <button
                    style="display: none"
                    ref="buttonSubmit"
                    type="submit"
                  ></button>
                </div>
                <p class="decr">Условия рассрочки</p>
              </div>

              <form-helicon :main="true" :rassr="true" />
            </form>
          </div>
        </collapse>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import CartDops from "./CartDops.vue";
import { mapGetters, mapMutations } from "vuex";
import { Collapse } from "vue-collapsed";
import vClickOutside from "click-outside-vue3";
import FormHelicon from "./FormHelicon.vue";

export default {
  components: { MyImage, Collapse, CartDops, FormHelicon },
  data() {
    return {
      collapse: false,
      mr: 0,
    };
  },
  computed: {
    ...mapGetters(["getCountOfCart", "getLastPrice"]),

    countOfCart() {
      let str = String(this.getCountOfCart);
      let strLast = Number(str.slice(-1));

      if (this.getCountOfCart == 1 || (strLast == 1 && str[0] != "1")) {
        return this.getCountOfCart + " товар";
      } else {
        if (
          strLast < 5 &&
          (this.getCountOfCart < 5 || this.getCountOfCart > 21)
        ) {
          return this.getCountOfCart + " товара";
        } else {
          return this.getCountOfCart + " товаров";
        }
      }
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    ...mapMutations(["changeUserRassrochka", "openModalSuccessOrder"]),

    getMr() {
      let pad = window.innerWidth > 576 ? "20px" : "0px";

      this.mr =
        "calc(" +
        window
          .getComputedStyle(document.getElementById("cart"), "")
          .getPropertyValue("margin-right") +
        " + " +
        pad +
        ")";
    },

    toDops() {
      this.changeCollapseFalse();

      this.gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: "#dops" },
      });
    },

    changeCollapseFalse() {
      this.collapse ? (this.collapse = false) : "";
    },

    formEvent() {
      this.openModalSuccessOrder();
      this.changeUserRassrochka(false);
      setTimeout(() => {
        this.$refs.buttonSubmit.click();
      }, 100);
    },

    rassrEvent() {
      this.openModalSuccessOrder();
      this.changeUserRassrochka(true);
      setTimeout(() => {
        this.$refs.buttonSubmit.click();
      }, 100);
    },
  },

  mounted() {
    addEventListener("resize", () => {
      this.getMr();
    });
    this.getMr();
  },
};
</script>

<style lang="scss">
#cart {
  * {
    user-select: none;
  }
  .cart {
    position: relative;

    &-wrapper {
      position: fixed;

      bottom: 0;
      right: 0;
      z-index: 1000;
      border-radius: 10px 10px 0px 0px;
      max-width: 540px;
      width: 100%;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      overflow: hidden;

      @media (max-width: 768px) {
        max-width: 380px;
      }

      @media (max-width: 576px) {
        transform: translateX(-20px);
        width: calc(100% - 40px);
      }

      &__header {
        background: #2aa000;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        gap: 10px;

        @media (max-width: 768px) {
          padding: 15px;
        }

        @media (max-width: 576px) {
          padding: 10px;
        }

        .cart-icon {
          position: relative;
          height: 21px;
          width: 20px;

          @media (max-width: 768px) {
            width: 15px;
            height: 15px;
          }

          svg {
            width: 100%;
            height: 100%;
            position: absolute;
            transform-origin: center;
            animation: rotateElement 0.3s 0.1s, showElement 0.4s;
          }
        }

        .cart-title {
          display: flex;
          gap: 10px;
          flex-shrink: 1;
          align-items: center;
          position: relative;
          z-index: 10;

          p {
            color: #fff;
            font-family: "Inter";
            font-size: 22px;
            font-style: normal;
            font-weight: 300;
            line-height: 29px; /* 131.818% */

            @media (max-width: 768px) {
              font-size: 15px;
              line-height: 20px;
            }
          }

          .cart-count {
            svg {
              flex-shrink: 0;

              @media (max-width: 768px) {
                width: 15px;
                height: 15px;
              }
            }

            flex-shrink: 0;
            display: flex;
            padding: 5px 20px;
            justify-content: center;
            align-items: center;
            width: 200px;
            gap: 15px;
            border-radius: 30px;
            background: #fff;

            @media (max-width: 768px) {
              padding: 5px 10px;
              width: 125px;
              gap: 10px;
            }

            p {
              font-weight: 600;
              color: #000;
              white-space: nowrap;

              @media (max-width: 768px) {
                font-size: 14px;
                line-height: 21px;
              }
            }
          }
        }
      }

      &__bottom {
        background: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: stretch;

        @media (max-width: 768px) {
          padding: 15px;
        }

        @media (max-width: 576px) {
          padding: 10px;
        }

        .last-price {
          p {
            color: #323232;
            text-align: center;
            font-family: "Gilroy";
            font-size: 27px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }
        .cart-input {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .cart-buttons {
          &__container {
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: center;
            max-width: calc(282px + 57px);
            width: 100%;
          }

          .button-tinkoff {
            width: 77px;
          }

          .decr {
            color: #323232;
            text-align: center;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px; /* 138.889% */
            text-decoration-line: underline;
            cursor: pointer;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>