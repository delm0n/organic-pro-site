<template>
  <section id="faq">
    <div class="container">
      <div class="title">
        <h2>FAQ — ответы на самые популярные вопросы</h2>
      </div>
      <div class="faq-wrapper">
        <div v-for="(item, index) in questions" :key="index" class="faq-item">
          <div @click="showHide(index)" class="faq-item__title">
            <p>
              <span>?</span>
              <b v-html="item.title"></b>
            </p>
            <button>
              <svg
                :style="[
                  item.open
                    ? 'transform: rotate(180deg)'
                    : 'transform: rotate(0)',
                ]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M3 3L13.3572 11.7638C14.0168 12.3219 14.9832 12.3219 15.6428 11.7638L26 3"
                  stroke="#C8AC6C"
                  stroke-width="5.30769"
                  stroke-linecap="round"
                />
                <path
                  d="M3 16.2695L13.3572 25.0333C14.0168 25.5915 14.9832 25.5915 15.6428 25.0333L26 16.2695"
                  stroke="#C8AC6C"
                  stroke-width="5.30769"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <button
              class="--mobile"
              :style="[
                item.open ? 'opacity: 0.5' : 'opacity: 1',
                ' transition: opacity 0.3s',
              ]"
            >
              <span> {{ item.open ? "Свернуть" : "Раскрыть" }} </span>
            </button>
          </div>

          <collapse :when="item.open">
            <div class="faq-item__content">
              <div class="text-box">
                <p v-html="item.content"></p>
              </div>
            </div>
          </collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Collapse } from "vue-collapsed";

export default {
  components: {
    Collapse,
  },
  data() {
    return {
      questions: [
        {
          title: "Законно ли заниматься самогоноварением?",
          content: `Абсолютно законно. В настоящем Уголовном и Административном кодексах Российской Федерации нет статей, предусматривающих ответственность за самогоноварение. Но стоит отметить важный нюанс: производить дистиллят разрешается только для собственных нужд.
          <br><br>
          Сбыт самогона, согласно федеральному закону «Об административной ответственности юридических лиц (организаций) и индивидуальных предпринимателей за правонарушения в области производства и оборота этилового спирта, алкогольной и спиртосодержащей продукции», чреват штрафом, размер которого устанавливается решением суда.`,
          open: false,
        },

        {
          title: "Как ухаживать за самогонным аппаратом?",
          content: `Любой дистиллятор нуждается в правильном уходе, основа которого — систематическая промывка деталей чистой водой. Делать это рекомендуется перед каждой перегонкой.
          В случае сложных загрязнений рекомендуется использовать слабый раствор лимонной кислоты в пропорции: 1 л воды на 40 гр. кислоты. Смесь заливается в устройство на несколько часов (в зависимости от степени загрязнения).`,
          open: false,
        },

        {
          title: "Какой длины должна быть насадка Панченкова?",
          content: `Для колонны на 2 дюйма рекомендуется сворачивать в рулон по 80 см одной части сетки. В среднем это обойдется от 600 (если нержавеющая сталь) до 2100 (если медь) рублей.`,
          open: false,
        },

        {
          title: "Как сварить пиво на Organic 3 PRO?",
          content: `Основной текст`,
          open: false,
        },

        {
          title: "Можно ли вернуть или обменять самогонный аппарат?",
          content: `Вы можете обменять или вернуть товар в течение 14 (а в случае дистанционной покупки — 7) дней с момента оплаты. Все обращения обрабатывает служба поддержки. Обратите внимание на правила возврата: товар не был в употреблении, нет следов эксплуатации; товар надлежащего качества; имеется чек.`,
          open: false,
        },
      ],
    };
  },

  methods: {
    showHide(i) {
      this.questions.forEach((element, index) => {
        index == i
          ? (element.open = element.open == true ? false : true)
          : (element.open = false);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %padd;
  overflow: hidden;
  .faq-item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &__title {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);

      display: flex;
      justify-content: space-between;
      gap: 40px;
      align-items: center;
      padding: 10px 30px;
      position: relative;
      z-index: 2;

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 20px;
        justify-content: center;
      }

      p {
        align-items: center;
        display: flex;
        gap: 20px;

        span {
          align-items: center;
          background-color: #c8ac6c;
          border-radius: 100%;
          color: #fff;
          display: flex;
          flex-shrink: 0;
          font-family: "Gilroy";
          font-size: 22.759px;
          font-style: normal;
          font-weight: 1000;
          height: 30px;
          justify-content: center;
          line-height: 30px;
          transition: all 0.3s;
          width: 30px;

          @media (max-width: 576px) {
            display: none;
          }
        }

        b {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 29px; /* 131.818% */

          @media (max-width: 768px) {
            font-size: 18px;
            line-height: 25px;
          }

          @media (max-width: 576px) {
            text-align: center;
          }
        }
      }

      button {
        background: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        svg {
          transition: 0.4s all;
        }

        &.--mobile {
          display: none;
        }

        @media (max-width: 576px) {
          display: none;
          &.--mobile {
            gap: 15px;
            display: flex;
            padding: 5px 20px;
            align-items: center;
            width: 126px;
            border-radius: 10px;
            border: 1px solid rgba(200, 172, 108, 0.8);

            span {
              color: rgba(200, 172, 108, 0.8);
              text-align: center;
              font-family: "Inter";
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 25px; /* 138.889% */
              text-decoration-line: underline;
            }

            svg {
              transition: 0.4s all;
            }
          }
        }
      }
    }

    &__content {
      border-radius: 0px 0px 10px 10px;
      transition: all 0.4s ease;
      max-width: 80%;
      margin: 0 auto;
      overflow: hidden;
      background: rgba(245, 245, 245, 0.5);

      @media (max-width: 992px) {
        max-width: 95%;
      }

      .text-box {
        padding: 50px;

        @media (max-width: 992px) {
          padding: 30px;
        }

        @media (max-width: 576px) {
          padding: 20px 10px;
        }
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 29px;

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>



