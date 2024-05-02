import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";
import { storeDopModal } from "./storeDopModal.js";
import { DOPTYPES } from "../../js/dop-types";
import { MODULETYPES } from "../../js/module-types.js";

function reCount(item, action) {
  if (action == "plus") {
    if (item.selected == false) {
      item.selected = true;
    } else {
      item.count < 11 ? item.count++ : "";
    }
  } else {
    if (action == "minus") {
      item.count == 0 ? (item.selected = false) : "";
      item.count > 0 ? item.count-- : "";
    } else {
      if (action == "remove") {
        item.count = 0;
        item.selected = false;
      }
    }
  }
}

export default createStore({
  modules: {
    storePHP,
    storeDopModal,
  },
  state() {
    return {
      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      mobile: window.innerWidth > 769,

      main: [
        {
          id: goods.organic,
          price: goodsJson[goods.organic].price,
          oldPrice: goodsJson[goods.organic].oldPrice,
          name: "Самогонный аппарат  Союз Апполон",
          selected: true,
          count: 0,
        },
      ],

      modules: [
        {
          name: "Дополнительный кламп на 2 дюйма",
          id: goods.klamp,
          price: goodsJson[goods.klamp].price,
          oldPrice: goodsJson[goods.klamp].oldPrice,
          type: MODULETYPES.colonna,
          selected: false,
          orderSelected: false,
          img: "klamp",
          complect2: "Зачем в комплекте30",

          count: 0,
          modalText: `Кламповое крепление на 2 дюйма позволит установить любое дополнительное оборудование с соответствующим диаметром.`,
        },

        {
          name: "Дополнительный холодильник Димрота",
          id: goods.dimrot,
          price: goodsJson[goods.dimrot].price,
          oldPrice: goodsJson[goods.dimrot].oldPrice,
          type: MODULETYPES.colonna,
          selected: false,
          orderSelected: false,
          img: "dimrot",
          count: 0,
          modalText: `Устройство крепится при помощи клампового соединения на 2 дюйма и может выполнять роль холодильника или дефлегматора.
          <br>
          <ul style="margin-top: 10px">
            <li><b>Мощность</b> — 3 кВт</li>
            <li><b>Материал</b> — AISI 304</li>
            <li><b>Длина</b> — 15 см</li>
          </ul>
          <br>
          <sup> *</sup> В режиме Pot Still охладитель Димрота используется только в качестве холодильника и крепится к царге на выходе из узла.  
          <br><br>
          <sup> **</sup>  В режиме ректификации холодильник Димрота крепится над царгами и узлом отбора по жидкости и дополнительно выполняет роль дефлегматора.
          `,
        },

        {
          name: "Дополнительная стеклянная царга",
          id: goods.tsarga,
          price: goodsJson[goods.tsarga].price,
          oldPrice: goodsJson[goods.tsarga].oldPrice,
          type: MODULETYPES.colonna,
          selected: false,
          orderSelected: false,
          complect2: "Зачем в комплекте31",
          img: "tsarga",
          imgOrder: "tsarga-kit",
          count: 0,
          modalText: `Элемент царги, предназначенный для наблюдения процесса перегонки.
          <br><br>
          <ul>
            <li>Без брызгоуноса</li>
            <li>Без захлёба колонны</li>
            <li>С шикарным видом на барботаж</li>
          </ul>
          <br>
          Прочное боросиликатное стекло легко переносит нагрев до 180 °C. Оно не боится перепадов температуры и не разобъётся при случайном падении.
          `,
        },

        {
          name: "Дополнительный узел отбора по жидкости",
          id: goods.uzel,
          price: goodsJson[goods.uzel].price,
          oldPrice: goodsJson[goods.uzel].oldPrice,
          type: MODULETYPES.colonna,
          selected: false,
          orderSelected: false,
          img: "uzel",
          imgOrder: "uzel-kit",
          complect2: "Зачем в комплекте22",
          complect1: "Зачем в комплекте2",
          count: 0,
          modalText: `Устройство стабилизирует работу колонны в условиях перепадов температур. Оно устанавливается перед дефлегматором и предназначается для:
          <br><br>
          
          <ul>
            <li>Орошения насадки</li>
            <li>Регулировки флегмового числа</li>
            <li>Отбора дистиллята</li>
          </ul>
          
          `,
        },

        {
          name: "Набор армированных силиконовых прокладок",
          id: goods.silicon_prok,
          price: goodsJson[goods.silicon_prok].price,
          oldPrice: goodsJson[goods.silicon_prok].oldPrice,
          type: MODULETYPES.colonna,
          selected: false,
          orderSelected: false,

          img: "silicon_prok",
          imgOrder: "silicon_prok-kit",
          count: 0,
          modalText: `
          Для герметизации соединений самогонного аппарата используются специальные прокладки. Как и любой другой расходник, со временем они могут изнашиваться.
          <br><br>

          Чтобы внезапное повреждение не застало вас врасплох, позаботьтесь о запасных комплектующих.
          <br><br>

          Армированный силикон не только долговечен, но и совершенно безопасен (в отличие от дешевой резины) для использования в пищевой промышленности.
          `,
        },

        {
          name: "Съёмный модуль на 10&nbsp;л",
          id: goods.add10l,
          price: goodsJson[goods.add10l].price,
          oldPrice: goodsJson[goods.add10l].oldPrice,
          type: MODULETYPES.bak,
          selected: false,
          orderSelected: false,
          img: "add10l",
          imgOrder: "add10l-kit",

          count: 0,
          modalText: `Если базового объёма куба недостаточно, вы легко можете увеличить его дополнительными модулями. 
          Они: <br><br>
          
          <ul>
            <li>Съёмные и легкозаменимые</li>
            <li>Сделаны из медицинской нержавеющей стали AISI 304</li>
            <li>Легко крепятся к баку с помощью стальных хомутов</li>
          </ul>
          
          `,
        },

        {
          name: "Съёмный модуль на 20&nbsp;л",
          id: goods.add20l,
          price: goodsJson[goods.add20l].price,
          oldPrice: goodsJson[goods.add20l].oldPrice,
          type: MODULETYPES.bak,
          selected: false,
          orderSelected: false,
          imgOrder: "add20l-kit",
          img: "add20l",
          count: 0,
          modalText: `Если базового объёма куба недостаточно, вы легко можете увеличить его дополнительными модулями. 
          Они: <br><br>
          
          <ul>
            <li>Съёмные и легкозаменимые</li>
            <li>Сделаны из медицинской нержавеющей стали AISI 304</li>
            <li>Легко крепятся к баку с помощью стальных хомутов</li>
          </ul>
          
          `,
        },

        {
          name: "Дополнительный хомут (10,5&nbsp;дюймов)",
          id: goods.homut,
          price: goodsJson[goods.homut].price,
          oldPrice: goodsJson[goods.homut].oldPrice,
          type: MODULETYPES.bak,
          selected: false,
          orderSelected: false,
          img: "homut",
          count: 0,
          modalText: `Крышка и каждый новый модуль для куба фиксируются стяжными хомутами. Прочная прослойка из армированного силикона гарантирует 100% герметичность, а регулируемая система крепления обеспечивает быструю и надёжную стыковку деталей.`,
        },

        {
          name: "ТЭН на 1,5 кВт",
          id: goods.ten,
          price: goodsJson[goods.ten].price,
          oldPrice: goodsJson[goods.ten].oldPrice,
          type: MODULETYPES.bak,
          selected: false,
          orderSelected: false,
          img: "ten",
          imgOrder: "ten-kit",
          complect1: "Зачем в комплекте3",

          count: 0,
          modalText: `Мощнейшая колонна Organic 3 PRO состоит из:  
          <br><br>
          <ul>
            <li>Холодильника Димрота</li>
            <li>Стеклянной царги</li>
            <li>Клампа на 2 дюйма</li>   
            <li>Узла отбора по жидкости</li>
          </ul>

          <br>
          Конструкция обеспечивает рекордно-низкий расход воды (...) и электричества (...), гарантируя стабильно-высокую скорость перегонки(...).
          
          `,
        },

        {
          name: "Щелевое сито",
          id: goods.sito,
          price: goodsJson[goods.sito].price,
          oldPrice: goodsJson[goods.sito].oldPrice,
          type: MODULETYPES.bak,
          selected: false,
          orderSelected: false,
          img: "sito",
          imgOrder: "sito-kit",
          count: 0,
          complect1: "Зачем в комплекте1",
          modalText: `Organiс 3 PRO предоставляет максимум возможностей. Пробуйте новое! Варите не только классические, но и густые, зерновые/фруктовые браги или даже пиво.
          
          <br><br>
          Зиговка на кубе позволяет разместить в нём специальное сито, которое заметно облегчит фильтрацию солода от дистиллятов. Оно не даст гуще опуститься на дно и пригореть.
          `,
        },
      ],

      dops: [
        {
          id: goods.rpn30cu,
          price: goodsJson[goods.rpn30cu].price,
          oldPrice: goodsJson[goods.rpn30cu].oldPrice,
          name: "РПН, медь, 30 см",
          type: DOPTYPES.materials,
          selected: false,
          img: "rpn30",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.rpn90cu,
          price: goodsJson[goods.rpn90cu].price,
          oldPrice: goodsJson[goods.rpn90cu].oldPrice,
          name: "РПН, медь, 90 см",
          type: DOPTYPES.materials,
          selected: false,
          img: "rpn90",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.rpn30ner,
          price: goodsJson[goods.rpn30ner].price,
          oldPrice: goodsJson[goods.rpn30ner].oldPrice,
          name: "РПН, нержавейка, 30 см",
          type: DOPTYPES.materials,
          selected: false,
          img: "rpn30",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.rpn90ner,
          price: goodsJson[goods.rpn90ner].price,
          oldPrice: goodsJson[goods.rpn90ner].oldPrice,
          name: "РПН, нержавейка, 90 см",
          type: DOPTYPES.materials,
          selected: false,
          img: "rpn90",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.spn100,
          price: goodsJson[goods.spn100].price,
          oldPrice: goodsJson[goods.spn100].oldPrice,
          name: "СПН (3,5 мм х 3,5 мм), медь, 0,1 кг",
          type: DOPTYPES.materials,
          selected: false,
          img: "spn100",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.spn500cu,
          price: goodsJson[goods.spn500cu].price,
          oldPrice: goodsJson[goods.spn500cu].oldPrice,
          name: "СПН (3,5 мм х 3,5 мм), медь, 0,5 кг",
          type: DOPTYPES.materials,
          selected: false,
          img: "spn500",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.spn500ner,
          price: goodsJson[goods.spn500ner].price,
          oldPrice: goodsJson[goods.spn500ner].oldPrice,
          name: "СПН (3,5 мм х 3,5 мм), нержавейка, 0,5 кг",
          type: DOPTYPES.materials,
          selected: false,
          img: "spn500",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.colonna,
          price: goodsJson[goods.colonna].price,
          oldPrice: goodsJson[goods.colonna].oldPrice,
          name: "Угольная колонна",
          type: DOPTYPES.access,
          selected: false,
          img: "colonna",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.popugai,
          price: goodsJson[goods.popugai].price,
          oldPrice: goodsJson[goods.popugai].oldPrice,
          name: "Попугай",
          type: DOPTYPES.access,
          selected: false,
          img: "popugai",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.meas_cyl,
          price: goodsJson[goods.meas_cyl].price,
          oldPrice: goodsJson[goods.meas_cyl].oldPrice,
          name: "Набор мерных цилиндров (50, 100, 250, 500 мл)",
          type: DOPTYPES.measure,
          selected: false,
          img: "meas_cyl",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.plita,
          price: goodsJson[goods.plita].price,
          oldPrice: goodsJson[goods.plita].oldPrice,
          name: "Плита индукционная, 2 кВт",
          type: DOPTYPES.access,
          selected: false,
          img: "plita",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.areom,
          price: goodsJson[goods.areom].price,
          oldPrice: goodsJson[goods.areom].oldPrice,
          name: "Набор ареометров (0-40%, 40-70%, 70-100%)",
          type: DOPTYPES.measure,
          selected: false,
          img: "areom",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },

        {
          id: goods.spirtometr,
          price: goodsJson[goods.spirtometr].price,
          oldPrice: goodsJson[goods.spirtometr].oldPrice,
          name: "Спиртометр бытовой",
          type: DOPTYPES.measure,
          selected: false,
          img: "spirtometr",
          count: 0,
          icon: "name-icon",
          modalText: `Стеклянная царга на колонне нужна для максимального контроля за процессом перегонки. С её помощью можно заметить важные особенности в приготовлении дистиллята (например, слишком сильное кипение). Впрочем, некоторые винокуры ставят царгу просто из интереса или для красоты.`,
        },
      ],

      kurs: {
        id: 1,
        price: 2990,
        oldPrice: 4500,
      },

      organic_colonna: {
        id: goods.organic_colonna,
        price: goodsJson[goods.organic_colonna].price,
        oldPrice: goodsJson[goods.organic_colonna].oldPrice,
      },

      organic_cube: {
        id: goods.organic_cube,
        price: goodsJson[goods.organic_cube].price,
        oldPrice: goodsJson[goods.organic_cube].oldPrice,
      },
    };
  },
  mutations: {
    setMobile(state, value) {
      state.mobile = value;
    },

    changeUserRassrochka(state, value) {
      state.user.rassrochka = value;
    },

    selectMain(state, id) {
      state.main.forEach((element) => {
        element.id == id
          ? (element.selected = true)
          : (element.selected = false);
      });
    },

    setCountDop(state, { id, action }) {
      reCount(
        state.dops.find((el) => el.id == id),
        action
      );
    },

    setCountModule(state, { id, action }) {
      reCount(
        state.modules.find((el) => el.id == id),
        action
      );
    },

    addModuleToCart(state, id) {
      state.modules.find((el) => el.id == id).selected = true;
    },

    setCountMain(state, action) {
      let main = state.main.find((el) => el.selected);

      if (action == "plus") {
        main.count < 11 ? main.count++ : "";
      } else {
        if (action == "minus") {
          main.count > 0 ? main.count-- : "";
        }
      }
    },

    orderToCart(state) {
      state.modules.forEach((element) => {
        element.orderSelected
          ? ((element.orderSelected = false), (element.selected = true))
          : "";
      });
    },

    complectToCart(state, field) {
      state.modules
        .filter((el) => Object.keys(el).includes(field))
        .forEach((element) => {
          element.selected = true;
        });
    },
  },

  getters: {
    getMobile(state) {
      return state.mobile;
    },

    getMainId(state) {
      return state.main.find((el) => el.selected).id;
    },

    getMainItem(state) {
      return state.main.find((el) => el.selected);
    },

    getMain(state) {
      return state.main;
    },

    getMainFirst(state) {
      return state.main[0];
    },

    getMainPrices(state) {
      return [state.main[0].price, state.main[0].oldPrice];
    },

    // getMainPricesTen(state) {
    //   return [state.main[0].price, state.main[0].oldPrice];
    // },

    getDops(state) {
      return state.dops;
    },

    getModules(state) {
      return state.modules;
    },

    getKurs(state) {
      return state.kurs;
    },

    getOrganicColonna(state) {
      return state.organic_colonna;
    },

    getOrganicCube(state) {
      return state.organic_cube;
    },

    getUser(state) {
      return state.user;
    },
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getLastOldPrice(state) {
      return 0;
      // return state.dops.reduce(function (sum, dop) {
      //   return dop.selected ? sum + dop.oldPrice : sum;
      // }, state.main.find((el) => el.selected).oldPrice);
    },

    getTen(state) {
      return state.modules.find((el) => el.id == goods.ten);
    },

    getCountOfCart(state) {
      let dopAndMain = state.dops.reduce(function (count, dop) {
        return dop.selected ? count + 1 : count;
      }, 1);

      let modules = state.modules.reduce(function (count, module) {
        return module.selected ? count + 1 : count;
      }, 0);

      return dopAndMain + modules;
    },

    getLastPrice(state) {
      let main = state.main.find((el) => el.selected);

      let mainPrice = main.price * (main.count + 1);
      let dopPrice = state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price * (dop.count + 1) : sum;
      }, 0);
      let modulePrice = state.modules.reduce(function (sum, module) {
        return module.selected ? sum + module.price * (module.count + 1) : sum;
      }, 0);

      return mainPrice + dopPrice + modulePrice;
    },

    getPriceOrder(state) {
      return state.modules.reduce(function (sum, module) {
        return module.orderSelected ? sum + module.price : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getOldPriceOrder(state) {
      return state.modules.reduce(function (sum, module) {
        return module.orderSelected ? sum + module.oldPrice : sum;
      }, state.main.find((el) => el.selected).oldPrice);
    },

    getComplect1(state) {
      return state.modules.filter((el) => el.complect1);
    },

    getComplect2(state) {
      return state.modules.filter((el) => el.complect2);
    },
  },
});
