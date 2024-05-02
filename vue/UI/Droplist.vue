<template>
  <div class="dropdown" @click="bool = !bool">
    <div :class="'dropdown-hero ' + (bool ? 'dropdown-hero--open' : '')">
      <p>{{ array.find((el) => el.selected).name }}</p>
      <svg
        :style="bool ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
      >
        <path
          d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
          fill="#323232"
        />
      </svg>
    </div>

    <transition
      name="drop"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <ul v-show="bool" class="dropdown-list">
        <li
          @click="$emit('action-droplist', item.id)"
          v-for="(item, index) in array.filter((el) => !el.selected)"
          :key="index"
          :class="
            'dropdown-item ' + (item.selected ? 'dropdown-item--active' : '')
          "
          v-text="item.name"
        ></li></ul
    ></transition>
  </div>
</template>

<script>
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  data() {
    return {
      bool: false,
    };
  },
  props: {
    array: Object,
  },
};
</script>

<style lang="scss">
.drop-enter-active,
.drop-leave-active {
  overflow: hidden;
}

.drop-enter,
.drop-leave-to {
  height: 0;
}

.dropdown {
  width: 100%;
  cursor: pointer;
  font-family: "Inter";
  font-size: 18px;
  line-height: 22px;
  position: relative;
  color: #323232;

  svg {
    transition: all 0.4s;
  }

  .dropdown-hero {
    p {
      color: #323232;
      white-space: nowrap;

      font-family: "Lato";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 23px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    }

    border: 1px solid #8b8b8b;
    border-radius: 10px;
    padding: 19px 22px;

    align-items: center;
    background: #fff;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    user-select: none;

    @media (max-width: 768px) {
      border-radius: 5px;
      padding: 12px 10px;
    }

    &--open {
      // border-bottom: none;
      // border-radius: 10px 10px 0 0;
      background: hsla(0, 0%, 92%, 0.3);

      // @media (max-width: 768px) {
      //   border-radius: 5px 5px 0 0;
      // }
    }
  }

  .dropdown-list {
    // border: 2px solid #323232;
    border-radius: 0 0 5px 5px;
    border-top: none !important;
    will-change: height;
    // background: #fff;
    left: 0px;
    overflow: hidden;
    position: absolute;
    // top: calc(100% - 2px);
    transition: height 0.2s ease;
    width: 100%;
    z-index: 5;
    padding: 5px 0;

    background: #fbfbfb;
    box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

    @media (max-width: 768px) {
      padding: 3px 0;
    }

    li {
      color: #9f9f9f;
      font-family: "Lato";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 23px; /* 143.75% */

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }

  .dropdown-item {
    color: #323232;
    padding: 5px 20px;

    transition: color 0.3s ease;
    user-select: none;
    transition: all 0.4s;
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;

    @media (max-width: 768px) {
      padding: 3px 10px;
    }

    &:hover {
      opacity: 0.7;
    }

    &--active {
      position: relative;

      &:before {
        background: #323232;
        border-radius: 3px;
        content: "";
        display: block;
        height: 60%;
        left: 7px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
      }
    }
  }
}
</style>