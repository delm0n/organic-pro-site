<template>
  <section id="dops">
    <div class="container">
      <div class="title">
        <h2>При заказе аппарата скидка на аксессуары</h2>
      </div>

      <dop-tabs
        class="dops-tab"
        @change-active="changeActiveTab"
        :tabs="tabs"
        :active="activeTab"
      />

      <template v-if="!getMobile">
        <!-- 1920px - 768px -->
        <transition-group tag="div" class="dops-wrapper" name="cards">
          <dop-item
            v-for="(dop, index) in dopsFilter"
            v-show="this.activeTab == 'all' ? true : dop.type == this.activeTab"
            @open-modal="openModal"
            :key="index"
            :dop="dop"
          />
        </transition-group>

        <div class="button-show hyperlink" @click="changeShowMore(!showMore)">
          {{ !showMore ? "Показать ещё" : "Скрыть" }}
        </div>

        <div class="dops-pagination">
          <div class="bullets">
            <template v-for="(item, index) in getDopsSortedByActiveTab">
              <div
                :key="index"
                @click="changeActivePage(index)"
                :class="[
                  'bullet',
                  Math.ceil(index / COUNT) + 1 == page ? 'bullet--active' : '',
                ]"
                v-if="index % COUNT == 0"
              >
                {{ Math.ceil(index / COUNT) + 1 }}
              </div>
            </template>
          </div>
          <p>Показывать по {{ COUNT }}</p>
        </div>
        <!-- 1920px - 768px  -->
      </template>

      <template v-else>
        <!-- 768px - 0 -->
        <div
          class="dops-slider"
          v-for="(tab, index) in tabs.slice(1)"
          :key="index"
        >
          <dop-mobile-slider
            v-show="tab.type == activeTab"
            @open-modal="openModal"
            :index="index"
            :tab="tab"
          />
        </div>
        <!-- 768px - 0 -->
      </template>
    </div>

    <!-- <dop-modal :floder="'dops'" /> -->
  </section>
</template>

<script>
import { DOPTYPES } from "../../js/dop-types";
import { mapGetters, mapMutations } from "vuex";

import DopTabs from "../components/DopTabs.vue";
import DopItem from "../components/DopItem.vue";
import DopModal from "../UI/ModalForDop.vue";
import DopMobileSlider from "../components/DopMobileSlider.vue";

export default {
  data() {
    return {
      activeTab: DOPTYPES.all,
      width1280: window.innerWidth < 1281,

      showMore: false,
      dopsFilter: [],
      page: 1,

      tabs: [
        {
          value: "Все",
          type: DOPTYPES.all,
        },

        {
          value: "Аксессуары",
          type: DOPTYPES.access,
        },

        {
          value: "Расходные материалы",
          type: DOPTYPES.materials,
        },

        {
          value: "Измерительные приборы",
          type: DOPTYPES.measure,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setDopModal"]),

    changeActiveTab(type) {
      this.activeTab = type;
      this.page = 1;
      this.countOfShow(0, this.COUNT);
      this.animationOpacity();
    },

    changeShowMore(bool) {
      this.showMore = bool;
      this.countOfShow(0, this.COUNT);
      this.page = 1;
    },

    changeActivePage(index) {
      if (Math.ceil(index / this.COUNT) + 1 != this.page) {
        this.countOfShow(
          Math.ceil(index / this.COUNT) * this.COUNT,
          (Math.ceil(index / this.COUNT) + 1) * this.COUNT
        );
        this.page = Math.ceil(index / this.COUNT) + 1;
        this.animationOpacity();
      }
    },

    countOfShow(startIndex, endIndex) {
      startIndex < 0 ? (startIndex = 0) : "";

      if (this.activeTab == DOPTYPES.all) {
        this.dopsFilter = this.getDops.slice(startIndex, endIndex);
      } else {
        this.dopsFilter = this.getDops
          .filter((el) => el.type == this.activeTab)
          .slice(startIndex, endIndex);
      }
    },

    animationOpacity() {
      this.gsap.fromTo(
        "#dops .dops-wrapper .dop-item__wrapper",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    },

    openModal(item) {
      this.setDopModal({
        floder: "dops",
        img: item.img,
        id: item.id,
        name: item.name,
        text: item.modalText,
        price: item.price,
        oldPrice: item.oldPrice,
      });

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#dop-modal",
          },
        ]);
      }, 500);
    },
  },
  computed: {
    ...mapGetters(["getDops", "getMobile"]),

    COUNT() {
      //по сколько показывать
      if (this.width1280) {
        return this.showMore ? 9 : 3;
      } else {
        return this.showMore ? 20 : 4;
      }
    },

    getDopsSortedByActiveTab() {
      return this.activeTab == DOPTYPES.all
        ? this.getDops
        : this.getDops.filter((el) => el.type == this.activeTab);
    },
  },
  mounted() {
    // брейкпоинт на 1280px
    const count_breakpoint = window.matchMedia("(max-width: 1280px)");
    const breakpointChecker = () => {
      if (count_breakpoint.matches) {
        this.width1280 = true;
        this.countOfShow(0, this.COUNT);
      } else {
        this.width1280 = false;
        this.countOfShow(0, this.COUNT);
      }
    };
    count_breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  components: { DopItem, DopTabs, DopMobileSlider, DopModal },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#dops {
  @extend %padd;

  overflow-anchor: none;
  overflow: hidden;

  .cards-enter-from,
  .cards-enter-active {
    transform: scale(0.95) translatey(-30px);
    opacity: 0;
  }

  .cards-leave-to {
    transform: translatey(30px);
    opacity: 0;
  }

  .dops-wrapper {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-top: 50px;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    & > div {
      transition: all 0.3s ease-in-out;
    }
  }

  .button-show {
    margin-top: 50px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #e8e8e8;
    padding: 20px;
    color: #565656;
    text-align: center;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 138.889% */
    text-decoration-line: underline;
  }

  .dops-pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .bullets {
      display: flex;
      align-items: center;
      gap: 10px;

      .bullet {
        cursor: pointer;
        border: 2px solid #323232;
        border-radius: 10px;
        background: #fff;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        display: flex;
        color: #323232;
        text-align: center;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        transition: all 0.2s 0.1s;

        &--active {
          color: #fff;
          background: #323232;
        }
      }
    }

    p {
      color: #323232;
      text-align: right;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .dops-slider {
    margin-top: 30px;
  }
}
</style>