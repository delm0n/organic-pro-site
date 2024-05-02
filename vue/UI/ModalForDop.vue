<template>
  <div id="dop-modal">
    <div class="modal-wrapper reverse">
      <div class="modal-wrapper__title" v-html="getDopModal.name"></div>
      <div class="modal-wrapper__img">
        <my-image
          :alt="getDopModal.name"
          :floder="getDopModal.floder"
          :imgName="getDopModal.img + '__modal'"
          :mobile="false"
        />
      </div>
      <div class="modal-wrapper__text">
        <p v-html="getDopModal.text"></p>
        <div class="offer">
          <div class="price">
            <p
              class="new"
              v-html="getDopModal.price.toLocaleString() + ' РУБ.'"
            ></p>
            <p
              class="old"
              v-html="getDopModal.oldPrice.toLocaleString() + ' РУБ.'"
            ></p>
          </div>

          <button class="button">Купить отдельно</button>
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
  computed: mapGetters(["getDopModal"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#dop-modal {
  @extend %modal;

  ul {
    padding-left: 25px;
    li {
      list-style: none;
      position: relative;

      b {
        color: #646464;
        font-weight: 600;
      }

      &:before {
        content: "·";
        position: absolute;
        font-size: 50px;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        line-height: 1px;
      }
    }
  }

  .offer {
    .price {
      margin: 30px 0 20px;
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      align-items: end;

      p {
        font-family: "Gilroy";
        font-style: normal;
        line-height: normal;
        white-space: nowrap;

        &.old {
          text-decoration: line-through;
          color: #c8c8c8;
          font-weight: 900;
          font-size: 18px;
        }

        &.new {
          font-weight: 600;
          color: #323232;
          font-size: 27px;
        }
      }
    }
  }
}
</style>