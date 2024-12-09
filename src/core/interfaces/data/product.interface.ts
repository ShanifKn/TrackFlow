export interface Product {
  _id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ProductData {
  _id?: number;
  name: string;
  category: string;
  brand: string;
  specification?: string;
  description?: string;
  imageUrls: string[];
}
