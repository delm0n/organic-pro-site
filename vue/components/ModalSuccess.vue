<template>
  <div id="order-success" style="display: none">
    <h3>
      {{ getModalSuccess[0] }}
    </h3>

    <p class="decr" v-html="getModalSuccess[1]"></p>

    <form method="post" action="sendEmail.php">
      <div class="input-block">
        <label for="phone" class="order-success__label">
          <input class="my-input" type="text" name="phone" />
        </label>
      </div>
      <span></span>

      <input type="hidden" name="order" data-order="-1" value="" />
      <button type="submit" class="button">Подтвердить</button>
      <div v-html="getMetric"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getModalSuccess", "getMetric", "getUser"]),
};
</script>

<style lang="scss">
#order-success {
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

  .input-block {
    max-width: 358px;
    width: 100%;
    margin: 30px auto;

    .my-input {
      background: #fff;
      border-radius: 5px;
      border: 2px solid #c8ac6c;
      color: #c8ac6c;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  h3 {
    // color: #323232;
    // text-align: center;
    // font-family: "Roboto";
    // font-size: 32px;
    // font-style: normal;
    // font-weight: 700;
    // line-height: 39px; /* 121.875% */
    margin-bottom: 20px;

    color: #323232;
    text-align: center;
    font-family: "Gilroy";
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px; /* 125.926% */

    @media (max-width: 576px) {
      margin-top: 10px;
      font-size: 22px;
      line-height: 29px; /* 131.818% */
    }
  }

  .decr {
    // color: #323232;
    // text-align: center;
    // font-family: "Roboto";
    // font-size: 22px;
    // font-style: normal;
    // font-weight: 300;
    // line-height: 29px; /* 131.818% */
    // max-width: 570px;
    // width: 100%;
    // margin: 0 auto;

    color: #323232;
    text-align: center;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 138.889% */

    @media (max-width: 576px) {
      font-size: 16px;
      line-height: 21px; /* 138.889% */
    }
  }

  .button {
    margin: 30px auto 0;
  }
}
</style>