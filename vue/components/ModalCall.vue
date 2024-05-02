<template>
  <div id="modal-call" style="display: none">
    <form action="" v-on:submit.prevent method="post" class="spnForm">
      <h3>Заказать обратный звонок</h3>

      <div class="form-call__inputs">
        <input
          class="my-input"
          aria-label="Ваше имя"
          type="text"
          name="name"
          autocomplete="off"
          placeholder="Имя"
          required=""
        />
        <input
          class="my-input"
          aria-label="Ваш номер телефона"
          type="tel"
          name="phone"
          autocomplete="off"
          placeholder="+7 (___)-___-__-__"
          required=""
        />
      </div>

      <button @click="openModalSuccessManager" type="submit" class="button">
        Заказать
      </button>

      <p class="decr">
        Мы свяжемся с Вами в течение 10 минут и проконсультируем по любым
        вопросам
      </p>
      <form-helicon />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormHelicon from "./FormHelicon.vue";

export default {
  components: { FormHelicon },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapMutations(["openModalSuccessManager"]),
  },
};
</script>

<style lang="scss">
#modal-call {
  border-radius: 10px;
  background: #fff;
  max-width: 490px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 30px 20px 20px !important;
    max-width: 300px;
    width: 100%;
  }

  .is-close {
    width: 100px;

    &::before {
      content: "Закрыть";
      color: #fff;
      font-family: "Inter";
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    svg {
      display: none;
    }
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Gilroy";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: 121.875%;

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .form-call__inputs {
    max-width: 358px;
    width: 100%;
    margin: 30px auto;

    input:first-child {
      margin-bottom: 20px;
    }

    @media (max-width: 576px) {
      margin: 25px auto;

      input:first-child {
        margin-bottom: 10px;
      }
    }
  }

  .button {
    margin: 0px auto;
  }

  .decr {
    margin: 10px auto 0;
    color: #323232;
    text-align: center;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 300;
    max-width: 425px;
    width: 100%;

    font-size: 18px;
    line-height: 24px;
    line-height: 25px; /* 138.889% */

    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>