<template>
  <section id="description">
    <div class="container">
      <div class="title">
        <h2>Самогонный аппарат, который вписывается!</h2>
      </div>
      <div class="description-wrapper">
        <div class="structure-wrapper__img">
          <my-image
            :alt="'#'"
            :floder="'structure'"
            :imgName="'test'"
            :mobile="false"
          />
        </div>
        <div class="description-wrapper__content">
          <p class="decr">
            Organic 3 Pro подчеркнёт как строгий характер мужчины, так и женскую
            любовь к красоте. Идеальный баланс стекла со сталью станет
            прекрасным украшением вашей кухни и впечатлит любого гостя.
          </p>

          <collapse :when="getMobile ? mobileShow : true">
            <ul>
              <li v-for="(li, i) in list" :key="i">
                <b v-html="li.title"></b>
                <span v-html="li.text"></span>
              </li>
            </ul>
          </collapse>

          <p
            v-if="getMobile"
            @click="mobileShow = !mobileShow"
            class="description-wrapper__button"
          >
            {{ !mobileShow ? "Подробнее" : "Скрыть" }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Collapse } from "vue-collapsed";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mobileShow: false,
      list: [
        {
          title: "Габариты: ХХ х ХХ х ХХ см.",
          text: "Удобные размеры позволят без проблем установить аппарат на типовой кухонный гарнитур, чтобы проводить перегонку в любом из 3-х режимов.",
        },

        {
          title: "Работа на любом типе плит.",
          text: "Если вы решите увеличить объём самогонного аппарата и он перестанет влезать на варочную панель, воспользуйтесь любым видом переносных плиток: индукционной, электрической или стеклокерамической с мощностью от 2 кВт.",
        },
      ],
    };
  },
  computed: mapGetters(["getMobile"]),
  components: {
    MyImage,
    Collapse,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#description {
  @extend %padd;

  overflow: hidden;
  .description-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;

    @media (max-width: 1136px) {
      flex-direction: column;
      max-width: 665px;
      margin: 0 auto;
    }

    &__content {
      @media (min-width: 1137px) {
        max-width: 50%;
      }

      width: 100%;

      color: #323232;
      font-family: "Gilroy";
      font-style: normal;

      .decr {
        font-size: 22px;
        font-weight: 400;
        line-height: 131.818%;

        @include fluidFontSize(18, 22, 992, 1920);

        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 30px;
        padding-top: 28px;

        @media (max-width: 1199px) {
          gap: 20px;
        }

        li {
          font-size: 18px;
          line-height: 138.889%;
          position: relative;
          padding-left: 40px;

          @include fluidFontSize(16, 18, 992, 1920);

          @media (max-width: 576px) {
            padding-left: 27px;
          }

          &::before {
            content: "";
            position: absolute;
            top: -4px;
            left: 0;
            width: 30px;
            height: 30px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkVsbGlwc2UgMjQ2Ij4KPHBhdGggaWQ9IlZlY3RvciA3MSIgZD0iTTYuODc1IDE0LjM3NUwxMi41IDIwTDIxLjg3NSAxMC42MjUiIHN0cm9rZT0iI0M4QUM2QyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9nPgo8L3N2Zz4K);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: center;

            @media (max-width: 576px) {
              width: 22px;
              height: 22px;
              top: 0;
            }
          }

          b {
            font-weight: 500;
          }

          span {
            display: block;
            margin-top: 7.5px;
            font-weight: 300;
          }
        }
      }
    }

    &__button {
      color: #323232;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.18px;
      text-decoration-line: underline;
      margin-top: 20px;
    }
  }
}
</style>