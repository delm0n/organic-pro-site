<template>
  <div id="cart-dops">
    <div class="cart-items">
      <div class="cart-items__dops">
        <!-- MAIN -->
        <div class="dop-item">
          <my-image
            class="dop-item__img"
            :alt="getMainItem.name"
            :floder="'cart'"
            :imgName="'test'"
            :mobile="false"
          />

          <p class="dop-item__name" v-html="getMainItem.name"></p>
          <div class="dop-item__info">
            <div class="dop-item__controls">
              <svg
                @click="removeItemCartMain(getMainItem.id)"
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
                {{ getMainItem.selected ? getMainItem.count + 1 : 0 }}
              </span>
              <svg
                @click="addToCartMain(getMainItem.id)"
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

            <p class="dop-item__price">
              {{
                ((getMainItem.count + 1) * getMainItem.price).toLocaleString() +
                " руб."
              }}
            </p>
          </div>
        </div>
        <!-- MAIN -->

        <!-- MODULES -->
        <div
          v-for="(dop, index) in getModules.filter((el) => el.selected)"
          :key="index"
          class="dop-item"
        >
          <my-image
            class="dop-item__img"
            :alt="dop.name"
            :floder="'cart'"
            :imgName="'test'"
            :mobile="false"
          />

          <p class="dop-item__name" v-html="dop.name"></p>
          <div class="dop-item__info">
            <div class="dop-item__controls">
              <svg
                @click="removeItemModuleCart(dop.id)"
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
                {{ dop.selected ? dop.count + 1 : 0 }}
              </span>
              <svg
                @click="addModuleToCart(dop.id)"
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
            <div class="dop-item__rubbish" @click="removeModuleCart(dop.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <g clip-path="url(#clip0_187_1240)">
                  <path
                    d="M4.71429 27.1667C4.71429 29 6.25714 30.5 8.14286 30.5H21.8571C23.7429 30.5 25.2857 29 25.2857 27.1667V7.16667H4.71429V27.1667ZM8.94 15.3L11.3657 12.9417L15 16.475L18.6343 12.9417L21.06 15.3L17.4257 18.8333L21.06 22.3667L18.6343 24.725L15 21.1917L11.3657 24.725L8.94 22.3667L12.5743 18.8333L8.94 15.3ZM21 2.16667L19.2857 0.5H10.7143L9 2.16667H3V5.5H27V2.16667H21Z"
                    fill="#646464"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_187_1240">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p class="dop-item__price">
              {{ ((dop.count + 1) * dop.price).toLocaleString() + " руб." }}
            </p>
          </div>
        </div>
        <!-- MODULES -->

        <!-- DOPS -->
        <div
          v-for="(dop, index) in getDops.filter((el) => el.selected)"
          :key="index"
          class="dop-item"
        >
          <my-image
            class="dop-item__img"
            :alt="dop.name"
            :floder="'cart'"
            :imgName="'test'"
            :mobile="false"
          />

          <p class="dop-item__name" v-html="dop.name"></p>
          <div class="dop-item__info">
            <div class="dop-item__controls">
              <svg
                @click="removeItemDopCart(dop.id)"
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
                {{ dop.selected ? dop.count + 1 : 0 }}
              </span>
              <svg
                @click="addDopToCart(dop.id)"
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
            <div class="dop-item__rubbish" @click="removeDopCart(dop.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <g clip-path="url(#clip0_187_1240)">
                  <path
                    d="M4.71429 27.1667C4.71429 29 6.25714 30.5 8.14286 30.5H21.8571C23.7429 30.5 25.2857 29 25.2857 27.1667V7.16667H4.71429V27.1667ZM8.94 15.3L11.3657 12.9417L15 16.475L18.6343 12.9417L21.06 15.3L17.4257 18.8333L21.06 22.3667L18.6343 24.725L15 21.1917L11.3657 24.725L8.94 22.3667L12.5743 18.8333L8.94 15.3ZM21 2.16667L19.2857 0.5H10.7143L9 2.16667H3V5.5H27V2.16667H21Z"
                    fill="#646464"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_187_1240">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p class="dop-item__price">
              {{ ((dop.count + 1) * dop.price).toLocaleString() + " руб." }}
            </p>
          </div>
        </div>
        <!-- DOPS -->
      </div>
      <div class="cart-items__footer">
        <p @click="$emit('to-dops')">Выбрать доп. товары</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setCountDop", "setCountMain", "setCountModule"]),

    // dop
    addDopToCart(id) {
      this.setCountDop({ id: id, action: "plus" });
    },
    removeItemDopCart(id) {
      this.setCountDop({ id: id, action: "minus" });
    },
    removeDopCart(id) {
      this.setCountDop({ id: id, action: "remove" });
    },

    // module
    addModuleToCart(id) {
      this.setCountModule({ id: id, action: "plus" });
    },
    removeItemModuleCart(id) {
      this.setCountModule({ id: id, action: "minus" });
    },
    removeModuleCart(id) {
      this.setCountModule({ id: id, action: "remove" });
    },

    // main
    addToCartMain() {
      this.setCountMain("plus");
    },
    removeItemCartMain() {
      this.setCountMain("minus");
    },
  },
  components: { MyImage },
  computed: mapGetters(["getDops", "getMainItem", "getModules"]),
};
</script>

