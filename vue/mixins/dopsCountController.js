import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setCountDop"]),

    // dop
    addToCart(id) {
      this.setCountDop({ id: id, action: "plus" });
    },
    removeItemCart(id) {
      this.setCountDop({ id: id, action: "minus" });
    },
    removeCart(id) {
      this.setCountDop({ id: id, action: "remove" });
    },
  },
};
