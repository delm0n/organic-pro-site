<template>
  <section id="tank" class="tank">
    <div class="container">
      <div class="title">
        <h2>Расширяйте поле для творчества</h2>

        <p class="subtitle">
          Куб нового поколения для работы со всеми видами напитков
        </p>
      </div>
      <div class="tank__wrapper">
        <template v-if="!windowMatch">
          <div class="tank__content">
            <template v-for="(item, index) in tankList">
              <div
                v-if="index == 0"
                v-show="!visible"
                class="qwer-5 tank__clue"
              >
                <my-image
                  :lazyLoad="false"
                  :mobile="false"
                  :floder="'tank'"
                  imgName="clue"
                />
              </div>

              <div v-if="index == 0" class="qwer-5">
                <my-image
                  :lazyLoad="false"
                  :mobile="false"
                  :floder="'tank'"
                  imgName="fon"
                />
              </div>

              <div
                v-if="index == 0"
                class="qwer-5 qwer"
                @mouseenter="visible = true"
                @mouseleave="visible = false"
              >
                <div id="rotation">
                  <my-image
                    v-for="(img, indexImg) in [
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    ]"
                    :lazyLoad="false"
                    :key="indexImg"
                    :mobile="false"
                    :floder="'tank'"
                    :imgName="img"
                    :format="'.jpg'"
                  />
                </div>
              </div>

              <transition>
                <div v-show="item.active" class="tank__img">
                  <my-image
                    :lazyLoad="false"
                    :mobile="false"
                    :floder="'tank'"
                    :imgName="`mainn-${index}`"
                  />
                </div>
              </transition>

              <div :class="`tank__row row-${index} `">
                <div class="tank__row-img">
                  <my-image
                    :lazyLoad="false"
                    :mobile="false"
                    :floder="'tank'"
                    :imgName="item.imgSvg"
                  />
                </div>
                <h4
                  class="tank__row-title"
                  @mouseenter="item.active = true"
                  @mouseleave="item.active = false"
                >
                  {{ item.name }}
                </h4>
                <ul class="tank__row-list">
                  <li class="tank__row-item">
                    <div class="tank__row-desc" v-html="item.desc_1"></div>
                  </li>
                  <li class="tank__row-item">
                    <div class="tank__row-desc" v-html="item.desc_2"></div>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </template>

        <template v-else>
          <div class="tank__tablet tablet">
            <div class="tank__left">
              <div class="tank__img">
                <my-image
                  :lazyLoad="false"
                  :mobile="false"
                  :floder="'tank'"
                  :imgName="currentImage"
                />
              </div>
            </div>
            <div class="tank__right">
              <div class="title-box row-5"></div>
              <template v-for="(item, index) in tankList">
                <div :class="`tank__row row-${index} `">
                  <div class="tank__row-img">
                    <my-image
                      :lazyLoad="false"
                      :mobile="false"
                      :floder="'tank'"
                      :imgName="item.imgSvg"
                    />
                  </div>
                  <h4 class="tank__row-title">{{ item.name }}</h4>
                  <ul class="tank__row-list">
                    <li class="tank__row-item">
                      <div class="tank__row-desc" v-html="item.desc_1"></div>
                    </li>

                    <li class="tank__row-item">
                      <div class="tank__row-desc" v-html="item.desc_2"></div>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </div>

          <div v-if="windowMatch576" class="tank__mob mob">
            <div class="tank__img-mob">
              <div class="tank__clue clue-mob" v-show="!visible">
                <my-image
                  :lazyLoad="false"
                  :mobile="false"
                  :floder="'tank'"
                  imgName="clue-mob"
                />
              </div>
              <div
                id="rotation"
                @mouseenter="visible = true"
                @mouseleave="visible = false"
              >
                <my-image
                  v-for="(img, indexImg) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  :lazyLoad="false"
                  :key="indexImg"
                  :mobile="false"
                  :floder="'tank'"
                  :imgName="img"
                  :format="'.jpg'"
                />
              </div>
            </div>
            <div class="tank__content-mob">
              <div class="swiper-wrapper tank__slider">
                <div
                  v-for="(item, index) in tankList"
                  :key="index"
                  class="swiper-slide tank__slider-item"
                >
                  <div :class="`tank__row row-${index} `">
                    <div class="tank__block">
                      <div class="tank__row-img">
                        <my-image
                          :lazyLoad="false"
                          :mobile="false"
                          :floder="'tank'"
                          :imgName="item.imgSvg"
                        />
                      </div>
                      <h4 class="tank__row-title">{{ item.name }}</h4>
                      <ul class="tank__row-list">
                        <li class="tank__row-item">
                          <div
                            class="tank__row-desc"
                            v-html="item.desc_1"
                          ></div>
                        </li>
                        <li class="tank__row-item">
                          <div
                            class="tank__row-desc"
                            v-html="item.desc_2"
                          ></div>
                        </li>
                      </ul>
                    </div>
                    <div class="tank__img-mob">
                      <my-image
                        :lazyLoad="false"
                        :mobile="false"
                        :floder="'tank'"
                        :imgName="item.imgMob"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="tank-pagination"></div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { Swiper, Pagination } from "swiper";
