<template>
  <section id="structure">
    <div class="container">
      <div class="title">
        <h2>
          с <span> Organic 3 PRO:</span> берите от самогонного аппарата максимум
        </h2>
        <p class="subtitle">
          Профессиональная колонна с производственными «фишками» для
          максимального результата
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
          title: "Стеклянная царга с 8-ступенчатой колпачковой вставкой",
          decr: "Позвольте себе <span>наблюдать за процессом перегонки</span> от начала до конца. Это не только красиво, но и технически-важно.",
          list: [
            {
              title: "Стеклянная царга",
              text: `Иногда показателей приборов недостаточно. Контролируйте ситуацию визуально с помощью царги из прочного боросиликатного стекла. Так вы гарантированно не пропустите захлёб или брызгоунос.
                <br><br>
                Материал с лёгкостью переносит нагрев до 180 °C. Он не боится перепадов температур и не разобъётся при случайном падении.`,
            },

            {
              title: "Колпачковая вставка на 8 тарелочек",
              text: "Профессиональная система очистки предполагает колпачковую вставку на 8 уровней. Каждый «этаж» такой конструкции удерживает тяжелые частицы спиртовых паров, не давая им подняться выше. Это обеспечивает непревзойденную чистоту продукта уже с первой перегонки. Колонна с колпачковой вставкой работает на 38% эффективнее пленочного дефлегматора схожего диаметра.",
            },
          ],
          imgList: [
            "structure-1-1",
            "structure-1-2",
            "structure-1-3",
            "structure-1-4",
          ],
        },

        {
          title: "Холодильник Димрота",
          decr: "Охладитель Димрота устроен таким образом, чтобы штуцеры для подвода и отвода воды располагались на боковой части царги. В результате оба фланца остаются открытыми. Это позволяет <span> использовать устройство в качестве как дефлегматора, так и проходного холодильника </span> в режиме Pot Still. КПД такого охладителя на …% выше других конструкций. Он состоит из:",
          list: [
            {
              title: "Змеевика (2100 мм)",
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
          imgList: ["structure-2-1", "structure-2-2", "structure-2-3"],
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