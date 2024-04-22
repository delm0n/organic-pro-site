<template>
  <div class="complectation-wrapper">
    <div class="complectation-wrapper__items">
      <div
        v-for="(item, index) in complect"
        :key="index"
        @click="openModal(item)"
        @mouseenter="hoverEnter(index)"
        @mouseleave="hoverLeave(index)"
        :class="[
          'complectation-item',
          'complectation-item-' + (index + 1),
          item.hover ? 'complectation-item--active' : '',
        ]"
      >
        <p v-html="index + 1 + '. ' + item.name"></p>
      </div>
    </div>
    <div class="complectation-wrapper__imgs">
      <div v-for="(item, index) in complect" :key="index">
        <div v-if="!break1280" :class="['arrow', 'arrow-' + (index + 1)]"></div>
        <my-image
          v-if="item.img"
          :class="[
            'complectation-img',
            item.img,
            item.udachPlusVersion ? 'loaded' : '',
          ]"
          :alt="'#'"
          :floder="'complectation'"
          :mobile="false"
          :imgName="
            item.udachPlusVersion
              ? udachPlusVersion
                ? item.udachPlusVersion.img
                : item.img
              : item.img
          "
          :lazyLoad="!item.udachPlusVersion"
        />

        <div
          v-if="break1280"
          @click="openModal(item)"
          :class="[
            'plus',
            'plus-' + (index + 1),
            item.hover ? 'plus--active' : '',
          ]"
        >
          <svg
            @mouseenter="hoverEnter(index)"
            @mouseleave="hoverLeave(index)"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle cx="24" cy="24" r="24" fill="#C8AC6C" fill-opacity="0.4" />
            <circle cx="24" cy="24" r="17" fill="#C8AC6C" />
            <path
              d="M22.672 32.944C22.4373 32.944 22.2453 32.8693 22.096 32.72C21.9467 32.5707 21.872 32.3787 21.872 32.144V26.096H15.952C15.7173 26.096 15.5253 26.0213 15.376 25.872C15.2267 25.7227 15.152 25.5413 15.152 25.328V23.312C15.152 23.0773 15.2267 22.8853 15.376 22.736C15.5253 22.5867 15.7173 22.512 15.952 22.512H21.872V16.656C21.872 16.4213 21.9467 16.2293 22.096 16.08C22.2453 15.9307 22.4373 15.856 22.672 15.856H24.88C25.1147 15.856 25.3067 15.9307 25.456 16.08C25.6053 16.2293 25.68 16.4213 25.68 16.656V22.512H31.6C31.8133 22.512 31.9947 22.5867 32.144 22.736C32.2933 22.8853 32.368 23.0773 32.368 23.312V25.328C32.368 25.5413 32.2933 25.7227 32.144 25.872C31.9947 26.0213 31.8133 26.096 31.6 26.096H25.68V32.144C25.68 32.3787 25.6053 32.5707 25.456 32.72C25.3067 32.8693 25.1147 32.944 24.88 32.944H22.672Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  props: {
    complect: Object,
    break1280: Boolean,
  },
  components: {
    MyImage,
  },
  methods: {
    hoverEnter(index) {
      this.complect[index].hover = true;
    },
    hoverLeave(index) {
      this.complect[index].hover = false;
    },

    openModal(item) {
      console.log(1);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
$middle-line: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQyIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgNjQyIDEyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSA1QzAuNDQ3NzE1IDUgLTQuODI4MjNlLTA4IDUuNDQ3NzIgMCA2QzQuODI4MjNlLTA4IDYuNTUyMjggMC40NDc3MTUgNyAxIDdMMSA1Wk02NDIgNS45OTk5NEw2MzIgMC4yMjY0NDJMNjMyIDExLjc3MzRMNjQyIDUuOTk5OTRaTTEgN0w2MzMgNi45OTk5NEw2MzMgNC45OTk5NEwxIDVMMSA3WiIgZmlsbD0iIzMyMzIzMiIgZmlsbC1vcGFjaXR5PSIwLjM3Ii8+Cjwvc3ZnPgo=);

#complectation .complectation-wrapper {
  display: grid;
  grid-template-columns: calc(342px + 20px) 1fr;
  max-width: 1178px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    grid-template-columns: 342px minmax(335px, 1fr);
    gap: 20px;
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
  // 309px

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  &__items {
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 5;
    background: #fff;

    // @media (min-width: 1281px) {
    padding: 73px 20px 80px 0;
    // }

    @media (max-width: 1280px) {
      padding-right: 0px;
    }
    @media (max-width: 1024px) {
      padding: 0 0 20px;
    }

    @media (max-width: 992px) {
      display: none;
    }

    .complectation-item {
      border-radius: 10px;
      background-color: #f9f9f9;
      padding: 10px 20px;
      transition: background-color 0.4s;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
      @media (min-width: 1025px) {
        &-4 {
          margin-bottom: 157px !important;
        }
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 131.818%;

        // @media (max-width: 1280px) {
        //   @include fluidFontSize(16, 22, 768, 1280);
        // }
      }

      &--active {
        background-color: #c8ac6cb2;
        p {
          color: #fff;
        }
      }
    }
  }

  &__imgs {
    grid-column: 1/-1;
    grid-row: 1/2;
    overflow: hidden;
    z-index: 4;
    position: relative;

    @media (max-width: 992px) {
      align-self: center;
      min-height: 700px;
      max-width: 450px;
      transform: translateX(-6%);
      grid-column: 1/-1 !important;
      width: 100%;
      margin: 0 auto;
    }

    @media (max-width: 576px) {
      min-height: 550px;
      max-width: 240px;
      transform: translateX(0);
    }

    .complectation-img {
      position: absolute;

      img {
        max-width: 100%;
      }

      &.main {
        right: 0;
        top: 0;

        @media (max-width: 1024px) {
          width: 210px;
          max-width: 100%;
        }
        @media (max-width: 576px) {
          width: 170px;
        }
      }

      &.term {
        right: 20%;
        top: 31%;

        @media (max-width: 1280px) {
          left: 20%;
          right: auto;
        }
        @media (max-width: 576px) {
          left: 8%;
          width: 70px;
        }
      }

      &.shlang {
        bottom: 61px;
        right: 23.6%;
        width: 9%;

        @media (max-width: 1280px) {
          bottom: 61px;
          left: 23.6%;
          width: 20%;
        }
        @media (max-width: 576px) {
          bottom: 68px;
          left: 7.6%;
        }
      }

      &.book {
        bottom: 124px;
        right: 27%;

        @media (max-width: 1280px) {
          bottom: 167px;
          left: 9%;
          width: 23%;
        }
      }
    }

    @media (min-width: 1280px) {
      .arrow {
        &::before {
          content: $middle-line;
          position: absolute;
        }

        &-1 {
          &::before {
            top: 103px;
            right: 15%;
          }
        }

        &-2 {
          &::before {
            top: 187px;
            right: 26.5%;
          }
        }

        &-3 {
          &::before {
            top: 265px;
            right: 16%;
            z-index: 6;
          }
        }

        &-4 {
          &::before {
            z-index: 6;
            top: 322px;
            right: 31%;
          }
        }

        &-5 {
          &::before {
            top: 531px;
            right: 18%;
          }
        }

        &-6 {
          &::before {
            top: 588px;
            right: 23%;
          }
        }

        &-7 {
          &::before {
            top: 661px;
            right: 16%;
          }
        }

        &-8 {
          &::before {
            top: 733px;
            right: 21%;
          }
        }

        &-9 {
          &::before {
            top: 793px;
            right: 38%;
          }
        }

        &-10 {
          &::before {
            top: 850px;
            right: 33%;
          }
        }
      }
    }

    @media (max-width: 1280px) {
      grid-column: 2/3;
      .plus {
        position: absolute;
        cursor: pointer;
        z-index: 10;
        animation: pulse 2s linear infinite;

        &:hover {
          animation: none;
        }

        svg {
          * {
            transition: all 0.4s;
          }

          @media (max-width: 576px) {
            transform: scale(0.5);
          }
        }

        &--active {
          svg {
            circle {
              fill: #f9f9f9;

              &:last-child {
                fill: #f9f9f9;
                opacity: 0.7;
              }
            }

            path {
              fill: #323232;
              opacity: 0.7;
            }
          }
        }

        &-1 {
          //   top: 98px;
          //   right: 358px;

          //   @media (max-width: 1280px) {
          top: 30px;
          right: 123px;
          //   }

          @media (max-width: 1024px) {
            right: 84px;
          }

          @media (max-width: 576px) {
            right: 63px;
            top: 22px;
          }
        }

        &-2 {
          top: 150px;
          right: 187px;

          @media (max-width: 1024px) {
            top: 108px;
            right: 125px;
          }
          @media (max-width: 576px) {
            top: 80px;
            right: 99px;
          }
        }

        &-3 {
          top: 239px;
          right: 125px;

          @media (max-width: 1024px) {
            top: 198px;
            right: 87px;
          }
          @media (max-width: 576px) {
            top: 154px;
            right: 64px;
          }
        }

        &-4 {
          top: 342px;
          left: 27%;

          @media (max-width: 1024px) {
            top: 259px;
            left: 27%;
          }
          @media (max-width: 576px) {
            top: 190px;
            left: 13%;
          }
        }

        &-5 {
          top: 473px;
          right: 124px;

          @media (max-width: 1024px) {
            top: 350px;
            right: 84px;
          }
          @media (max-width: 576px) {
            top: 290px;
            right: 65px;
          }
        }

        &-6 {
          top: 557px;
          right: 38px;

          @media (max-width: 1024px) {
            top: 405px;
            right: 14px;
          }

          @media (max-width: 576px) {
            top: 315px;
          }
        }

        &-7 {
          top: 616px;
          right: 176px;

          @media (max-width: 1024px) {
            top: 448px;
            right: 123px;
          }

          @media (max-width: 576px) {
            top: 351px;
            right: 91px;
          }
        }

        &-8 {
          top: 760px;
          right: 16%;
          @media (max-width: 1024px) {
            top: 558px;
          }
          @media (max-width: 576px) {
            top: 440px;
          }
        }

        &-9 {
          bottom: 167px;
          right: 70%;

          @media (max-width: 576px) {
            bottom: 143px;
            right: 81%;
          }
        }

        &-10 {
          bottom: 73px;
          right: 75%;

          @media (max-width: 576px) {
            bottom: 40px;
            right: 67%;
          }
        }
      }
    }
  }
}
</style>