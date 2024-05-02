<template>
  <div id="order-kit">
    <div class="order-kit__modules">
      <div
        v-for="(column, modulIndex) in columns"
        :key="modulIndex"
        class="modules-column"
      >
        <div class="module-item module-title">
          <my-image
            class="module-title__img"
            :alt="'#'"
            :floder="'order'"
            :imgName="column.img"
            :mobile="false"
          />
          <p class="module-item__name" v-html="column.title"></p>
          <div class="module-item__price">
            <p class="new" v-html="column.price.toLocaleString() + ' РУБ.'"></p>
            <p
              class="old"
              v-html="column.oldPrice.toLocaleString() + ' РУБ.'"
            ></p>
          </div>
        </div>
        <div
          v-for="(item, index) in getModules.filter(
            (el) => el.type == column.type
          )"
          :key="index"
          class="module-item"
        >
          <div class="module-item__checkbox">
            <order-checkbox :item="item" />
          </div>
          <p
            @click="openModal(item)"
            class="module-item__name"
            v-html="item.name"
          ></p>
          <div class="module-item__price">
            <p class="new" v-html="item.price + ' РУБ.'"></p>
            <p class="old" v-html="item.oldPrice + ' РУБ.'"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="order-kit__offer">
      <div class="offer-container">
        <div class="price-container">
          <p class="discont">-20%</p>
          <p class="new" v-html="getPriceOrder.toLocaleString() + ' РУБ.'"></p>
          <p
            class="old"
            v-html="getOldPriceOrder.toLocaleString() + ' РУБ.'"
          ></p>
        </div>

        <div class="button-container">
          <button class="button" @click="addToCart()">В корзину</button>
          <button class="button button-tinkoff">
            <my-image
              class="tinkoff-icon"
              :alt="'#'"
              :imgName="'tinkoff-icon'"
              :floder="'tinkoff'"
              :mobile="false"
            />
            <p>Заказать</p>
          </button>
        </div>
      </div>
    </div>

    <div class="order-kit__img">
      <div class="image-container">
        <my-image
          class="main-kit"
          :alt="'органик про самогонный аппарат'"
          :floder="'order'"
          :imgName="'main-kit'"
          :mobile="false"
        />

        <my-image
          v-for="(item, index) in getModulesImg"
          :key="index"
          :class="[item.imgOrder, item.orderSelected ? 'active' : '']"
          :alt="item.name"
          :floder="'order'"
          :imgName="item.imgOrder"
          :mobile="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { MODULETYPES } from "../../js/module-types";
import OrderCheckbox from "../UI/OrderCheckbox.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { OrderCheckbox, MyImage },
  computed: {
    ...mapGetters([
      "getModules",
      "getPriceOrder",
      "getOldPriceOrder",
      "getOrganicCube",
      "getOrganicColonna",
    ]),

    columns() {
      return [
        {
          type: MODULETYPES.colonna,
          title: "Колонна с 8-ступенчатой вставкой",
          img: "colonna-icon",
          price: this.getOrganicColonna.price,
          oldPrice: this.getOrganicColonna.price,
        },
        {
          type: MODULETYPES.bak,
          title: "Перегонный куб на 15 литров",
          img: "bak-icon",
          price: this.getOrganicCube.price,
          oldPrice: this.getOrganicCube.oldPrice,
        },
      ];
    },

    getModulesImg() {
      return this.getModules.filter((el) => el.imgOrder);
    },
  },

  methods: {
    ...mapMutations(["orderToCart"]),

    addToCart() {
      this.orderToCart();
    },

    openModal(id) {
      this.$emit("open-modal", id);
    },
  },
};
</script>

<style lang="scss" >
@import "../../scss/_global.scss";

