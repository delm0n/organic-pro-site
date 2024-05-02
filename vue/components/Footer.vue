<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column-logo">
          <div class="footer__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="62"
              viewBox="0 0 60 62"
              fill="none"
            >
              <g clip-path="url(#clip0_671_1733)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.2229 52.7689C45.3942 58.4275 38.3007 61.2564 29.9415 61.2564C21.5833 61.2564 14.4898 58.4275 8.66112 52.7689C2.88673 47.057 0 40.0786 0 31.8329C0 23.588 2.88673 16.6366 8.66112 10.9788C14.4898 5.26609 21.5833 2.41016 29.9415 2.41016C38.3007 2.41016 45.3942 5.26609 51.2229 10.9788C57.0524 16.6366 59.9668 23.588 59.9668 31.8329C59.9668 40.0786 57.0524 47.057 51.2229 52.7689ZM16.6622 45.1708C20.2356 48.6194 24.6633 50.3442 29.9415 50.3442C35.2206 50.3442 39.6474 48.6194 43.2217 45.1708C46.7961 41.6681 48.5837 37.2227 48.5837 31.8329C48.5837 26.4448 46.7961 21.9985 43.2217 18.4958C39.6474 14.9931 35.2206 13.2422 29.9415 13.2422C24.6633 13.2422 20.2356 14.9931 16.6622 18.4958C13.0879 21.9985 11.3002 26.4448 11.3002 31.8329C11.3002 37.2227 13.0879 41.6681 16.6622 45.1708Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.2189 20.0388C31.8003 19.255 30.9648 18.6973 29.9823 18.6973C28.9999 18.6973 28.1645 19.2541 27.7468 20.0379L21.7996 31.2103C21.0986 32.5266 20.7031 34.0288 20.7031 35.6208C20.7031 40.7531 24.8279 44.9673 29.9823 44.9673C35.1368 44.9673 39.2616 40.7531 39.2616 35.6208C39.2616 34.0288 38.8662 32.5266 38.1652 31.2103L32.2189 20.0388ZM29.9823 40.6729C27.2738 40.6729 25.0141 38.4349 25.0141 35.6208C25.0141 34.7646 25.2145 33.9616 25.6091 33.2214L29.9823 25.0053L34.3566 33.2214C34.7494 33.9616 34.9507 34.7654 34.9507 35.6208C34.9507 38.4349 32.691 40.6729 29.9823 40.6729Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_671_1733">
                  <rect
                    width="60"
                    height="61"
                    fill="white"
                    transform="translate(0 0.376953)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="footer__logo-info"
              >Официальный сайт производителя</span
            >
          </div>
          <a class="footer__phone" href="tel:88002505932">{{ getPhone }}</a
          ><span class="footer__text hyperlink" @click="openModalCall()"
            >Заказать звонок</span
          >
        </div>
        <div class="footer__column-info">
          <p class="footer__info">
            <span>ИНН:</span> 432500888349<br /><span>ОГРНИП:</span>
            314744919000039
          </p>
          <p class="footer__info">
            <span>Адрес почтовый (фактический):</span><br />610006,
            г.&nbsp;Киров, Октябрьский&nbsp;пр-т, д.&nbsp;24
          </p>
          <p class="footer__info">
            <span>Для корреспонденции: </span>610000, а/я&nbsp;154
          </p>
        </div>
        <div class="footer__column-links">
          <ul class="footer__list">
            <li class="footer__item">
              <a target="_blank" class="footer__link" href="#"
                >Политика конфиденциальности</a
              >
            </li>
            <li class="footer__item">
              <a target="_blank" class="footer__link" href="#"
                >Договор оферты</a
              >
            </li>
          </ul>
        </div>

        <div class="footer__column-button">
          <a href="#" class="button footer__btn">{{
            opt ? "Купить оптом" : "Купить в розницу"
          }}</a>
        </div>
      </div>
    </div>
    <div class="footer__border"></div>
    <div class="container">
      <p class="footer__copyright">
        © 2010 - 2023 organic-pro.ru Все права защищены.<br />Использование
        материалов разрешено только с согласия правообладателей. Полное или
        частичное копирование сайта запрещено и преследуется по закону.
      </p>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  props: {
    opt: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: mapGetters(["getPhone"]),
  methods: {
    ...mapMutations(["openModalSuccessManager"]),

    openModalCall() {
      this.openModalSuccessManager();
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-call",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
.footer {
  padding: 60px 0 30px 0;
  background: #2f2f2f;
  @media (max-width: 575px) {
    padding: 30px 0;
  }
  &__row {
    // display: flex;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto 1fr;
    gap: 20px;

    justify-content: space-between;
    width: 100%;
    // gap: 170px;
    margin-bottom: 68px;

    @media (max-width: 1280px) {
      gap: 30px;
      margin-bottom: 38px;
    }

    @media (max-width: 1115px) {
      grid-template-columns: repeat(2, auto);
    }

    // @media (max-width: 991px) {
    //   flex-wrap: wrap;
    //   max-width: 700px;
    //   margin: 0 auto 30px auto;
    // }
    @media (max-width: 768px) {
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
  }
  &__column-logo {
    // flex-grow: 1;
    flex-shrink: 0;
    padding-top: 15px;
    @media (max-width: 1280px) {
      flex-grow: 0;
    }
    // @media (max-width: 991px) {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   flex: 0 1 100%;
    // }
    @media (max-width: 768px) {
      align-items: flex-start;
      padding-bottom: 5px;
    }
  }
  &__column-info,
  &__column-links {
    // @media (max-width: 991px) {
    //   flex: 0 1 calc(50% - 15px);
    // }
    @media (max-width: 575px) {
      flex: 0 1 100%;
    }
  }

  &__column-info,
  &__column-logo {
    grid-row: 1/3;
  }
  @media (min-width: 1116px) {
    &__column-links {
      grid-column: 3/4;
      grid-row: 1/2;
    }

    &__column-button {
      grid-column: 3/4;
      grid-row: 2/3;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
    @media (max-width: 575px) {
      margin-bottom: 20px;

      svg {
        width: 34px;
      }
    }

    .footer-logo {
      max-width: 189px;
      width: 100%;

      @media (max-width: 1280px) {
        max-width: 159px;
      }

      @media (max-width: 768px) {
        max-width: 130px;
      }
    }

    img {
      max-width: 100%;
      width: 100%;
    }
  }
  &__logo-name {
    font-family: "Gilroy";
    font-weight: 900;
    font-size: 52px;
    line-height: 1;
    letter-spacing: 0.01em;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 32px;
    }
  }
  &__logo-border {
    display: block;
    height: 38px;
    width: 1px;
    background: #9b9b9b;
    @media (max-width: 575px) {
      height: 30px;
    }
  }
  &__logo-info {
    max-width: 155px;
    font-family: "Inter";
    font-weight: 200;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__phone {
    font-size: 32px;
    font-family: "Gilroy";

    font-weight: 600;
    color: #ffffff;
    transition: 0.3s opacity ease;

    letter-spacing: 0.32px;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 575px) {
      margin-top: 5px;
      font-size: 20px;
    }
  }
  &__text {
    display: block;

    color: #c9c9c9;
    font-family: "Inter";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.18px;
    text-decoration-line: underline;

    @media (max-width: 575px) {
      font-size: 14px;
    }
  }
  &__info {
    font-family: "Inter";
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    line-height: 25px;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 140%;
    }
    span {
      color: rgba(255, 255, 255, 1);
    }
  }
  &__info:first-child {
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
  }
  &__info:last-child {
    margin-top: 30px;
    @media (max-width: 575px) {
      margin-top: 20px;
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 15px;
  }
  &__link {
    font-family: "Inter";
    font-size: 18px;
    color: #ffffff;
    text-decoration-line: underline;
    transition: 0.3s opacity ease;
    &:hover {
      opacity: 0.5;
    }
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 140%;
    }
  }
  &__btn {
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 575px) {
      max-width: 205px;
      margin-top: 20px;
    }
  }
  &__border {
    height: 1px;
    background: #fff;
    opacity: 0.1;
  }
  &__copyright {
    align-self: flex-start;
    font-family: "Inter";
    max-width: 479px;
    margin-top: 30px;
    font-size: 12px;
    line-height: 140%;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 10px;
    }
  }
}
</style>
