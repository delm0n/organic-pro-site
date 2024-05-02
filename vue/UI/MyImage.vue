<template>
  <div class="img-wrap" v-if="mobile && lazyLoad">
    <picture>
      <source
        :data-srcset="sorce + '.webp'"
        :media="`(min-width: ${media}px)`"
        type="image/webp"
      />
      <source
        :data-srcset="sorce + format"
        :media="`(min-width: ${media}px)`"
      />
      <source :data-srcset="sorce + '@05x' + '.webp'" type="image/webp" />
      <img class="lazy" :data-src="sorce + '@05x' + format" :alt="alt" />
    </picture>
  </div>
  <div class="img-wrap" v-else-if="!mobile && lazyLoad">
    <picture>
      <source :data-srcset="sorce + '.webp'" type="image/webp" />
      <img class="lazy" :data-src="sorce + format" :alt="alt" />
    </picture>
  </div>
  <div class="img-wrap" v-else-if="mobile && !lazyLoad">
    <picture>
      <source
        :srcset="sorce + '.webp'"
        :media="`(min-width: ${media}px)`"
        type="image/webp"
      />
      <source :srcset="sorce + format" :media="`(min-width: ${media}px)`" />
      <source :srcset="sorce + '@05x' + '.webp'" type="image/webp" />
      <img :src="sorce + '@05x' + format" :alt="alt" />
    </picture>
  </div>
  <div class="img-wrap" v-else-if="!mobile && !lazyLoad">
    <picture>
      <source :srcset="sorce + '.webp'" type="image/webp" />
      <img :src="sorce + format" :alt="alt" />
    </picture>
  </div>
</template>
<script>
export default {
  name: "MyImg",
  props: {
    // sorce: String,

    floder: String,
    imgName: String,

    format: {
      type: String,
      default: ".png",
    },
    media: {
      type: [String, Number],
      default: 576,
    },
    mobile: {
      type: Boolean,
      default: true,
    },
    lazyLoad: {
      type: Boolean,
      default: true,
    },
    alt: {
      type: String,
      default: "Изображение",
    },
  },
  computed: {
    sorce() {
      return "/build/images/" + this.floder + "/" + this.imgName;
    },
  },
};
</script>