import  MyImage  from "../UI/MyImage.vue";
import { ref, onMounted } from "vue";
import { useWindow } from "../hooks/useWindow";
import { useStore } from 'vuex';
const { windowMatch } = useWindow(1100);
const windowMatch576 =  ref(window.innerWidth < 577);

const store = useStore();

const tankList = ref([
  {
    name: "Модульная конструкция",
    active: false,
    img: "mainn-0",
    imgMob: "main-mob-00",
    imgSvg: "step-1",
    desc_1: `<p><span>Увеличивайте объём куба</span> — добавляйте новые модули.</p>`,
    desc_2: `<p><span>Ставьте брагу прямо в баке</span> — гидрозатвор присоединяется всего одним движением.</p>`
  },
  {
    name: "Измерительная линейка на баке",
    active: false,
    img: "mainn-2",
    imgMob: "main-mob-2",
    imgSvg: "step-3",
    desc_1: `<p><span>Достигайте совершенной точности</span> — разметка до 14 л позволяет отмерить ровно нужное количество браги.</p>`,
    desc_2: `<p><span>Выбирайте качество</span> — измерительная шкала нанесена лазером. Она не сотрётся и не деформируется.</p>`
  },
  {
    name: "Зиговка для фальш-дна",
    active: false,
    img: "mainn-1",
    imgMob: "main-mob-1",
    imgSvg: "step-2",
    desc_1: `<p><span>Перегоняйте зерновые и фруктовые браги</span> — фальш-дно предотвратит пригорание барды.</p>`,
    desc_2: `<p><span>Варите пиво</span> — на сито удобно установить мешок с дробиной. Движение жидкости обеспечит эффективное затирание.</p>`
  },
  {
    name: "Силиконовый клапан на 0,1 бар",
    active: false,
    img: "mainn-3",
    imgMob: "main-mob-3",
    imgSvg: "step-4",
    desc_1: `<p><span>Абсолютная безопасность.</span> Риски деформации куба сведены к минимуму.</p>`,
    desc_2: `<p><span>Оцените двойное защитное действие.</span> Компенсация избыточного давления и разрежения в баке.</p>`
  },
])
const visible = ref(false)
const currentImage = ref('mainn');

const handleScroll = () => {
  const tankLeft = document.querySelector(".tank__left");
  const tankImg = document.querySelector(".tank__img");

  if (!tankLeft || !tankImg) {
    return;
  }

  const top = tankLeft.offsetTop;
  const img = tankImg.offsetTop;
  const sub = img - top;
  const heightImg = tankImg.offsetHeight;
  const row0 = document.querySelector(".row-0").offsetHeight;
  const row1 = document.querySelector(".row-1").offsetHeight;
  const row2 = document.querySelector(".row-2").offsetHeight;
  const row3 = document.querySelector(".row-3").offsetHeight;
  const row5 = document.querySelector(".row-5").offsetHeight;

  if (sub > 0 && sub < (row0 + row5 - heightImg)) {
    currentImage.value = 'mainn';
  } else if (sub > (row0 + row5 - heightImg) && sub < (row0 + row5 + row1 - heightImg)) {
    currentImage.value = 'mainn-0';
  } else if (sub > (row0 + row5 + row1 - heightImg) && sub < (row0 + row5 + row1 + row2 - heightImg)) {
    currentImage.value = 'mainn-1';
  } else if (sub > (row0 + row5 + row1 + row2 - heightImg) && sub < (row0 + row5 + row1 + row2 + row3 - heightImg - 100)) {
    currentImage.value = 'mainn-2';
  } else if (sub > (row0 + row5 + row1 + row2 + row3 - heightImg - 100) && (sub + heightImg) <= (row0 + row5 + row1 + row2 + row3)) {
    currentImage.value = 'mainn-3';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  let myTankSwiper;
    const TankSwiper = () => {
      myTankSwiper = new Swiper(".tank__content-mob", {
        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,
        loop: false,

        pagination: {
          el: ".tank-pagination",
          type: "bullets",
          clickable: true,
        },

        modules: [Pagination],
      });
    };

 const windowbreakpoint576 = window.matchMedia("(max-width: 576px)");
    const breakpointChecker576 = () => {
      if (windowbreakpoint576.matches) {
        windowMatch576.value = true;
        setTimeout(()=> {
          return TankSwiper();
        }, 100)
        
        
      } else {
        windowMatch576.value = false;
        if (myTankSwiper) {
          return myTankSwiper.destroy(true, true);
        }
        
      }
    };

    windowbreakpoint576.addListener(breakpointChecker576);
    breakpointChecker576(); 
});

