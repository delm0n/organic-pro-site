<template>
  <section id="benefit">
    <div class="container">
      <div class="benefit-container">
        <h2>Окупится за 4 застолья</h2>

        <div class="benefit-wrapper">
          <benefit-item
            v-for="(drink, idx) in drinks"
            :key="idx"
            :drink="drink"
            :idx="idx"
          />

          <div class="benefit-present">
            <p>
              Скачайте книгу популярных рецептов и каждый день радуйте себя
              новыми напитками&nbsp;<span @click="openModal()">→</span>
            </p>

            <div class="benefit-present__box">
              <my-image
                @click="openModal()"
                :alt="'#'"
                :floder="'benefit'"
                :imgName="'book'"
                :mobile="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="benefit-modal">
      <div class="modal-wrapper">
        <my-image
          class="modal-wrapper__img"
          :alt="''"
          :floder="'benefit'"
          :imgName="'test'"
          :mobile="false"
        />

        <p class="modal-wrapper__title">Книга рецептов</p>
        <p class="modal-wrapper__text">
          Введите номер телефона и e-mail. После подтверждения Вам ридет книга
          “100 рецептов” и руководство по эксплуатации
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import BenefitItem from "./BenefitItem.vue";

export default {
  components: { MyImage, BenefitItem },

  data() {
    return {
      drinks: [
        {
          title: "Домашняя водка",
          imgTextTitle: "52&nbsp;руб. / 0,5&nbsp;л",
          imgTextDecr: `
          Выход продукта <br>
          (абс. спирт): 0,5&nbsp;л/кг сахара
          `,
          mobileShow: false,
          dops: [
            {
              img: "sugar",
              title: "Сахар",
              decr: `5&nbsp;кг — (70&nbsp;руб./кг)`,
            },

            {
              img: "droji-vodka",
              title: "Дрожжи",
              decr: `200&nbsp;г — (120&nbsp;руб./100&nbsp;г)`,
            },

            {
              img: "water",
              title: "Вода артезианская",
              decr: `20&nbsp;л — (5&nbsp;руб./литр)`,
            },
          ],
        },

        {
          title: "Домашний виноградный коньяк",
          mobileShow: false,
          imgTextTitle: "250&nbsp;руб. / 0,5&nbsp;л",
          imgTextDecr: `
          Выход продукта
          (абс. спирт): 0,25&nbsp;л/кг (сахар+виноград)
          `,
          dops: [
            {
              img: "grape",
              title: "Виноград",
              decr: `10&nbsp;кг — (170&nbsp;руб./кг)`,
            },

            {
              img: "sugar",
              title: "Сахар",
              decr: `1&nbsp;кг — (70&nbsp;руб./кг)`,
            },

            {
              img: "water",
              title: "Вода артезианская",
              decr: `1&nbsp;л — (5&nbsp;руб./литр)`,
            },
          ],
        },

        {
          title: "Виски солодовое",
          mobileShow: false,
          imgTextTitle: "250&nbsp;руб. / 0,5&nbsp;л",
          imgTextDecr: `
          Выход продукта
          (абс. спирт): 0,17&nbsp;л/кг солода
          `,
          dops: [
            {
              img: "solod",
              title: "Солод ячменный",
              decr: `6&nbsp;кг — (100&nbsp;руб./кг)`,
            },

            {
              img: "droji-viski",
              title: "Дрожжи",
              decr: `200&nbsp;г — (120&nbsp;руб./100&nbsp;г)`,
            },

            {
              img: "water",
              title: "Вода артезианская",
              decr: `20&nbsp;л — (5&nbsp;руб./литр)`,
            },
          ],
        },
      ],
    };
  },
  methods: {
    openModal() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#benefit-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#benefit {
  @extend %padd;
  padding-top: 50px;
  @media (max-width: 576px) {
    padding-top: 30px;
  }

  .benefit-container {
    border-radius: 10px;
    background: #f9f9f9;
    padding: 50px;

    @media (max-width: 576px) {
      padding: 30px 10px;
    }

    h2 {
      color: #646464;
      text-align: center;
      font-family: "Gilroy";
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
      line-height: 125.926%;
      margin-bottom: 30px;

      @include fluidFontSize(22, 27, 577, 992);

      @media (max-width: 576px) {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .benefit-present {
    border-radius: 10px;
    background: #c8ac6c;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    padding: 0 50px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 20px;
      padding: 20px;
      max-width: 340px;
      margin: 0 auto;
    }

    p {
      color: #fff;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 131.818%;

      span {
        cursor: pointer;
      }

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 29px;
        text-align: center;
      }
    }

    &__box {
      position: relative;

      @media (min-width: 769px) {
        width: 131px;
        height: 137px;
      }

      .img-wrap {
        width: 131px;
        height: 170px;
        cursor: pointer;

        @media (min-width: 769px) {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

#benefit-modal {
  @extend %modal;
}
</style>