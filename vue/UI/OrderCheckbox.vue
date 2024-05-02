<template>
  <label
    :class="[
      'cart-checkbox',
      item.orderSelected ? ' cart-checkbox--active' : '',
    ]"
  >
    <input type="checkbox" v-model="item.orderSelected" />
    <div class="box"></div>
  </label>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
.cart-checkbox {
  position: relative;

  .box {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 3px solid #646464;

    @keyframes box {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    &:before {
      border-radius: 2px;
      width: 18px;
      height: 18px;
      transform-origin: center;
      content: "";
      display: block;
    }
  }

  input {
    opacity: 0;
    pointer-events: none;
    position: absolute;

    &:checked + .box {
      border: 3px solid #2aa000;

      &:before {
        background: #2aa000;
        animation: box 0.3s;
      }
    }
  }
}
</style>