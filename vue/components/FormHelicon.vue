<template>
  <div>
    <div v-html="getMetric"></div>

    <template v-if="rassr">
      <input
        type="hidden"
        class="comment"
        name="comment"
        :value="getUserRassrochka ? 'Покупка в рассрочку.' : ''"
      />
    </template>

    <template v-if="main">
      <template v-if="dops">
        <div :key="index" v-for="(dop, index) in getDops">
          <input
            type="hidden"
            :name="'quantity[' + dop.id + ']'"
            :value="dop.selected ? dop.count + 1 : 0"
          /><input type="hidden" name="id[]" :value="dop.id" />
        </div>
      </template>

      <template v-if="modules">
        <div :key="index" v-for="(moduleItem, index) in getModules">
          <input
            type="hidden"
            :name="'quantity[' + moduleItem.id + ']'"
            :value="moduleItem.selected ? moduleItem.count + 1 : 0"
          /><input type="hidden" name="id[]" :value="moduleItem.id" />
        </div>
      </template>

      <input type="hidden" name="id[]" :value="getMainItem.id" />
      <input
        type="hidden"
        :name="'quantity[' + getMainItem.id + ']'"
        :value="getMainItem.count + 1"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "getUserRassrochka",
    "getMetric",
    "getMainId",
    "getDops",

    "getMainItem",
    "getModules",
  ]),
  props: {
    dops: {
      type: Boolean,
      default: true,
    },

    modules: {
      type: Boolean,
      default: true,
    },
    rassr: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
};
</script>