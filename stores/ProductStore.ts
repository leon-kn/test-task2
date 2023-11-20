import { productsData } from "~/data/products";
import type { IProduct } from "~/types/types";
import CartService from "~/services/cart.service";
import cartService from "../services/cart.service";

export const useProductStore = defineStore("productStore", () => {
  const products = ref<IProduct[]>(productsData);
  const sort = ref<string | null>(null);
  const filter = ref<number | null>(null);
  // const cart = ref<IProduct[]>([]);

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

  // const getCart = (): IProduct[] => {
  //   const cart = CartService.getCart();
  //   console.log(cart);
  //   return cart;
  // };

  // const cart = ref<IProduct[]>(getCart());

  const addProductToCart = (product: IProduct) => {
    const cart = CartService.getCart();
    cart.push(product);
    cartService.saveCart(cart);
  };

  return {
    products,
    sort,
    filter,
    filteredProducts,
    setSort,
    setFilter,
    addProductToCart,
  };
});
