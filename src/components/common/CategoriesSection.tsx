"use client";

import { useEffect, useState } from "react";
import { CategoryCard } from "./CategoryCard";
import api from "../../lib/axios";
import { API_ENDPOINTS } from "../../lib/apiConfig";

interface Category {
  name: string;
  image: string;
}

// Dữ liệu fallback nếu không gọi được API
const fallbackCategories: Category[] = [
  { name: 'Photovoltaics', image: '/categories/photo.png' },
  { name: 'Electronics', image: '/categories/electronics.png' },
  { name: 'Light Sources', image: '/categories/light.png' },
  { name: 'Ventilation and Heating', image: '/categories/vent.png' }
];

const CategoriesSection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get(API_ENDPOINTS.categories);
        setCategories(res.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories(fallbackCategories);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-6">
      <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mt-10">
        <h2 className="text-3xl font-bold leading-tight text-neutral-950">Recommended Categories</h2>
        <button className="flex gap-1 items-center my-auto text-base font-medium text-blue-600">
          <span>Show all categories</span>
          <img src="arrowright.png" alt="Arrow right" className="w-4" />
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <p className="text-gray-500 col-span-full text-center">Loading categories...</p>
        ) : (
          categories.map((category, index) => (
            <CategoryCard key={index} name={category.name} image={category.image} />
          ))
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
