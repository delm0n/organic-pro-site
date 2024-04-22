<template>
  <div class="tabs-container">
    <div class="tabs-wrapper">
      <!-- тип "Все" -->
      <div
        v-if="!width1136"
        :class="[
          'tab-item',
          tabs[0].type == active ? 'tab-item--active' : '',
          'tab-item--' + tabs[0].type,
        ]"
        @click="tabs[0].type != active ? change(tabs[0].type) : ''"
      >
        <p>{{ tabs[0].value }}</p>
      </div>
      <!-- тип "Все" -->

      <div
        v-for="(tab, index) in tabs.slice(1)"
        :key="index"
        :class="[
          'tab-item',
          tab.type == active ? 'tab-item--active' : '',
          'tab-item--' + tab.type,
        ]"
        @click="tab.type != active ? change(tab.type) : ''"
      >
        <p>{{ tab.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { DOPTYPES } from "../../js/dop-types";

export default {
  data() {
    return {
      width1136: window.innerWidth < 1137,
    };
  },
  props: {
    tabs: {
      type: Array,
    },
    active: {
      type: String,
    },
  },
  methods: {
    change(type) {
      this.$emit("change-active", type);
    },
  },

  mounted() {
    // брейкпоинт на 1136px
    const tab_breakpoint = window.matchMedia("(max-width: 1136px)");
    const breakpointChecker = () => {
      if (tab_breakpoint.matches) {
        this.width1136 = true;
        this.change(DOPTYPES.access);
      } else {
        this.width1136 = false;
        this.change(DOPTYPES.all);
      }
    };
    tab_breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.tabs-container {
  width: 100%;

  .tabs-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 992px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      max-width: 420px;
      width: 100%;
      flex-direction: column;
      gap: 10px;
      margin: 0 auto;
    }
  }

  .tab-item {
    padding: 10px 30px;
    cursor: pointer;
    position: relative;
    border-radius: 30px;
    border: 2px solid #c8ac6c;

    transition: all 0.3s;

    @media (max-width: 992px) {
      padding: 10px 15px;
    }

    p {
      color: #c8ac6c;
      text-align: center;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      transition: all 0.2s;
      white-space: nowrap;

      @media (max-width: 992px) {
        font-size: 16px;
      }
    }

    &--active {
      background: #c8ac6c;
      p {
        color: #fff;
      }
    }

    &:hover {
      background: #c8ac6c;
      p {
        color: #fff;
      }
    }
  }
}
</style>