</script>

<script lang="js">
// скрипт для вращения главного фото
(function ($) {
  $.fn.image360 = function (options) {

    // настройки
    var settings = $.extend({
      'count_loop': 10, // количество оборотов на ширину блока
    }, options);

    var $main_div = this, // блок с картинками
      div_width, // ширирна блока
      count_imgs = 0, // количество картинок
      start_drag = false, // старт анимации
      position_X = 0, // положение курсора над картинкой
      index_img = 0, // индекс отображаемой картинки
      last_perc = 0, // предыдущее положение курсора относительно блока в процентах
      direction = true; // напавление движения мыши true - влево, false -  вправо

    var methods = {

      init: function (settings) {
        // ширина блока
        div_width = $main_div.width();
        // подготовка картинок
        $main_div.find("img").each(function (num) {
          if (num != 0) {
            $(this).hide();
          }
        });
        count_imgs = $main_div.find("img").length;
      },

      move_imgs: function (positionX) {
        if (positionX < 0) positionX = 0;
        if (positionX > div_width) positionX = div_width;
        var percent_div = (positionX / div_width) * 100;
        var percent_img = 100 / (settings.count_loop * count_imgs);
        if (Math.abs(percent_div - last_perc) > percent_img) {
          last_perc = percent_div;
          if (direction) {
            index_img--;
          } else {
            index_img++;
          }
          if (index_img < 0) index_img = (count_imgs - 1);
          if (index_img > (count_imgs - 1)) index_img = 0;
          $main_div.find("img").hide();
          $main_div.find("img").eq(index_img).show();
        }
      },

      resize: function () {
        div_width = $main_div.width();
      },

    };

    $main_div.bind('mousedown touchstart touchmove touchend mousemove click', function (e) {
      e.preventDefault();
      if (e.type === 'mousedown' || e.type === 'touchstart') {
        // клик или тач
        // старт
        start_drag = true;
        position_X = e.pageX;

      } else if (e.type === 'touchmove') {
        // движение тач
        if (start_drag) {
          var touch = e.originalEvent.touches[0];
          // движение влево
          if (position_X > touch.pageX) {
            direction = false;
          }
          // движение вправо
          if (position_X < touch.pageX) {
            direction = true;
          }
          position_X = touch.pageX;
          var offset_div = $main_div.offset();
          var positionX = (touch.pageX - offset_div.left);
          // анимация
          methods.move_imgs(positionX);
        }
      } else if (e.type === 'touchend') {
        // отпустили тач
        start_drag = false;
      }
    });

    // движение мышки
    $main_div.bind('mousemove', function (e) {
      e.preventDefault();
      if (start_drag) {
        // движение влево
        if (position_X > e.pageX) {
          direction = false;
        }
        // движение вправо
        if (position_X < e.pageX) {
          direction = true;
        }
        position_X = e.pageX;
        var offset_div = $main_div.offset();
        var positionX = (e.pageX - offset_div.left);
        // анимация
        methods.move_imgs(positionX);
      }
    });

    // остановка, если отпустили конпку мышки
    $(document).bind('mouseup', function (e) {
      start_drag = false;
    });

    $(window).resize(function () {
      methods.resize();
    });

    methods.init(settings);

  };
})(jQuery);

$(document).ready(function () {
  
   const windowbreakpoint = window.matchMedia("(max-width: 1100px) and (min-width: 577px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
       $("#rotation").image360();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
});		
</script>

<style lang="scss">
// @import "swiper/css/pagination";
@import "../../scss/_global.scss";

#rotation {
  cursor: pointer;
}

