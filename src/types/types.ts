export type Products = {
  id: number | string;
  price: number;
  quantity: number;
  name: string;
  description: string;
  discount: number;
  count: number;
  images: [
    {
      image_path: string;
    }
  ];
};

export type ProductsState = {
  products: Products[];
  loading: boolean;
  error: string | null;
};

export type CartState = {
  carts: Products[];
};

export type FavoriteState = {
  favorites: Products[];
};
