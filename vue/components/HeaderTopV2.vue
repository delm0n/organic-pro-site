<template>
  <div class="header-top" :class="{ 'header-top--scroll': scroll }">
    <div class="container">
      <div class="header-top__wrap">
        <div class="header-top__logo">
          <div class="logo-container">
            <svg
              class="icon"
              :style="scroll ? 'display: none ' : ''"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
            >
              <g clip-path="url(#clip0_604_496)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.2229 52.391C45.3942 58.0496 38.3007 60.8785 29.9415 60.8785C21.5833 60.8785 14.4898 58.0496 8.66112 52.391C2.88673 46.6791 0 39.7007 0 31.4549C0 23.21 2.88673 16.2587 8.66112 10.6009C14.4898 4.88816 21.5833 2.03223 29.9415 2.03223C38.3007 2.03223 45.3942 4.88816 51.2229 10.6009C57.0524 16.2587 59.9668 23.21 59.9668 31.4549C59.9668 39.7007 57.0524 46.6791 51.2229 52.391ZM16.6622 44.7929C20.2356 48.2414 24.6633 49.9662 29.9415 49.9662C35.2206 49.9662 39.6474 48.2414 43.2217 44.7929C46.7961 41.2901 48.5837 36.8447 48.5837 31.4549C48.5837 26.0669 46.7961 21.6206 43.2217 18.1179C39.6474 14.6151 35.2206 12.8642 29.9415 12.8642C24.6633 12.8642 20.2356 14.6151 16.6622 18.1179C13.0879 21.6206 11.3002 26.0669 11.3002 31.4549C11.3002 36.8447 13.0879 41.2901 16.6622 44.7929Z"
                  fill="#C8AC6C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.2189 19.6623C31.8003 18.8785 30.9648 18.3208 29.9823 18.3208C28.9999 18.3208 28.1645 18.8777 27.7468 19.6615L21.7996 30.8339C21.0986 32.1501 20.7031 33.6523 20.7031 35.2444C20.7031 40.3767 24.8279 44.5908 29.9823 44.5908C35.1368 44.5908 39.2616 40.3767 39.2616 35.2444C39.2616 33.6523 38.8662 32.1501 38.1652 30.8339L32.2189 19.6623ZM29.9823 40.2964C27.2738 40.2964 25.0141 38.0584 25.0141 35.2444C25.0141 34.3881 25.2145 33.5851 25.6091 32.8449L29.9823 24.6288L34.3566 32.8449C34.7494 33.5851 34.9507 34.389 34.9507 35.2444C34.9507 38.0584 32.691 40.2964 29.9823 40.2964Z"
                  fill="#C8AC6C"
                />
              </g>
              <defs>
                <clipPath id="clip0_604_496">
                  <rect width="60" height="61" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              :style="!scroll ? 'display: none ' : ''"
              xmlns="http://www.w3.org/2000/svg"
              width="340"
              height="61"
              viewBox="0 0 340 61"
              fill="none"
            >
              <path
                d="M296.604 18.136H293.07V0.345948H298.852C303.069 0.345948 305.177 2.17439 305.177 5.83116C305.177 8.68089 303.913 10.5258 301.385 11.3659C300.726 11.58 299.931 11.7118 299.009 11.7612C298.943 11.7612 298.14 11.7612 296.604 11.7612V18.136ZM296.604 3.53331V8.5738H298.44C300.627 8.5738 301.718 7.73784 301.718 6.06591C301.718 4.37751 300.66 3.53331 298.539 3.53331H296.604ZM319.854 18.136H315.666L310.687 10.8964V18.136H307.154V0.345948H313.183C315.143 0.345948 316.691 0.840084 317.828 1.82843C319.047 2.8662 319.656 4.34868 319.656 6.27595C319.656 7.67606 319.212 8.89504 318.322 9.93281C317.433 10.9705 316.296 11.5553 314.912 11.6871L319.854 18.136ZM316.222 6.39951C316.222 4.4887 314.999 3.53331 312.557 3.53331H310.687V9.06802H312.557C313.739 9.06802 314.591 8.91976 315.114 8.62323C315.851 8.22794 316.222 7.48661 316.222 6.39951ZM339.794 9.19149C339.794 11.7941 338.904 13.9932 337.125 15.7887C335.346 17.5842 333.155 18.4819 330.553 18.4819C327.983 18.4819 325.801 17.5759 324.005 15.764C322.21 13.952 321.312 11.7612 321.312 9.19149C321.312 6.63829 322.218 4.46811 324.03 2.68086C325.842 0.893618 328.024 0 330.578 0C333.147 0 335.326 0.889499 337.113 2.66851C338.9 4.44752 339.794 6.6219 339.794 9.19149ZM336.186 9.16687C336.186 7.56898 335.643 6.18946 334.556 5.02814C333.468 3.8669 332.134 3.2862 330.553 3.2862C328.988 3.2862 327.658 3.87514 326.562 5.05285C325.467 6.23065 324.919 7.61017 324.919 9.19149C324.919 10.7894 325.463 12.1895 326.55 13.392C327.637 14.5944 328.972 15.1956 330.553 15.1956C332.2 15.1956 333.559 14.5944 334.63 13.392C335.667 12.2389 336.186 10.8306 336.186 9.16687Z"
                fill="#C8AC6C"
              />
              <path
                d="M39.4681 41.6138C34.9766 46.0635 29.5104 48.288 23.0689 48.288C16.628 48.288 11.1618 46.0635 6.67031 41.6138C2.2206 37.1223 -0.00390625 31.6348 -0.00390625 25.1507C-0.00390625 18.6674 2.2206 13.2012 6.67031 8.75217C11.1618 4.25996 16.628 2.01416 23.0689 2.01416C29.5104 2.01416 34.9766 4.25996 39.4681 8.75217C43.9604 13.2012 46.2061 18.6674 46.2061 25.1507C46.2061 31.6348 43.9604 37.1223 39.4681 41.6138ZM12.8359 35.639C15.5895 38.3509 19.0015 39.7071 23.0689 39.7071C27.1369 39.7071 30.5481 38.3509 33.3025 35.639C36.0569 32.8847 37.4344 29.389 37.4344 25.1507C37.4344 20.9139 36.0569 17.4175 33.3025 14.6632C30.5481 11.9088 27.1369 10.532 23.0689 10.532C19.0015 10.532 15.5895 11.9088 12.8359 14.6632C10.0815 17.4175 8.70397 20.9139 8.70397 25.1507C8.70397 29.389 10.0815 32.8847 12.8359 35.639Z"
                fill="#C8AC6C"
              />
              <path
                d="M60.1883 21.0834C60.9508 19.0491 62.2007 17.5233 63.9385 16.5068C65.7183 15.4895 67.6888 14.981 69.8495 14.981V24.1343C67.3498 23.8371 65.1033 24.3457 63.1121 25.6594C61.1623 26.9731 60.1883 29.1557 60.1883 32.2066V47.3979H51.9883V15.6166H60.1883V21.0834Z"
                fill="#C8AC6C"
              />
              <path
                d="M97.8091 15.6166H105.818V45.8722C105.818 50.7879 104.187 54.5382 100.924 57.123C97.7035 59.7078 93.8049 61.0002 89.2282 61.0002C85.7958 61.0002 82.7662 60.3434 80.1388 59.0297C77.5539 57.716 75.5628 55.7887 74.164 53.2457L81.1559 49.2415C82.7662 52.2073 85.5419 53.6905 89.4829 53.6905C92.0677 53.6905 94.1015 53.0124 95.5846 51.6568C97.0679 50.3006 97.8091 48.3725 97.8091 45.8722V42.4403C95.3939 45.6607 92.0039 47.271 87.6393 47.271C83.1478 47.271 79.3762 45.7033 76.3253 42.5673C73.3171 39.3894 71.8125 35.5327 71.8125 30.9986C71.8125 26.5071 73.3376 22.6724 76.3892 19.4939C79.44 16.316 83.1897 14.7271 87.6393 14.7271C92.0039 14.7271 95.3939 16.3373 97.8091 19.5577V15.6166ZM82.4909 37.2913C84.1856 38.9014 86.3257 39.7072 88.9105 39.7072C91.4953 39.7072 93.6141 38.9014 95.2669 37.2913C96.9622 35.6391 97.8091 33.5416 97.8091 30.9986C97.8091 28.4989 96.9622 26.4433 95.2669 24.8331C93.6141 23.1803 91.4953 22.3547 88.9105 22.3547C86.3257 22.3547 84.1856 23.1803 82.4909 24.8331C80.8382 26.4433 80.0118 28.4989 80.0118 30.9986C80.0118 33.5416 80.8382 35.6391 82.4909 37.2913Z"
                fill="#C8AC6C"
              />
              <path
                d="M137.408 15.6166H145.607V47.3979H137.408V43.6476C134.95 46.7411 131.496 48.2881 127.047 48.2881C122.81 48.2881 119.165 46.6779 116.114 43.4575C113.106 40.1945 111.602 36.2109 111.602 31.5072C111.602 26.8036 113.106 22.8419 116.114 19.6209C119.165 16.3586 122.81 14.7271 127.047 14.7271C131.496 14.7271 134.95 16.2734 137.408 19.3669V15.6166ZM122.28 37.9906C123.933 39.6434 126.03 40.4698 128.573 40.4698C131.116 40.4698 133.213 39.6434 134.866 37.9906C136.56 36.296 137.408 34.1347 137.408 31.5072C137.408 28.8798 136.56 26.7405 134.866 25.0877C133.213 23.3924 131.116 22.5447 128.573 22.5447C126.03 22.5447 123.933 23.3924 122.28 25.0877C120.628 26.7405 119.801 28.8798 119.801 31.5072C119.801 34.1347 120.628 36.296 122.28 37.9906Z"
                fill="#C8AC6C"
              />
              <path
                d="M170.714 14.7271C174.188 14.7271 177.048 15.8918 179.295 18.2227C181.583 20.5536 182.727 23.774 182.727 27.8839V47.3979H174.527V28.9011C174.527 26.7824 173.956 25.1721 172.812 24.0705C171.667 22.9263 170.142 22.3547 168.235 22.3547C166.115 22.3547 164.421 23.0115 163.15 24.3251C161.879 25.6381 161.243 27.6087 161.243 30.2361V47.3979H153.043V15.6166H161.243V19.1761C163.234 16.2103 166.392 14.7271 170.714 14.7271Z"
                fill="#C8AC6C"
              />
              <path
                d="M193.799 11.8034C192.442 11.8034 191.256 11.3161 190.239 10.3415C189.263 9.32429 188.777 8.13825 188.777 6.78196C188.777 5.42575 189.263 4.23972 190.239 3.22254C191.256 2.20537 192.442 1.69678 193.799 1.69678C195.197 1.69678 196.383 2.20537 197.358 3.22254C198.375 4.23972 198.883 5.42575 198.883 6.78196C198.883 8.13825 198.375 9.32429 197.358 10.3415C196.383 11.3161 195.197 11.8034 193.799 11.8034ZM189.731 47.3989V15.6169H197.93V47.3989H189.731Z"
                fill="#C8AC6C"
              />
              <path
                d="M220.561 48.2881C215.774 48.2881 211.77 46.6779 208.548 43.4575C205.37 40.2364 203.781 36.2535 203.781 31.5072C203.781 26.7611 205.37 22.7781 208.548 19.5577C211.77 16.3373 215.774 14.7271 220.561 14.7271C223.656 14.7271 226.472 15.4684 229.017 16.9516C231.559 18.4348 233.488 20.4266 234.801 22.9263L227.745 27.0582C227.109 25.7445 226.135 24.7061 224.822 23.9435C223.551 23.1803 222.108 22.7994 220.5 22.7994C218.04 22.7994 216.007 23.6258 214.396 25.2785C212.787 26.8881 211.983 28.965 211.983 31.5072C211.983 34.0077 212.787 36.0839 214.396 37.7367C216.007 39.3469 218.04 40.152 220.5 40.152C222.15 40.152 223.612 39.7916 224.883 39.0717C226.198 38.3084 227.173 37.2707 227.807 35.957L234.928 40.0251C233.529 42.5247 231.559 44.5379 229.017 46.0629C226.472 47.5462 223.656 48.2881 220.561 48.2881Z"
                fill="#C8AC6C"
              />
              <path
                d="M251.853 8.85926V0.416016H279.605V8.53206L270.769 16.3208C278.448 18.3279 282.288 23.4113 282.288 31.5709C282.288 36.7197 280.761 40.8214 277.707 43.8757C274.652 46.9302 270.573 48.4573 265.467 48.4573C260.449 48.4573 256.457 47.0065 253.49 44.1048C250.523 41.2031 249.039 37.2652 249.039 32.2909H258.53C258.53 34.4726 259.097 36.2179 260.231 37.527C261.409 38.9669 263.067 39.6868 265.206 39.6868C267.387 39.6868 269.187 38.9996 270.605 37.6252C272.023 36.2506 272.733 34.4726 272.733 32.2909C272.733 29.2801 272.122 27.0874 270.9 25.713C269.678 24.3385 267.584 23.6512 264.616 23.6512C264.355 23.6512 262.697 23.9566 259.642 24.5677L255.911 19.1133L266.776 8.85926H251.853Z"
                fill="#C8AC6C"
              />
              <path
                d="M24.8232 15.8767C24.5006 15.2604 23.8568 14.8218 23.0998 14.8218C22.3427 14.8218 21.6989 15.2597 21.377 15.876L16.7941 24.6615C16.254 25.6965 15.9492 26.8777 15.9492 28.1297C15.9492 32.1655 19.1278 35.4792 23.0998 35.4792C27.0718 35.4792 30.2503 32.1655 30.2503 28.1297C30.2503 26.8777 29.9456 25.6965 29.4054 24.6615L24.8232 15.8767ZM23.0998 32.1023C21.0125 32.1023 19.2713 30.3425 19.2713 28.1297C19.2713 27.4563 19.4257 26.8249 19.7297 26.2429L23.0998 19.7822L26.4705 26.2429C26.7732 26.8249 26.9283 27.457 26.9283 28.1297C26.9283 30.3425 25.187 32.1023 23.0998 32.1023Z"
                fill="#C8AC6C"
              />
            </svg>
          </div>

          <p :class="scroll ? 'hide ' : ''">
            Официальный сайт <br />
            производителя
          </p>
        </div>

        <div class="header-top__nav">
          <ul :class="['menu-list', burger ? 'menu-list--open' : '']">
            <template v-for="(item, index) in navigations">
              <li v-if="!(scroll && item.hidden)" :key="index">
                <p
                  v-on:click="scrollToSection(item.selector)"
                  v-text="item.name"
                ></p>
              </li>
            </template>
          </ul>
        </div>

        <header-top-v-2-contact
          @burger-change="burgerChange"
          class="header-top__contact"
          :scroll="scroll"
          :refHeader="refHeader"
          :burger="burger"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import HeaderTopV2Contact from "./HeaderTopV2Contact.vue";

