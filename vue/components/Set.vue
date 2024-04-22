<template>
  <section id="set" :class="getWebp">
    <div class="container">
      <set-item :img="'aroma'">
        <template v-slot:title>
          <div class="title-before">
            <p>Подарок при покупке</p>
          </div>

          <h2>набор «АРОМА+»</h2>
          <p class="title-subtitle">
            в подарок при заказе с {{ getToday }} по
            {{ tomorrowWithoutZeroPlus3 }} {{ getMonth }} для получения
            ароматных&nbsp;дистиллятов
          </p>

          <clock class="set-clock" :targetDate="tomorrowPlus3__fulldate" />
        </template>

        <template v-slot:text>
          <collapse :when="getMobile ? aroma : true">
            <div class="num-list">
              <div
                class="num-list__item"
                v-for="(item, index) in numList"
                :key="index"
              >
                <b>{{ index + 1 }}</b>
                <p v-html="item"></p>
              </div>
            </div>
          </collapse>

          <p v-if="getMobile" @click="aroma = !aroma" class="show-more__button">
            {{ aroma ? "Скрыть" : "Что входит в комплект?" }}
          </p>
        </template>

        <template v-slot:offer>
          <div class="price">
            <div class="new">0 РУБ.</div>
            <div class="old">5 880 РУБ.</div>
          </div>

          <div class="button-container">
            <button @click="toOrder()" class="button">Получить подарок</button>
          </div>
        </template>
      </set-item>

      <set-item :img="'kurs'">
        <template v-slot:title>
          <div class="title-before">
            <p>Спецпредложение</p>
          </div>
          <h2>КУРС САМОГОНОВАРЕНИЯ</h2>
          <p class="title-subtitle">
            бесплатно при покупке самогонного аппарата Organic 3 PRO и подписке
            на&nbsp;рассылку
          </p>
        </template>

        <template v-slot:text>
          <collapse :when="getMobile ? kurs : true">
            <p class="decr">
              Курс создан при участии опытных самогонщиков, в том числе —
              популярных блогеров. Их лайфхаки, советы и практики будут
              интересны как новичку, так и опытному винокуру.
            </p>

            <ul class="check-list">
              <li>Удобный формат: видеоуроки + текстовые файлы</li>
              <li>Создан профессионалами </li>
              <li>Понятно и просто, теория и практика</li>
            </ul>
          </collapse>

          <p v-if="getMobile" @click="kurs = !kurs" class="show-more__button">
            {{ kurs ? "Скрыть" : "Описание" }}
          </p>
        </template>

        <template v-slot:offer>
          <div class="price">
            <div class="new">{{ getKurs.price.toLocaleString() }} РУБ.</div>
            <div class="old">{{ getKurs.oldPrice.toLocaleString() }} РУБ.</div>
          </div>

          <div class="button-container">
            <button @click="toOrder()" class="button">
              Получить за 0 РУБ.
            </button>
            <button @click="openModalKurs()" class="button button-gray">
              Купить отдельно
            </button>
          </div>
        </template>
      </set-item>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Collapse } from "vue-collapsed";
import SetItem from "../components/SetItem.vue";
import Clock from "../UI/Timer.vue";

export default {
  components: { SetItem, Collapse, Clock },
  computed: mapGetters([
    "getWebp",
    "getMobile",
    "tomorrowWithoutZeroPlus3",
    "getToday",
    "tomorrowPlus3__fulldate",
    "getMonth",
    "getKurs",
  ]),
  data() {
    return {
      tomorrow: 0,
      aroma: false,
      kurs: false,
      numList: [
        "Гидрозатвор",
        "Медная РПН",
        "Книга рецептов",
        "Переходник на кран",
        "Спиртометр",
        "Купон на 1000 рублей",
        "Набор трав и специй",
        "Чешуйчатые тарелочки",
      ],
    };
  },
  methods: {
    openModalKurs() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-kurs",
          },
        ]);
      }, 10);
    },

    toOrder() {
      this.gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: "#order" },
      });
    },
  },

  mounted() {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
#set {
  overflow: hidden;
  padding: 100px 20px;

  .container {
    padding: 0;
  }

  .set-clock {
    margin-top: 20px;

    @media (max-width: 1199px) {
      width: max-content;
      margin: 20px auto;
    }

    @media (max-width: 576px) {
      margin: 10px auto 0;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @mixin bg($format) {
    background: url(../images/set/set-bg-left.webp) no-repeat,
      url(../images/set/set-bg-right.webp) no-repeat #c8ac6c;
    background-position: left top, right bottom, center;
    background-size: 38%, 51%, 100%;

    @media (max-width: 1199px) {
      background-size: 52%, 68%, 100%;
    }

    @media (max-width: 768px) {
      background-position: left -50px top -50px, right bottom, center;
      background-size: 123%, 120%, 100%;
    }
  }

  &.png {
    @include bg("png");
  }

  &.webp {
    @include bg("webp");
  }
}
</style>