#order-kit {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  .order-kit {
    &__img {
      background: #f9f9f9;
      height: 100%;
      width: 100%;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      grid-column: 2/3;
      grid-row: 1/3;

      @media (max-width: 1024px) {
        grid-row: 1/2;
        grid-column: 1/2;
      }

      @media (max-width: 768px) {
        grid-row: 1/2;
        grid-column: 1/3;
        padding: 20px 17px;
      }

      .image-container {
        width: 100%;
        position: relative;

        .img-wrap {
          position: absolute;
          opacity: 0;
          transition: opacity 0.3s;

          &.active {
            opacity: 1;
            animation: img-show 0.6s ease-in-out;
          }
        }

        .main-kit {
          opacity: 1;

          margin-left: 8%;
          width: 40%;
          position: static;
        }

        .uzel-kit {
          width: 51%;
          left: 6%;
          bottom: 13%;
        }

        .tsarga-kit {
          width: 8%;
          left: 30%;
          bottom: 18%;
        }

        .ten-kit {
          width: 35%;
          left: 0;
          bottom: 0;
        }

        .sito-kit {
          width: 30%;
          right: 10px;
          bottom: 0;
        }

        .add10l-kit {
          width: 35%;
          bottom: 15%;
          right: 8%;
          z-index: 4;
        }

        .add20l-kit {
          width: 35%;
          bottom: 16.5%;
          right: 0;
          z-index: 3;
        }

        .silicon_prok-kit {
          width: 30%;
          right: 36%;
          bottom: 0;
          z-index: 3;
        }
      }
    }

    &__modules {
      display: flex;
      flex-direction: column;
      gap: 50px;

      @media (max-width: 1137px) {
        gap: 30px;
      }

      @media (max-width: 1024px) {
        grid-column: 1/3;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    }

    &__offer {
      grid-column: 1/2;
      grid-row: 2/3;

      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1024px) {
        grid-row: 1/2;
        grid-column: 2/3;
      }

      @media (max-width: 768px) {
        grid-row: 3/4;
        grid-column: 1/3;
      }

      padding: 30px;
      border-radius: 10px;
      background: #f9f9f9;

      @media (max-width: 768px) {
        padding: 20px 17px;
      }

      .offer-container {
        width: 100%;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
          justify-content: center;
        }

        @media (max-width: 576px) {
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
      }

      .price-container {
        display: flex;
        flex-direction: column;

        @media (max-width: 1024px) and (min-width: 769px) {
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 576px) {
          justify-content: center;
          align-items: center;
        }

        .discont {
          color: #fff;
          font-family: "Inter";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 23px; /* 143.75% */

          display: flex;
          padding: 5px 10px;
          justify-content: center;
          align-items: center;

          border-radius: 50px;
          background: #ff5655;
          margin-bottom: 5px;
          max-width: max-content;

          @media (max-width: 768px) {
            font-size: 12px;
            padding: 1px 5px;
            line-height: 19px; /* 158.333% */
          }
        }

        .new {
          color: #323232;
          font-family: "Gilroy";
          font-size: 27px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          white-space: nowrap;

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
          text-decoration: line-through;

          @media (max-width: 768px) {
            font-size: 15px;
          }
        }
      }

      .button-container {
        flex: 1 1 0;
        display: flex;
        justify-content: space-between;
        max-width: 370px;
        gap: 10px;
        align-items: center;

        @media (max-width: 1024px) and (min-width: 769px) {
          flex-direction: column;
        }

        @media (max-width: 576px) {
          flex-direction: column;
          gap: 10px;
          justify-content: center;
          width: 100%;
        }

        .button-tinkoff {
          @media (min-width: 1025px) {
            width: 77px;
            p {
              display: none;
            }
          }

          @media (max-width: 768px) and (min-width: 577px) {
            width: 77px;
            p {
              display: none;
            }
          }
        }
      }
    }
  }

  .module-item {
    display: grid;
    align-items: center;
    grid-template-columns: 30px auto max-content;
    gap: 10px;
    padding: 10px 0px;
    border-bottom: 1px solid #c8c8c8;
    padding-left: 60px;

    @media (max-width: 1137px) {
      padding-left: 20px;
    }

    @media (max-width: 1024px) {
      padding-left: 0;
      grid-template-columns: 30px auto;
    }

    &__name {
      color: #565656;
      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-decoration-line: underline;
      cursor: pointer;
      padding-right: 10px;

      @media (max-width: 768px) {
        padding-right: 0;
        font-size: 15px;
      }
    }

    &__price {
      display: flex;
      flex-direction: column;
      gap: 5px;

      @media (max-width: 1024px) {
        grid-column: 1/3;
        grid-row: 2/3;
        flex-direction: row;
      }

      p {
        text-align: right;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        line-height: normal;

        @media (max-width: 768px) {
          font-size: 15px;
        }

        &.new {
          color: #323232;
          font-weight: 600;
        }

        &.old {
          color: #c8c8c8;
          font-weight: 900;
          text-decoration: line-through;
        }
      }
    }

    &.module-title {
      grid-template-columns: 50px auto max-content;
      padding-left: 0;

      &__img {
        @include aspect() {
          aspect-ratio: 1/1;
          max-width: 50px;
        }
      }
    }
  }
}
</style>