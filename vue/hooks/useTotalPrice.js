import { computed } from "vue";

export default function useTotalPrice(products, mainProducts) {
  const getTotalPrice = computed(() => {
    let priceProduct = products.value.reduce(
      (acc, item) => {
        if (item.active) {
          return item.price + acc;
        }
        return acc;
      },
      0
    );
    let mainPricePriduct = mainProducts.value.reduce(
      (acc, item) => {
        if (item.active) {
          return item.price + acc;
        }
        return acc;
      },
      0
    );
    return priceProduct + mainPricePriduct;
  });

  const getOldTotalPrice = computed(() => {
    let priceProduct = products.value.reduce(
      (acc, item) => {
        if (item.active) {
          return item.oldPrice + acc;
        }
        return acc;
      },
      0
    );
    let mainPricePriduct = mainProducts.value.reduce(
      (acc, item) => {
        if (item.active) {
          return item.oldPrice + acc;
        }
        return acc;
      },
      0
    );
    return priceProduct + mainPricePriduct;
  });

  return {
    getTotalPrice, getOldTotalPrice
  }
}