export default {
  data() {
    return {
      scroll: false,
      burger: false,
    };
  },
  components: { MyImage, HeaderTopV2Contact },
  props: {
    navigations: Object,
    refHeader: String,
  },

  created() {
    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 120 ? false : true;
    });
  },

  methods: {
    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: selector },
      });
      this.burger = false;
    },

    burgerChange(bool) {
      this.burger = bool;
    },
  },
};
</script>


<style lang="scss">
@import "../../scss/_global.scss";

.header-top {
  position: fixed;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  transition: all 0.4s ease-in-out;

  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1367px) {
    overflow: hidden;
  }

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 30px;
    justify-content: space-between;
    height: 100px;
    position: relative;
    height: 91px;

    @media (max-width: 992px) {
      height: 81px;
    }

    @media (max-width: 768px) {
      height: 71px;
      gap: 10px;
    }

    @media (max-width: 576px) {
      height: 51px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    column-gap: 15px;
    flex-shrink: 1;

    @media (max-width: 992px) {
      gap: 10px;
    }

    svg {
      width: 100%;

      &.icon {
        @media (max-width: 992px) {
          height: 44px;
          width: 44px;
        }
        @media (max-width: 768px) {
          width: 34px;
          height: 34px;
        }

        @media (max-width: 576px) {
          width: 27px;
          height: 27px;
        }
      }
    }

    .logo-container {
      // overflow: hidden;
      transition: all 0.3s;
      display: flex;
      align-items: center;

      @media (max-width: 992px) {
        max-width: 240px;
      }

      @media (max-width: 576px) {
        max-width: 150px;
      }
    }

    p {
      white-space: nowrap;
      position: relative;
      color: #292929;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 200;
      line-height: 21px;
      opacity: 1;
      // width: 130px;
      transition: width 0.4s, opacity 0.2s;
      overflow: hidden;
      // will-change: width;

      @media (max-width: 1580px) and (min-width: 1367px) {
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 13px;
        line-height: 18px;
      }

      @media (max-width: 576px) {
        font-size: 11px;
        line-height: 16px;
        transition: all 0s;
      }

      &.hide {
        width: 0;
        opacity: 0;
      }
    }

    .logo {
      max-width: 215px;
      width: 100%;
      @media (max-width: 992px) {
        max-width: 189px;
      }

      @media (max-width: 768px) {
        max-width: 130px;
      }
      @media (max-width: 576px) {
        max-width: 95px;
      }
    }
  }

  &__nav {
    .menu-list {
      display: flex;
      align-items: center;
      gap: 30px;
      justify-content: center;

      @media (max-width: 1440px) {
        gap: 20px;
      }

      @media (max-width: 1366px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;
        z-index: 10;
        width: 100%;
        right: 0px;
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.45s 0.1s, opacity 0.25s;
        max-width: 320px;
        padding: 30px 0;
        border-radius: 0px 0px 10px 10px;
        background: #fff;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);

        top: 91px;

        @media (max-width: 992px) {
          top: 81px;
        }

        @media (max-width: 768px) {
          top: 71px;
        }

        @media (max-width: 576px) {
          top: 51px;
        }
      }

      @media (max-width: 768px) {
        max-width: 270px;
        padding: 20px 0;
      }

      &--open {
        transform: translateY(0px);
        opacity: 0.95;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li {
        p,
        a {
          transition: all 0.4s;
          cursor: pointer;
          white-space: nowrap;
          color: #646464;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            height: 1px;
            width: 0;
            background-color: rgba(100, 100, 100, 0.3);

            // opacity: 0.3;
            transition: width 0.5s, opacity 0.2s;
          }

          &:hover {
            color: rgba(100, 100, 100, 0.5);

            &:before {
              right: auto;
              left: 0;
              width: 100%;
              opacity: 1;
            }
          }

          @media (max-width: 768px) {
            font-size: 16px;
          }
        }
      }
    }
  }

  &__contact {
    position: relative;
    z-index: 10;
  }

  &--scroll {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
  }
}
</style>