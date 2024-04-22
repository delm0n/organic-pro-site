<template>
  <section id="structure">
    <div class="container">
      <div class="title">
        <h2>
          Берите от 2-ой перегонки максимум <br />
          с <span> Organic 3 PRO</span>
        </h2>
        <p class="subtitle">
          Колонна аппарата собрала в себе все инструменты для достижения
          наилучшего результата
        </p>
      </div>
      <div class="structure-wrapper">
        <structure-item
          @show-modal="showModal"
          v-for="(item, index) in structureList"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>
    </div>

    <div id="structure-modal">
      <div class="structure-item structure-modal">
        <div class="structure-modal__img">
          <my-image
            v-for="(img, i) in structureModal.imgList"
            :key="i"
            :alt="'#'"
            :floder="'structure'"
            :imgName="img"
            :mobile="false"
          />
        </div>
        <div class="structure-item__content structure-modal__content">
          <h3 v-html="structureModal.title"></h3>
          <p class="decr" v-html="structureModal.decr"></p>
          <ul>
            <li v-for="(li, i) in structureModal.list" :key="i">
              <b v-html="li.title"></b>
              <span v-html="li.text"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StructureItem from "./StructureItem.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    StructureItem,
    MyImage,
  },
  data() {
    return {
      structureList: [
        {
          title: "Стеклянная царга с&nbsp;колпачковой&nbsp;вставкой",
          decr: "Какую роль в процессе играет? Что из себя представляет, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как). Принцип работы.",
          list: [
            {
              title: "Колпачковая вставка с 8 тарелочками",
              text: "Что из себя представляют, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как). Принцип работы.",
            },

            {
              title: "Прочное боросиликатное стекло (нагрев до 180 °C)",
              text: "Для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как).",
            },
          ],
          imgList: ["structure-1-1", "structure-1-2", "structure-1-3", "test"],
        },

        {
          title: "Холодильник Димрота",
          decr: "Какую роль в процессе играет? Что из себя представляет, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов – в т.ч. и с обычным холодильником (можно ли это как-то доказать, если да, то как). Принцип работы.",
          list: [
            {
              title: "Змеевик 2100 мм",
              text: "Что из себя представляют, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как). Принцип работы.",
            },

            {
              title: "Штуцеры для подвода/отвода воды",
              text: "Для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как).",
            },

            {
              title: "Насадка для дистилляции",
              text: "Для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как).",
            },
          ],
          imgList: ["structure-2-1", "test", "test"],
        },

        {
          title: "Узел отбора по жидкости",
          decr: "Какую роль в процессе играет? Что из себя представляет, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов – в т.ч. и с обычным холодильником (можно ли это как-то доказать, если да, то как). Принцип работы.",
          list: [
            {
              title: "Доохладитель",
              text: "Что из себя представляет, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как). Принцип работы.",
            },

            {
              title: "Боковой отвод с краном",
              text: "Что из себя представляет, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как). Принцип работы.",
            },

            {
              title: "Стаканчик",
              text: "Что из себя представляет, для чего это сделано и в чем преимущество над альтернативными предложениями конкурентов (можно ли это как-то доказать, если да, то как). Принцип работы.",
            },
          ],
          imgList: ["structure-3-1", "test", "structure-3-2"],
        },
      ],
      structureModal: {
        title: "",
        decr: "",
        list: [
          {
            title: "",
            text: "",
          },
        ],
        imgList: [],
      },
    };
  },
  methods: {
    showModal(item) {
      this.structureModal.title = item.title;
      this.structureModal.decr = item.decr;
      this.structureModal.list = item.list;
      this.structureModal.imgList = item.imgList;

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#structure-modal",
          },
        ]);
      }, 100);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#structure {
  @extend %padd;
  background: #f5f5f5;
  overflow: hidden;

  .structure-wrapper {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

#structure-modal {
  @extend %modal;
  .structure-modal {
    display: grid;
    grid-template-columns: 1.1fr 1.05fr;
    gap: 0 30px;
    align-items: center;
    color: #323232;
    font-family: "Gilroy";
    font-style: normal;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &__img {
      .img-wrap {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    &__content {
      max-width: 100%;

      h3 {
        border: none;
      }

      .decr,
      ul,
      span {
        display: flex;
      }
    }
  }
}
</style>