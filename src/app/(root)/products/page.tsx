"use client";

import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import { Product } from "@/core/interfaces/data/product.interface";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const products: Product[] = [
  {
    _id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    description: "High-quality wireless headphones with noise-canceling features.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 2,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    description: "Comfortable and adjustable office chair with lumbar support.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 3,
    name: "Smartphone 128GB",
    category: "Electronics",
    description: "Latest model smartphone with 128GB storage and a high-resolution camera.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 4,
    name: "Running Shoes",
    category: "Fashion",
    description: "Lightweight running shoes designed for comfort and performance.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 5,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    description: "Eco-friendly reusable water bottle with vacuum insulation.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 6,
    name: "Gaming Laptop",
    category: "Electronics",
    description: "Powerful gaming laptop with high-end graphics and processing speed.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 7,
    name: "4K Ultra HD TV",
    category: "Electronics",
    description: "Ultra HD TV with vibrant colors and stunning resolution.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 8,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    description: "Non-slip yoga mat with cushioning for superior comfort.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 9,
    name: "Desk Lamp",
    category: "Home & Office",
    description: "Adjustable desk lamp with energy-efficient LED lighting.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 10,
    name: "Cordless Vacuum Cleaner",
    category: "Home Appliances",
    description: "Lightweight and powerful vacuum cleaner for quick cleanups.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const page = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl text-black font-semibold ">Product Management</h1>
        <Button
          className="p-2 bg-white text-black border-2 border-black rounded-full text-xs px-3 py-2 hover:bg-white"
          onClick={() => router.back()}>
          <ArrowLeft />
          BACK
        </Button>
      </div>

      <ProductList data={products} />
    </>
  );
};

export default page;
