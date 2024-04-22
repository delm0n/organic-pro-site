<template>
  <div class="complect-item">
    <my-image
      class="complect-item__img"
      :alt="'#'"
      :floder="'order'"
      :imgName="'complect'"
      :mobile="false"
      :lazyLoad="false"
    />
    <div class="complect-item__content">
      <div class="title-container">
        <h4 v-html="title"></h4>
        <p class="decr" v-html="decr"></p>
      </div>

      <ul class="dops-container">
        <li v-for="(dop, idx) in item" :key="idx" class="dop-item">
          <b v-html="dop.name"></b>
          <span v-html="dopDecr[idx]"></span>
        </li>
      </ul>

      <div class="offer-container">
        <div class="price">
          <p class="discont">-20%</p>
          <p class="new" v-html="newPrice"></p>
          <p class="old" v-html="oldPrice"></p>
        </div>

        <button @click="complectToCart(complectField)" class="button">
          Добавить в заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  props: {
    item: Object,
    complectField: String,
    title: String,
    decr: String,
  },
  components: { MyImage },
  computed: {
    newPrice() {
      return (
        this.item
          .reduce(function (sum, dop) {
            return sum + dop.price;
          }, this.getMainPrices[0])
          .toLocaleString() + " РУБ."
      );
    },

    oldPrice() {
      return (
        this.item
          .reduce(function (sum, dop) {
            return sum + dop.oldPrice;
          }, this.getMainPrices[1])
          .toLocaleString() + " РУБ."
      );
    },

    dopDecr() {
      let field = this.complectField;

      return this.item.map(function (name) {
        return name[field];
      });
    },

    ...mapGetters(["getMainPrices"]),
  },

  methods: mapMutations(["complectToCart"]),
};
</script>

<style lang="scss" scoped>
@import "../../scss/_global.scss";

.complect-item {
  display: grid;
  gap: 30px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 665px;
    margin: 0 auto 30px;
  }

  &__img {
    @include aspect() {
      aspect-ratio: 695/695;
      max-width: 695px;
    }
  }

  &__content {
    h4 {
      color: #323232;
      font-family: "Gilroy";
      font-size: 27px;
      font-style: normal;
      font-weight: 600;
      line-height: 125.926%;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 22px;
        margin-bottom: 10px;
      }
    }

    .decr {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      padding-bottom: 15px;
      border-bottom: 2px solid #e8e8e8;

      @media (max-width: 768px) {
        padding-bottom: 10px;
        font-size: 18px;
      }
    }

    .dops-container {
      margin: 30px 0px;
      padding-left: 40px;

      @media (max-width: 576px) {
        margin: 20px 0px;
        padding-left: 35px;
      }

      li {
        list-style: none;
        position: relative;
        color: #323232;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        line-height: 25px;

        @media (max-width: 576px) {
          font-size: 16px;
          line-height: 22px;
        }

        &:not(:last-child) {
          margin-bottom: 20px;

          @media (max-width: 576px) {
            margin-bottom: 15px;
          }
        }

        b {
          font-weight: 500;
          display: block;
          margin-bottom: 6px;

          @media (max-width: 576px) {
            margin-bottom: 2px;
          }
        }

        span {
          font-weight: 300;
          display: block;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: -40px;
          top: 0;
          height: 30px;
          width: 30px;

          @media (max-width: 576px) {
            height: 25px;
            width: 25px;
            left: -30px;
          }
          background-size: 100%;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODc1IDE0LjM3NUwxMi41IDIwTDIxLjg3NSAxMC42MjUiIHN0cm9rZT0iIzJBQTAwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==);
        }
      }
    }

    .offer-container {
      display: flex;
      gap: 30px;
      align-items: center;

      @media (max-width: 768px) {
        justify-content: center;
      }

      @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        .price {
          @media (max-width: 576px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
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
  }
}
</style>