import { productsData } from "~/data/products";
import type { IProduct } from "~/types/types";
import { useLocalStorage } from "@vueuse/core";

export const useProductStore = defineStore("productStore", () => {
  const cart = useLocalStorage<IProduct[]>("cart", ref([]), {});

  const products = ref<IProduct[]>(productsData);
  const sort = ref<string | null>(null);
  const filter = ref<number | null>(null);

  const filteredProducts = computed<IProduct[]>(() => {
    let filteredProducts = products.value;

    if (filter.value) {
      filteredProducts = filteredProducts.filter((item) => item.material === filter.value);
    }

    if (sort.value === "asc") {
      filteredProducts.sort((a, b) => {
        return a.price.current_price - b.price.current_price;
      });
    } else if (sort.value === "desc") {
      filteredProducts.sort((a, b) => {
        return b.price.current_price - a.price.current_price;
      });
    }

    return filteredProducts;
  });

  const setSort = (newSort: string) => {
    sort.value = newSort;
  };

  const setFilter = (newFilter: string) => {
    filter.value = Number(newFilter);
  };

  return {
    products,
    sort,
    filter,
    filteredProducts,
    setSort,
    setFilter,
    cart,
  };
});
