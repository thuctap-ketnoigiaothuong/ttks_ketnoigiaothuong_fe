"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import api from "../../lib/axios";
import { API_ENDPOINTS } from "../../lib/apiConfig";

interface Product {
  id: number;
  image: string;
  discount?: string;
  brand: string;
  partNo: string;
  name: string;
  parameters: string[];
  price: string;
  originalPrice?: string;
  inStock?: boolean;
  isAddedToCart?: boolean;
  company?: string;
}

// Dữ liệu cứng fallback
const fallbackProducts: Product[] = [
  {
    id: 1,
    image: "/products/product-1.png",
    discount: "-30%",
    brand: "Omnires",
    partNo: "2123532",
    name: "Connection with a handle Omnires round",
    parameters: [
      "Material of execution: brass",
      "Manufacturer's color: chrome",
      "Guarantee: 5 years"
    ],
    price: "$45.00",
    originalPrice: "$55.00",
    inStock: true
  },
  {
    id: 2,
    image: "/products/product-2.png",
    discount: "-15%",
    brand: "GoodHome",
    partNo: "234565",
    name: "Countertop washbasin GoodHome Tekapo",
    parameters: [
      "Basin width : 45 cm",
      "Basin height: 12 cm",
      "Basin depth: 35 cm"
    ],
    price: "$51.00",
    originalPrice: "$64.00",
    inStock: true
  },
  {
    id: 3,
    image: "/products/product-3.png",
    discount: "-15%",
    brand: "GoodHome",
    partNo: "234565",
    name: "Perforated Simpson tape 25 x 2500 x 2 mm",
    parameters: [
      "Basin width : 45 cm",
      "Basin height: 12 cm",
      "Basin depth: 35 cm"
    ],
    price: "$51.00",
    originalPrice: "$64.00",
    inStock: true,
    isAddedToCart: true
  },
  {
    id: 4,
    image: "/products/product-4.png",
    discount: "-15%",
    brand: "GoodHome",
    partNo: "234565",
    name: "AMBER DECOR Bulb 60W, E27 590",
    parameters: [
      "Basin width : 45 cm",
      "Basin height: 12 cm",
      "Basin depth: 35 cm"
    ],
    price: "$51.00",
    originalPrice: "$64.00",
    inStock: false
  }
];

export const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(API_ENDPOINTS.products);
        console.log("Fetched products:", response.data);

        // Đảm bảo response.data là mảng
        if (Array.isArray(response.data)) {
          setProducts(response.data.slice(0, 4));
        } else {
          console.warn("API không trả về mảng, fallback sang dữ liệu cứng");
          setProducts(fallbackProducts);
        }

        // Nếu API trả về dạng { data: [...] }, dùng đoạn này:
        // if (Array.isArray(response.data.data)) {
        //   setProducts(response.data.data.slice(0, 4));
        // } else {
        //   console.warn("API không trả về data dạng mảng, fallback");
        //   setProducts(fallbackProducts);
        // }

      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(fallbackProducts); // fallback nếu API lỗi
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading products...</div>;
  }

  return (
    <section className="py-6 px-20 bg-white"> 
      <div className="flex justify-between w-full mb-8">
        <h2 className="text-3xl font-bold leading-tight text-neutral-950">
          Recommended products
        </h2>
        <button className="flex gap-1 items-center text-base font-medium text-blue-600 transform transition-transform hover:translate-x-1 hover:underline">
          <span>Show all recommended products</span>
          <img src="arrowright.png" alt="Arrow right" className="w-4" />
        </button>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              discount={product.discount}
              brand={product.brand}
              partNo={product.partNo}
              name={product.name}
              parameters={product.parameters}
              price={product.price}
              originalPrice={product.originalPrice}
              inStock={product.inStock}
              isAddedToCart={product.isAddedToCart}
              company={product.company ?? "N/A"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