.tank {
  font-family: "Gilroy";
  padding: 100px 0;

  @media (max-width: 1199px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    overflow: hidden;
  }

  @media (max-width: 576px) {
    padding: 30px 0;
  }

  .tablet {
    @media (max-width: 576px) {
      display: none;
    }
  }

  .mob {
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
    .swiper-wrapper {
      @media (max-width: 576px) {
        width: 89%;
      }
    }
  }

  .tank__img {
    @media (max-width: 1100px) {
      position: sticky;
      max-width: 400px;
      top: 70px;
    }

    @media (max-width: 900px) {
      position: sticky;
      top: 110px;
    }

    @media (max-width: 800px) {
      position: sticky;
      top: 160px;
    }

    @media (max-width: 700px) {
      position: sticky;
      top: 180px;
    }
  }

  .active {
    opacity: 1;
  }

  .qwer-5 {
    align-self: center;
    grid-column: 2/3;
    grid-row: 1/3;
  }

  .qwer {
    position: relative;
    z-index: 1;
    user-select: none;
  }

  &__clue {
    animation: 5s header-clue infinite;
    z-index: 4;

    &:hover {
      animation: none;
      display: none;
      pointer-events: none;
    }

    @keyframes header-clue {
      0%,
      50%,
      100% {
        opacity: 0;
      }

      70%,
      80%,
      90% {
        opacity: 1;
      }
    }
  }

  .clue-mob {
    position: absolute;
  }

  &__img {
    align-self: center;
    grid-column: 2/3;
    grid-row: 1/3;
    position: relative;
    z-index: 5;

    &-mob {
      margin-bottom: 20px;
      position: relative;

      img {
        margin: 0 auto;
      }
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    // margin-bottom: 50px;
  }

  .row-0 {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .row-1 {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  .row-2 {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .row-3 {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  &__slider {
    overflow: visible !important;
  }

  &__block {
    height: auto;
    @media (max-width: 576px) {
      min-height: 430px;
    }
    @media (max-width: 450px) {
      min-height: 460px;
    }
    @media (max-width: 360px) {
      min-height: 490px;
    }
  }

  &__row {
    height: auto;
    max-width: 453px;
    border-radius: 10px;
    background: #f9f9f9;
    padding: 20px;
    text-align: center;

    @media (max-width: 576px) {
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-direction: column;
    }

    &-img {
      margin-bottom: 10px;

      img {
        margin: 0 auto;
        @include aspect() {
          aspect-ratio: 1/1;
          max-width: 81px;
        }
      }
    }

    &-title {
      margin-bottom: 20px;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      color: #c8ac6c;
      line-height: 125%;
      text-decoration-line: underline;
      text-decoration-color: #c8ac6c;
      cursor: pointer;
      padding: 10px 30px;
      border-radius: 10px;
      border: 3px solid #c8ac6c;

      @include fluidFontSize(18, 22, 768, 1920);

      @media (max-width: 1100px) {
        text-decoration-line: none;
        cursor: auto;
      }

      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 22px;
      }
    }

    &-title:hover {
      @media (min-width: 1101px) {
        opacity: 0.6;
        transition: opacity 0.3s;
      }
    }

    &-item {
      margin-bottom: 10px;

      img {
        margin: 0 auto 5px auto;
      }
    }

    &-desc {
      &::before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'%3E%3Cpath d='M6.875 14.875L12.5 20.5L21.875 11.125' stroke='%23C8AC6C' stroke-width='3' stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E");
        display: block;
      }

      p {
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 25px;
        text-align: left;
        @media (max-width: 576px) {
          font-size: 15px;
          line-height: 22px;
        }

        span {
          font-weight: 500;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
      flex-direction: column;
      margin-top: 20px;
    }
  }

  &__button {
    &-order {
      @media (max-width: 576px) {
        height: 74px !important;
      }
    }

    &-apparat {
      border: 4px solid #c8ac6c;
      color: #c8ac6c !important;
      background: #fff !important;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      @media (max-width: 576px) {
        height: 111px !important;
        flex-direction: column;
        padding: 0px 47px;
      }

      .tank__apparat-1 {
        display: block;
      }

      .tank__apparat-2 {
        display: none;
      }

      &:hover {
        background: #c8ac6c !important;
        color: #fff !important;

        .tank__apparat-1 {
          display: none;
        }

        .tank__apparat-2 {
          display: block;
        }
      }
    }
  }

  svg #fill_color {
    fill: #111;
  }

  .btn {
    width: 437px;

    @media (max-width: 576px) {
      width: 225px;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  &__tablet {
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
  }

  &__left {
    width: 50%;
  }

  &__right {
    width: 50%;

    .tank__row:not(:last-child) {
      @media (max-width: 1100px) {
        margin-bottom: 30px;
      }
    }
  }

  .tank-pagination {
    display: flex;
    justify-content: center;

    .swiper-pagination-bullet {
      width: 7px;
      height: 7px;
      background: #fff;
      border: 2px solid #c8ac6c;
      flex-shrink: 0;

      &-active {
        background: #c8ac6c;
      }
    }
  }
}
</style>