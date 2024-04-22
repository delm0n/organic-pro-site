<template>
  <div id="order-decision">
    <p class="text">
      Готовые решения под любые задачи. Мы точно знаем, что подойдёт именно вам!
    </p>

    <collapse :when="collapse">
      <order-decision-item
        :item="getComplect1"
        :complectField="'complect1'"
        :title="'Набор “Такой-то”'"
        :decr="'Для чего в целом, под какие задачи'"
      />

      <order-decision-item
        :item="getComplect2"
        :complectField="'complect2'"
        :title="'Набор “Такой-то2”'"
        :decr="'Для чего в целом, под какие задачи2'"
      />
    </collapse>

    <p @click="collapse = !collapse" class="text-btn hyperlink">
      {{ collapse ? "Скрыть" : "Показать" }}
    </p>
  </div>
</template>

<script>
import { Collapse } from "vue-collapsed";

import { mapGetters, mapMutations } from "vuex";
import OrderDecisionItem from "./OrderDecisionItem.vue";

export default {
  data() {
    return {
      collapse: false,
    };
  },
  computed: mapGetters(["getComplect1", "getComplect2"]),

  components: { Collapse, OrderDecisionItem },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#order-decision {
  padding: 50px 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);

  .text {
    color: #646464;
    text-align: center;
    font-family: "Gilroy";
    font-size: 27px;
    font-style: normal;
    font-weight: 500;
    line-height: 125.926%;
    margin-bottom: 30px;

    @include fluidFontSize(22, 27, 993, 1920);
  }

  .text-btn {
    color: #565656;
    text-align: center;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    cursor: pointer;
    font-weight: 400;
    line-height: 25px; /* 138.889% */
    text-decoration-line: underline;
  }
}
</style>