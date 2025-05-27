import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../lib/axios';
import { API_ENDPOINTS } from '../lib/apiConfig';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    category: string;
}

interface Enterprise {
    id: number;
    name: string;
    logo: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    products: Product[];
}

// Fallback data nếu API lỗi
const fallbackEnterprise: Enterprise = {
    id: 1,
    name: 'Công ty TNHH ABC',
    logo: 'https://via.placeholder.com/150',
    description:
        'Công ty chuyên cung cấp các sản phẩm công nghệ chất lượng cao với hơn 10 năm kinh nghiệm trong ngành.',
    email: 'contact@abc.com',
    phone: '0123456789',
    address: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
    website: 'www.abc.com',
    products: [
        {
            id: 1,
            name: 'Sản phẩm A',
            description: 'Mô tả chi tiết về sản phẩm A',
            image: 'https://via.placeholder.com/200',
            price: '1.000.000 VNĐ',
            category: 'Công nghệ',
        },
        {
            id: 2,
            name: 'Sản phẩm B',
            description: 'Mô tả chi tiết về sản phẩm B',
            image: 'https://via.placeholder.com/200',
            price: '2.000.000 VNĐ',
            category: 'Công nghệ',
        },
    ],
};

const EnterprisePage = () => {
    const { companyId } = useParams();
    const [enterprise, setEnterprise] = useState<Enterprise>(fallbackEnterprise);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchEnterprise = async () => {
            try {
                const response = await api.get(API_ENDPOINTS.getCompanyProfileById(Number(companyId)));
                if (response.data) {
                    setEnterprise(response.data);
                } else {
                    setEnterprise(fallbackEnterprise);
                }
            } catch (err) {
                console.error('API lỗi:', err);
                setEnterprise(fallbackEnterprise);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchEnterprise();
    }, [companyId]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
                <span>Trang chủ</span>
                <span className="mx-2">/</span>
                <span>Doanh nghiệp</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{enterprise.name}</span>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 pb-16">
                {/* Error Message */}
                {error && (
                    <div className="text-red-500 mb-4">
                        Không thể tải thông tin doanh nghiệp từ máy chủ. Hiển thị dữ liệu dự phòng.
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <svg
                            className="animate-spin h-10 w-10 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                    </div>
                ) : (
                    <>
                        {/* Thông tin doanh nghiệp */}
                        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/4">
                                    <img
                                        src={enterprise.logo}
                                        alt={enterprise.name}
                                        className="w-full max-w-[200px] rounded-lg"
                                    />
                                </div>
                                <div className="md:w-3/4">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{enterprise.name}</h1>
                                    <p className="text-gray-600 mb-6">{enterprise.description}</p>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-gray-600">
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            {enterprise.email}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            {enterprise.phone}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            {enterprise.address}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            </svg>
                                            {enterprise.website}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Danh sách sản phẩm */}
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {enterprise.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                    {product.category}
                                                </span>
                                                <span className="text-lg font-semibold text-gray-900">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default EnterprisePage;
