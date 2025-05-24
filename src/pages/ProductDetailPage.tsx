import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../lib/axios';
import { API_ENDPOINTS } from '../lib/apiConfig';

import { ProductGallery } from "../components/common/ProductGallery";
import { ProductInfo } from "../components/common/ProductInfo";
import { ExtraOfferSection } from "../components/common/ExtraOfferSection";
import { MeetSalesExpert } from "../components/common/MeetSalesExpert";
import { ProductTabs } from "../components/common/ProductTabs";
import { NewsletterBanner } from "../components/common/NewsletterBanner";
import { RelatedProducts } from "../components/common/RelatedProducts";

interface DiscountTier {
    quantity: string;
    discount: string;
    price: string;
  }
  
export interface Product {
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
    mainImage: string;
    discount: string;
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
    mainImage: "https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/784a74b95eb04a2096f1ec0ab5f6fdf1e42a7aa6?placeholderIfAbsent=true.jpg",
    discount: "-30%",
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
      console.log("productId param:", productId);
    
      const fetchProductDetail = async () => {
        try {
          const res = await api.get<{ data: Product }>(`${API_ENDPOINTS.products}/${productId}`);
          const fetchedProduct = res.data?.data ?? res.data;
    
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
                <ProductGallery images={product.images} mainImage={product.mainImage} discount={product.discount} />
            </div>
            <div className="w-6/12 max-md:w-full">
                <ProductInfo product={product} />
            </div>
          </div>
        </div>

        <div className="flex gap-5 mt-20 max-md:flex-col">
          <ExtraOfferSection />
          <MeetSalesExpert />
        </div>

        <ProductTabs />
      </section>

      <NewsletterBanner />
      {/* <RelatedProducts title="Featured products" />
      <RelatedProducts title="Replacement products" />
      <RelatedProducts title="Products from the same series" />
      <RelatedProducts title="Similar products" /> */}
      <RelatedProducts title="Related products" />
    </main>
  );
}

export default ProductDetailPage;
