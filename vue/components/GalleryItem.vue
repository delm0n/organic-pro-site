<template>
  <div class="photo-wrapper">
    <div v-if="!getMobile" class="photo-grid">
      <a
        v-for="(photo, idx) in photoList"
        :key="idx"
        class="photo-grid__item"
        :href="
          'build/images/photo/' +
          photo.href +
          (getWebp === 'webp' ? '.webp' : '.png')
        "
        :data-fancybox="'gallery-' + index"
      >
        <picture>
          <source
            :srcset="load ? 'build/images/photo/' + photo.src + '.webp' : ''"
            type="image/webp"
          />
          <img
            :style="'aspect-ratio: ' + photo.asprat"
            :src="load ? 'build/images/photo/' + photo.src + '.png' : ''"
            alt="Фото гриндера"
          />
        </picture>
      </a>
    </div>

    <div v-if="getMobile" :class="'photo-slider photo-slider-' + index">
      <div class="swiper-wrapper">
        <div v-for="(slide, idx) in photoList" :key="idx" class="swiper-slide">
          <a
            :href="
              'build/images/photo/' +
              slide.href +
              (getWebp === 'webp' ? '.webp' : '.png')
            "
            :data-fancybox="'gallery-' + index"
            class="photo-wrapper__img"
          >
            <picture>
              <source
                :srcset="'build/images/photo/' + slide.src + '@05x.webp'"
                type="image/webp"
              />
              <img
                :src="'build/images/photo/' + slide.src + '@05x.png'"
                alt="Фото гриндера"
              />
            </picture>
          </a>
        </div>
      </div>
      <div
        :class="'photo-slider-pagination photo-slider-pagination-' + index"
      ></div>
    </div>

    <div class="photo-video">
      <video
        preload="none"
        loop
        :poster="'build/images/photo/video.' + getWebp"
        muted
        class="video-lazy"
      >
        <source
          :data-lazy="'uploadupdate/video/' + video + '.mp4'"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Swiper, Pagination } from "swiper";

export default {
  computed: mapGetters(["getWebp", "getMobile"]),

  props: {
    photoList: Object,
    video: String,
    load: Boolean,
    index: Number,
  },

  mounted() {
    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".photo-slider-" + this.index, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".photo-slider-pagination-" + this.index,
          type: "bullets",
          clickable: true,
        },
        modules: [Pagination],
      });
    };

    const photoSwiperbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (!photoSwiperbreakpoint.matches) {
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
};
</script>

<style lang="scss">
.photo-wrapper {
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  animation: showElement 1s;

  @media (max-width: 1199px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 391px;
    margin: 20px auto 0;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: 453fr 212fr;
    gap: 30px;

    @media (max-width: 1199px) {
      gap: 20px;
    }

    &__item {
      display: block;
      border-radius: 10px;
      background: #f5f5f5;
      overflow: hidden;
      width: 100%;
      cursor: zoom-in;

      &:hover {
        img {
          transform: scale(1.05);
        }
      }

      &:nth-child(1) {
        grid-column: 1/2;
        grid-row: 1/3;
      }

      &:nth-child(4) {
        grid-column: 1/2;
        grid-row: 3/4;
      }
    }

    img {
      transition: transform 0.4s;
      transform: scale(1);
      width: 100%;
    }
  }

  .photo-video {
    border-radius: 10px;
    border: 2px solid #b9b9b9;
    background: white;
    overflow: hidden;
    video {
      max-width: 100%;
      aspect-ratio: 1/1;
      height: 100%;
    }
  }

  .photo-slider {
    overflow: hidden;
    @media (max-width: 768px) {
      padding-bottom: 20px;
    }

    &-pagination {
      @media (min-width: 769px) {
        display: none;
      }
      margin: 0;
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
        border: 1px solid #323232;
        background: #fff;
        border-radius: 100%;
        margin: 0;
        opacity: 1;

        &-active {
          background: #323232;
        }
      }
    }
  }

  img {
    max-width: 100%;

    &[src=""] {
      opacity: 0;
    }
  }
}
</style>