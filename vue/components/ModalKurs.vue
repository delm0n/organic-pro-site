<template>
  <div id="modal-kurs">
    <div class="modal-wrapper reverse">
      <div class="modal-wrapper__title">Курс самогоноварения</div>
      <div class="modal-wrapper__img">
        <my-image
          :alt="'Курс самогоноварения'"
          :floder="'set'"
          :imgName="'kurs'"
          :mobile="false"
        />
      </div>
      <div class="modal-wrapper__text">
        <form
          action=""
          v-on:submit.prevent
          method="post"
          class="spnForm form-order"
        >
          <div class="user-info">
            <input
              class="my-input"
              aria-label="Ваше имя"
              type="text"
              name="name"
              autocomplete="off"
              placeholder="Ваше имя"
              required
            />

            <input
              class="my-input"
              aria-label="Ваш номер телефона"
              type="tel"
              name="phone"
              autocomplete="off"
              placeholder="Ваш номер телефона"
              required
            />

            <input
              class="my-input"
              aria-label="Ваш email"
              type="email"
              name="email"
              autocomplete="off"
              placeholder="E-mail"
            />
          </div>

          <input type="hidden" name="id[]" :value="getKurs.id" />
          <input
            type="hidden"
            :name="'quantity[' + getKurs.id + ']'"
            value="1"
          />

          <button type="submit" class="button">
            Купить за {{ getKurs.price.toLocaleString() }} руб.
          </button>

          <form-helicon :main="false" :rassr="false" :dops="false" />
        </form>
        <div class="decr">
          Мы свяжемся с Вами в течение 10 минут и уточним детали заказа
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import FormHelicon from "../components/FormHelicon.vue";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getKurs"]),
  components: { MyImage, FormHelicon },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#modal-kurs {
  @extend %modal;

  button.button {
    margin-top: 20px;
    @media (min-width: 769px) {
      margin-top: 30px;
    }
  }

  .decr {
    color: #323232;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px; /* 138.889% */
    max-width: 350px;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 22px; /* 146.667% */
    }
  }
}
</style>