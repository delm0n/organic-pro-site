<template>
  <section id="gallery">
    <div class="container">
      <div class="title">
        <h2>Когда каждый ракурс — выгодный</h2>
        <p class="subtitle">
          Познакомьтесь с Organic 3 PRO в мельчайших деталях
        </p>
      </div>

      <div class="gallery-toggle">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          :class="['toggle-item ', item.active ? 'toggle-item--active' : '']"
          v-html="item.title"
          @click="setActive(index)"
        ></div>
      </div>

      <div class="gallery-tab" v-for="(item, index) in gallery" :key="index">
        <gallery-item
          v-show="item.active"
          :index="index"
          :load="item.load"
          :video="item.video"
          :photoList="item.photoList"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  components: { GalleryItem },
  data() {
    return {
      gallery: [
        {
          active: true,
          title: "Pot-still",
          load: false,
          photoList: [
            {
              href: "photo-1-1__modal",
              src: "photo-1-1",
              asprat: "1/1",
            },

            {
              href: "photo-1-2__modal",
              src: "photo-1-2",
              asprat: "1/1",
            },

            {
              href: "photo-1-3__modal",
              src: "photo-1-3",
              asprat: "1/1",
            },

            {
              href: "photo-1-4__modal",
              src: "photo-1-4",
              asprat: "439/205",
            },

            {
              href: "photo-1-5__modal",
              src: "photo-1-5",
              asprat: "1/1",
            },
          ],
          video: "photo-video",
        },
        {
          active: false,
          title: "Дистилляция",
          photoList: [
            {
              href: "photo-2-1__modal",
              src: "photo-2-1",
              asprat: "1/1",
            },
            {
              href: "photo-2-3__modal",
              src: "photo-2-3",
              asprat: "1/1",
            },
            {
              href: "photo-2-2__modal",
              src: "photo-2-2",
              asprat: "1/1",
            },

            {
              href: "photo-2-4__modal",
              src: "photo-2-4",
              asprat: "439/205",
            },

            {
              href: "photo-2-5__modal",
              src: "photo-2-5",
              asprat: "1/1",
            },
          ],
          load: false,
          video: "structure-3",
        },
        {
          active: false,
          title: "Ректификация",
          photoList: [
            {
              href: "photo-3-1__modal",
              src: "photo-3-1",
              asprat: "1/1",
            },
            {
              href: "photo-3-5__modal",
              src: "photo-3-5",
              asprat: "1/1",
            },

            {
              href: "photo-3-3__modal",
              src: "photo-3-3",
              asprat: "1/1",
            },

            {
              href: "photo-3-4__modal",
              src: "photo-3-4",
              asprat: "439/205",
            },

            {
              href: "photo-3-2__modal",
              src: "photo-3-2",
              asprat: "1/1",
            },
          ],
          load: false,
          video: "structure-1",
        },
      ],
    };
  },

  mounted() {
    if (!this.gallery[0].load) {
      this.gsap.timeline({
        delay: 4,
        scrollTrigger: {
          once: true,
          trigger: "#photo",
          start: "-60% bottom",
          onEnter: this.loadLazy,
          onEnterBack: this.loadLazy,
        },
      });
    }
  },
  methods: {
    loadLazy() {
      this.playVideo(0);
      this.gallery[0].load = true;
    },

    playVideo(index) {
      let video = document
        .querySelectorAll("#gallery .gallery-tab")
        [index].querySelector(".photo-video video");

      let source = video.querySelector("source");
      source.src = source.dataset.lazy;
      video.load();
      video.classList.add("video-lazy--loaded");

      video.play();
    },

    setActive(i) {
      if (this.gallery.findIndex((el) => el.active) != i) {
        this.gallery.forEach((element, index) => {
          if (index == i) {
            element.active = true;
            element.load = true;

            index != 0 ? this.playVideo(index) : "";
          } else {
            element.active = false;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#gallery {
  @extend %padd;
  overflow: hidden;

  picture {
    display: flex;
    justify-content: center;
  }

  .gallery-toggle {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 10px;
      max-width: 420px;
      margin: 0 auto;
    }

    .toggle-item {
      width: 100%;
      border-bottom: 1px solid #646464;
      padding-bottom: 10px;
      text-align: center;
      color: #646464;
      cursor: pointer;

      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;

      &--active {
        font-weight: 600;
        color: #c8ac6c;
        border-bottom: 2px solid #c8ac6c;
      }
    }
  }
}
</style>