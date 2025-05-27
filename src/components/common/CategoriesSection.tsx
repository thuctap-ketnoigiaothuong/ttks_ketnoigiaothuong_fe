import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CategoryCard } from './CategoryCard';
import api from '../../lib/axios';
import { API_ENDPOINTS } from '../../lib/apiConfig';

interface Category {
    categoryID: number;
    categoryName: string;
    parentCategoryID: number | null;
    parentCategoryName: number | null;
    categoryImage: string;
}

// Dữ liệu fallback nếu không gọi được API
const fallbackCategories: Category[] = [
    {
        categoryID: 1,
        categoryName: 'Photovoltaics',
        categoryImage: '/categories/photo.png',
        parentCategoryID: 1,
        parentCategoryName: null,
    },
    {
        categoryID: 2,
        categoryName: 'Electronics',
        categoryImage: '/categories/electronics.png',
        parentCategoryID: 2,
        parentCategoryName: null,
    },
    {
        categoryID: 3,
        categoryName: 'Light Sources',
        categoryImage: '/categories/light.png',
        parentCategoryID: 3,
        parentCategoryName: null,
    },
    {
        categoryID: 4,
        categoryName: 'Ventilation and Heating',
        categoryImage: '/categories/vent.png',
        parentCategoryID: 4,
        parentCategoryName: null,
    },
];

const CategoriesSection = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await api.get(API_ENDPOINTS.getAllCategories);
                console.log("Fetched categories:", res.data);
                if (Array.isArray(res.data)) {
                setCategories(res.data.slice(0, 4));
                } else {
                if (Array.isArray(res.data.data)) {
                    setCategories(res.data.data.slice(0, 4));
                } else {
                    console.warn("API trả về dữ liệu không hợp lệ. Dùng fallback.");
                    setCategories(fallbackCategories);
                }
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                setCategories(fallbackCategories);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    return (
        <section className="py-6 px-20 bg-white">
            <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mt-10">
                <h2 className="text-3xl font-bold leading-tight text-neutral-950">Lĩnh vực</h2>
                <button onClick={() => navigate("/categories")} className="flex gap-1 items-center my-auto text-base font-medium text-blue-600 transform transition-transform hover:translate-x-1 hover:underline">
                    <span>Xem tất cả lĩnh vực</span>
                    <img src="arrowright.png" alt="Arrow right" className="w-4" />
                </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {loading ? (
                    <p className="text-gray-500 col-span-full text-center">Loading ...</p>
                ) : (
                    categories
                        .filter((category) => category.parentCategoryID !== null)
                        .map((category, index) => (
                            <CategoryCard key={index} categoryID={category.categoryID} categoryName={category.categoryName} categoryImage={category.categoryImage} />
                        ))
                )}
            </div>
        </section>
    );
};

export default CategoriesSection;
