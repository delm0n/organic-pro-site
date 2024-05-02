<template>
  <div :class="'dop-slider dop-slider-' + index">
    <div class="swiper-wrapper">
      <dop-item
        v-for="(dop, index) in getDops.filter((el) => el.type == tab.type)"
        @open-modal="openModal"
        :key="index"
        :dop="dop"
        class="swiper-slide"
      />
    </div>
    <div :class="'dop-slider-pagination dop-slider-pagination-' + index"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DopItem from "../components/DopItem.vue";
import { Swiper, Pagination } from "swiper";
export default {
  props: {
    index: Number,
    tab: Object,
  },
  components: { DopItem },
  methods: {
    openModal(item) {
      this.$emit("open-modal", item);
    },
  },
  mounted() {
    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".dop-slider-" + this.index, {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,

        loop: false,
        pagination: {
          el: ".dop-slider-pagination-" + this.index,
          type: "bullets",
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },

          480: {
            slidesPerView: "auto",
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },
        },

        modules: [Pagination],
      });
    };

    const photoSwiperbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (!photoSwiperbreakpoint.matches) {
        console.log(1);
        setTimeout(() => {
          return photoSwiper();
        }, 20);
      } else {
        if (myPhotoSwiper) {
          return myPhotoSwiper.destroy(true, true);
        }
      }
    };

    photoSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  computed: {
    ...mapGetters(["getDops"]),
  },
};
</script>

<style lang="scss">
.dop-slider {
  animation: showElement 1s;

  &-pagination {
    @media (min-width: 769px) {
      display: none;
    }
    margin: 10px 0 0 !important;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

    @media (max-width: 576px) {
      gap: 5px;
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      @media (max-width: 576px) {
        width: 7px;
        height: 7px;
      }
      border: 1px solid #c8ac6c;
      background: #fff;
      border-radius: 100%;
      margin: 0 !important;
      opacity: 1;

      &-active {
        background: #c8ac6c;
      }
    }
  }
}
</style>