<style lang="scss" >
@import "../../scss/_global.scss";

#cart-dops {
  .cart-items {
    border-radius: 0px 0px 10px 10px;
    background: #fff;
    box-shadow: 0px 4px 14px rgba(111, 111, 111, 0.15);
    padding: 20px;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 576px) {
      padding: 10px;
    }

    &__dops {
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: scroll;
      overflow-x: hidden;
      height: max-content;
      max-height: 21vh;

      @media (max-width: 768px) {
        gap: 10px;
      }

      @media (max-width: 576px) {
        height: 112px;
      }

      &::-webkit-scrollbar {
        width: 2px;
        height: 3px;
      }

      &::-webkit-scrollbar-track {
        background-color: #cecece;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #323232;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #323232;
      }
    }

    &__footer {
      padding: 20px 0 0;

      @media (max-width: 768px) {
        padding: 5px 0 0;
      }

      p {
        color: #ccc;
        text-align: center;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 138.889% */
        text-decoration-line: underline;
        cursor: pointer;

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 22px;
        }
      }
    }
  }

  .dop-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px 20px;
    padding-right: 5px;

    @media (max-width: 768px) {
      gap: 10px;
      grid-template-columns: 72px 1fr;
    }

    &__img {
      grid-row: 1/3;
      align-self: center;

      img {
        transition: opacity 0.4s;
      }
      @include aspect() {
        aspect-ratio: 101/101;
        max-width: 101px;

        @media (max-width: 576px) {
          max-width: 72px;
        }
      }
    }

    &__name {
      grid-row: 1/2;
      align-self: end;
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 29px; /* 131.818% */

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 19px; /* 158.333% */
      }
    }

    &__info {
      grid-row: 2/3;
      align-self: flex-start;
      display: flex;
      gap: 20px;
      align-items: center;

      @media (max-width: 768px) {
        gap: 10px;
      }
    }

    &__controls {
      border-radius: 10px;
      background: #fff;
      gap: 10px;
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        gap: 5px;
      }
      svg {
        cursor: pointer;

        @media (max-width: 768px) {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 576px) {
          width: 11px;
          height: 11px;
        }
      }

      span {
        color: #646464;
        text-align: center;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 131.818% */
        width: 30px;

        @media (max-width: 768px) {
          width: 20px;

          @include fluidFontSize(15, 18, 320, 768);
        }
      }
    }

    &__rubbish {
      cursor: pointer;

      @media (max-width: 768px) {
        width: 18px;
        height: 18px;
        svg {
          width: 100%;
          height: 100%;
        }
      }

      @media (max-width: 576px) {
        width: 13px;
        height: 17px;
      }

      svg g path {
        transition: all 0.3s 0.1s;
      }
      &:hover {
        svg g path {
          fill: #ff5655;
        }
      }
    }

    &__price {
      color: #646464;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      white-space: nowrap;

      @media (max-width: 768px) {
        @include fluidFontSize(12, 16, 320, 768);
      }
    }
  }
}
</style>