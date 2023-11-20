import type { IProduct } from "~/types/types";

const KEY = "cart";

export const getCart = (): IProduct[] => {
  if (process.client) {
    const data = localStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
  }

  return []
};

export const saveCart = (productsInCart: IProduct[]) => {
  if (process.client) {
    localStorage.setItem(KEY, JSON.stringify(productsInCart));
  }
};

export default { getCart, saveCart };
