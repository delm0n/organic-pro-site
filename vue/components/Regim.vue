<template>
  <section id="regim">
    <div class="container">
      <div class="title">
        <h2>
          Все 3 режима работы — сразу <br />
          в базовой комплектации!
        </h2>
      </div>
      <div class="regim-wrapper">
        <regim-item
          @regim-click="regimClick"
          v-for="(item, index) in regims"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>
    </div>

    <div id="regim-modal">
      <div class="modal-wrapper">
        <my-image
          class="modal-wrapper__img"
          :alt="''"
          :floder="'regim'"
          :imgName="modal.img"
          :mobile="false"
        />

        <p class="modal-wrapper__title" v-html="modal.title"></p>
        <p class="modal-wrapper__text" v-html="modal.text"></p>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";
import RegimItem from "./RegimItem.vue";

export default {
  components: { MyImage, RegimItem },
  computed: mapGetters(["getMobile"]),
  methods: {
    regimClick(index) {
      if (this.getMobile) {
        this.regims[index].mobileShow = !this.regims[index].mobileShow;
      } else {
        this.modal.img = this.regims[index].imgModal;
        this.modal.title = this.regims[index].title;
        this.modal.text = this.regims[index].modal;

        setTimeout(() => {
          Fancybox.show([
            {
              src: "#regim-modal",
            },
          ]);
        }, 200);
      }
    },
  },
  data() {
    return {
      regims: [
        {
          img: "regim-1",
          title: "Pot Still",
          decr: "Режим, максимально эффективный для быстрого получения <span>спирта-сырца</span> из браги.",
          imgModal: "regim-1__modal",
          speed: "XX",
          volume: "XX",
          expens_water: "XX",
          expens_el: "XX",

          gradus: "40°",
          litr: "2 л/ч",

          modal: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. 
          С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем,
           некоторые винокуры ставят царгу просто из интереса или для красоты.`,
          mobileShow: false,
        },

        {
          img: "regim-2",
          title: "Дистилляция",
          decr: "Создание <span>полугара и самогона</span>, на основе которого получаются ароматные напитки: виски, бренди, джин, абсент и многое другое.",
          imgModal: "regim-2__modal",
          speed: "XX",
          volume: "XX",
          expens_water: "XX",
          expens_el: "XX",

          gradus: "40°",
          litr: "2 л/ч",

          modal: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. 
          С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). 
          Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
          mobileShow: false,
        },

        {
          img: "regim-3",
          title: "Ректификация",
          decr: "Разделение спиртовых паров на фракции путём многократного испарения и конденсации с возможностью получения<span> чистого спирта</span>.",
          imgModal: "regim-3__modal",
          speed: "XX",
          volume: "XX",
          expens_water: "XX",
          expens_el: "XX",

          gradus: "40°",
          litr: "2 л/ч",

          modal: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. 
          С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). 
          Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
          mobileShow: false,
        },
      ],
      modal: {
        img: "",
        title: "",
        text: "",
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#regim {
  @extend %padd;

  .regim-wrapper {
    display: flex;
    gap: 30px;
    align-items: stretch;

    @media (max-width: 1145px) {
      gap: 20px;
    }

    @media (max-width: 1136px) {
      flex-direction: column;
      gap: 50px;
    }
    @media (max-width: 992px) {
      gap: 40px;
    }
    @media (max-width: 576px) {
      gap: 30px;
    }
  }
}

#regim-modal {
  @extend %modal;
}
</style>