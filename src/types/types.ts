export type Products = {
  id: number;
  price: number;
  quantity: number;
  name: string;
  description: string;
  discount: number;
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
