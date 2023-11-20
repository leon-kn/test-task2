import type { IProduct } from "~/types/types";

const KEY = "favorite";

export const getFavorite = (): IProduct[] => {
  if (process.client) {
    const data = localStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
  }

  return [];
};

export const saveFavorite = (favoriteInCart: IProduct[]) => {
  if (process.client) {
    localStorage.setItem(KEY, JSON.stringify(favoriteInCart));
  }
};

export default { getFavorite, saveFavorite };
