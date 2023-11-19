export interface IItem {
  id: string;
  name: string;
  code: string | null;
  price: {
    old_price: number | null;
    current_price: number;
  };
  image: {
    url: string;
  };
  material: number;
}

export interface IMaterial {
  id: string;
  name: string;
}

export interface Crumb {
  label: string;
  url?: string;
}
