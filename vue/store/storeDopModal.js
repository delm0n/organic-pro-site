export const storeDopModal = {
  state: () => ({
    dopModal: {
      id: 0,
      name: "",
      text: "",
      img: "",
      price: 0,
      oldPrice: 0,
      floder: "src",
    },
  }),

  mutations: {
    setDopModal(state, { id, name, text, img, price, oldPrice, floder }) {
      state.dopModal.floder = floder;
      state.dopModal.img = img;
      state.dopModal.id = id;
      state.dopModal.name = name;
      state.dopModal.text = text;
      state.dopModal.price = price;
      state.dopModal.oldPrice = oldPrice;
    },
  },

  getters: {
    getDopModal(state) {
      return state.dopModal;
    },
  },
};
