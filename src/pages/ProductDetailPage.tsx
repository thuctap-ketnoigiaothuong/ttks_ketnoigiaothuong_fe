import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../lib/axios';
import { API_ENDPOINTS } from '../lib/apiConfig';

import { ProductGallery } from "../components/common/ProductGallery";
import { ProductInfo } from "../components/common/ProductInfo";
import { CompanyCard } from '../components/common/CompanyCard';
import { ProductTabs } from "../components/common/ProductTabs";
import { NewsletterBanner } from "../components/common/NewsletterBanner";
import { RelatedProducts } from "../components/common/RelatedProducts";

interface DiscountTier {
    quantity: string;
    discount: string;
    price: string;
  }
  
  interface Review {
    name: string;
    comment: string;
    rating: number;
  }
  
  interface ShippingInfo {
    description: string;
    types: { type: string; cost: string }[];
  }
  
  interface PaymentInfo {
    description: string;
    methods: { type: string; info: string }[];
  }
  
  interface Product {
    id: number;
    name: string;
    brand: string;
    partNo: string;
    rating: number;
    ratingCount: number;
    inStock: boolean;
    discountTiers: DiscountTier[];
    yourPrice: string;
    originalPrice: string;
    variants: string[];
    unit: string;
    quantity: number;
    images: string[];
    companyId: number;
    description?: string;
    technicalDetails?: Record<string, string>;
    attachments?: string[];
    reviews?: Review[];
    shipping?: ShippingInfo;
    payments?: PaymentInfo;
  }
  
  const fallbackProduct = {
    id: 10000,
    name: 'Product name for maximum two text lines title could be very long',
    brand: 'Omnires',
    partNo: '2123532',
    rating: 5,
    ratingCount: 24,
    inStock: true,
    discountTiers: [
      { quantity: '20-99 items', discount: '20%', price: '$29.99 net' },
      { quantity: '100-299 items', discount: '30%', price: '$25.35 net' },
      { quantity: '300-499 items', discount: '40%', price: '$23.35 net' },
    ],
    yourPrice: '$45.00',
    originalPrice: '$55.00',
    variants: ['Choose variant'],
    unit: 'Item',
    quantity: 1,
    images: [
      "https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/784a74b95eb04a2096f1ec0ab5f6fdf1e42a7aa6?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/784a74b95eb04a2096f1ec0ab5f6fdf1e42a7aa6?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/784a74b95eb04a2096f1ec0ab5f6fdf1e42a7aa6?placeholderIfAbsent=true",
    ],
    companyId: 1,
    description: "Đây là mô tả mẫu cho sản phẩm.",
    technicalDetails: {
      "Chất liệu": "Nhôm cao cấp",
      "Cân nặng": "1.5kg",
      "Màu sắc": "Xám bạc",
    },
    attachments: [
      "/docs/tai-lieu-ky-thuat.pdf",
      "/docs/huong-dan-su-dung.pdf",
    ],
    reviews: [
      { name: "Nguyễn Văn A", rating: 5, comment: "Sản phẩm rất tốt!" },
      { name: "Trần Thị B", rating: 4, comment: "Giao hàng nhanh, chất lượng ổn." },
    ],
    shipping: {
      description: "Giao hàng tận nơi trong 3-5 ngày làm việc.",
      types: [
        { type: "Tiêu chuẩn", cost: "$5.00" },
        { type: "Nhanh", cost: "$10.00" },
        { type: "Hỏa tốc", cost: "$20.00" },
      ],
    },
    payments: {
      description: "Chúng tôi hỗ trợ các hình thức thanh toán sau.",
      methods: [
        { type: "Thẻ tín dụng", info: "Visa, MasterCard, JCB" },
        { type: "Chuyển khoản ngân hàng", info: "Miễn phí" },
        { type: "COD", info: "Thanh toán khi nhận hàng" },
      ],
    },
  };

const ProductDetailPage = () => {
    console.log("ProductDetailPage rendered");
    const { productId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!productId) {
        console.warn("Không tìm thấy productId trong URL.");
        setProduct(fallbackProduct);
        setLoading(false);
        return;
      }
    
      const numericProductId = parseInt(productId ?? '', 10);
      if (isNaN(numericProductId)) {
        console.warn("productId không hợp lệ.");
        setProduct(fallbackProduct);
        setLoading(false);
        return;
      }

      const fetchProductDetail = async () => {
        try {
          const res = await api.get<Product>(API_ENDPOINTS.getProductById(numericProductId));
          const fetchedProduct = res.data;
    
          if (typeof fetchedProduct === 'object') {
            setProduct(fetchedProduct);
          } else {
            console.warn("API trả về dữ liệu không hợp lệ. Dùng fallback.");
            setProduct(fallbackProduct);
          }
        } catch (error) {
          console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
          setProduct(fallbackProduct);
        } finally {
          setLoading(false);
        }
      };
    
      fetchProductDetail();
    }, [productId]);    

    if (loading) return <div>Đang tải sản phẩm...</div>;
    if (!product) return <div>Không tìm thấy sản phẩm.</div>;

    return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <section className="flex flex-col self-stretch px-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:w-full">
                <ProductGallery images={product.images}/>
            </div>
            <div className="w-6/12 max-md:w-full">
                <ProductInfo product={product} />
            </div>
          </div>
        </div>

        <div className="flex gap-5 mt-20 max-md:flex-col">
          {product.companyId && <CompanyCard companyId={product.companyId} />}
        </div>

        <ProductTabs product={product} />
      </section>

      <NewsletterBanner />
      <RelatedProducts title="Sản phẩm liên quan" />
    </main>
  );
}

export default ProductDetailPage;
