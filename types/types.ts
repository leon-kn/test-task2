export interface IItem {
  id: string;
  name: string;
  code: string;
  price: {
    old_price: number;
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
