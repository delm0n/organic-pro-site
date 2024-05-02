export const storePHP = {
  state: () => ({
    webpSupport: webp,
    test: testVersion,
    year: year,
    phone: phone,

    month: monthForHeader,
    tomorrowPlus3__fulldate: tomorrowPlus3__fulldate,
    tomorrowWithoutZero: tomorrowWithoutZero,
    // tomorrowWithoutZeroPlus3: tomorrowWithoutZeroPlus3,

    today: todayWithoutZero,

    formHelicon: hideForm.innerHTML,
    modalSuccess: ["", ""],
  }),
  mutations: {
    openModalSuccessManager(state) {
      state.modalSuccess = [
        "Благодарим за обращение!!",
        "Менеджер уже получил Вашу контактную информацию, он свяжется с Вами в течение 10 минут. Проверьте свой номер - вдруг Вы ошиблись?",
      ];
    },

    openModalSuccessOrder(state) {
      state.modalSuccess = [
        "Благодарим за заказ!",
        "Менеджер уже получил Ваше обращение, он свяжется с Вами в течение 10 минут. Проверьте свой номер - вдруг Вы ошиблись?",
      ];
    },
  },
  getters: {
    getYear(state) {
      return state.year;
    },
    getToday(state) {
      return state.today;
    },
    getMonth(state) {
      return state.month;
    },
    getPhone(state) {
      return state.phone;
    },
    getWebp(state) {
      return state.webpSupport;
    },
    getMetric(state) {
      return state.formHelicon;
    },
    isTest(state) {
      return state.test;
    },
    tomorrowWithoutZero(state) {
      return state.tomorrowWithoutZero;
    },
    tomorrowPlus3__fulldate(state) {
      return state.tomorrowPlus3__fulldate;
    },
    tomorrowWithoutZeroPlus3(state) {
      return Number(state.tomorrowPlus3__fulldate.split(",")[0]);
    },
    getModalSuccess(state) {
      return state.modalSuccess;
    },
  },
};
