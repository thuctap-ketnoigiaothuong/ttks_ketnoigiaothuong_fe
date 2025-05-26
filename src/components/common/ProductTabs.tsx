import * as React from "react";
import { useState } from "react";

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
  discountTiers: {
    quantity: string;
    discount: string;
    price: string;
  }[];
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

export function ProductTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = React.useState("description");
  const [productReviewList, setProductReviewList] = useState<Review[]>(product.reviews ?? []);
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewName, setReviewName] = useState<string>("");
  const [reviewComment, setReviewComment] = useState<string>("");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "technical", label: "Technical Details" },
    { id: "attachments", label: "Attachments" },
    { id: "shipping", label: "Shipping & Payments" },
    {
      id: "reviews",
      label: `Reviews (${product.reviews?.length ?? 0})`,
    },
    { id: "ask", label: "Ask about product" },
  ];

  return (
    <section className="mt-20 w-full text-base text-neutral-950 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-2 items-center w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`self-stretch px-4 py-3 my-auto rounded-lg ${
              activeTab === tab.id
                ? "font-bold text-white bg-blue-600"
                : "bg-slate-50 text-neutral-950"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col justify-center p-6 w-full bg-sky-100 rounded-none">
        {activeTab === "description" && (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Description</h3>
            <p>{product.description ?? "No description available."}</p>
          </div>
        )}

        {activeTab === "technical" && (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Technical Details</h3>
            {product.technicalDetails ? (
              <ul className="list-disc list-inside">
                {Object.entries(product.technicalDetails).map(
                  ([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>No technical details available.</p>
            )}
          </div>
        )}

        {activeTab === "attachments" && (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Attachments</h3>
            {product.attachments && product.attachments.length > 0 ? (
              <ul className="list-disc list-inside">
                {product.attachments.map((file, idx) => (
                  <li key={idx}>
                    <a
                      href={file}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {file.split("/").pop()}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No attachments available.</p>
            )}
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="bg-white p-6 rounded-lg space-y-10">
            {/* Shipping Info */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">Shipping</h3>
              <p className="mt-2 text-neutral-700">
                {product.shipping?.description ?? "Thông tin giao hàng chưa được cập nhật."}
              </p>
              <ul className="mt-4 space-y-2">
                {product.shipping?.types.map((type, idx) => (
                  <li key={idx} className="flex justify-between border-b py-2">
                    <span>{type.type}</span>
                    <span className="text-blue-600 font-semibold">{type.cost}</span>
                  </li>
                )) ?? <li>Chưa có phương thức giao hàng.</li>}
              </ul>
            </div>

            {/* Payment Info */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">Payment</h3>
              <p className="mt-2 text-neutral-700">
                {product.payments?.description ?? "Thông tin thanh toán chưa được cập nhật."}
              </p>
              <ul className="mt-4 space-y-2">
                {product.payments?.methods.map((method, idx) => (
                  <li key={idx} className="flex justify-between border-b py-2">
                    <span>{method.type}</span>
                    <span className="text-blue-600">{method.info}</span>
                  </li>
                )) ?? <li>Chưa có phương thức thanh toán.</li>}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-wrap items-start gap-10 p-6 bg-sky-100">
            {/* DANH SÁCH ĐÁNH GIÁ */}
            <div className="flex-1 min-w-[300px]">
              <h3 className="text-2xl font-bold text-neutral-950">
                Customer Reviews ({product.reviews?.length ?? 0})
              </h3>

              {product.reviews && product.reviews.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {productReviewList.map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded shadow-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">{review.name}</span>
                        <div className="flex">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 
                                1 0 00.95.69h3.462c.969 0 1.371 1.24.588 
                                1.81l-2.8 2.034a1 1 0 00-.364 
                                1.118l1.07 3.292c.3.921-.755 1.688-1.54 
                                1.118l-2.8-2.034a1 1 0 00-1.175 
                                0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                                1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                                1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-neutral-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center mt-4">
                  <p className="text-lg">Chưa có đánh giá nào. Hãy là người đầu tiên!</p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/182fee6bb5c14645ac126407c1ee5eb2/e4f5c67249d8d0ce8252af1b6b797001439e55a7?placeholderIfAbsent=true"
                    className="mt-6 w-[191px] mx-auto"
                    alt="No reviews"
                  />
                </div>
              )}
            </div>

            {/* FORM ĐÁNH GIÁ */}
            <div className="flex-1 min-w-[300px]">
              <h3 className="text-2xl font-bold text-neutral-950 mb-4">Rate this product</h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!reviewName || !reviewComment || reviewRating === 0) return;

                  const newReview = {
                    name: reviewName,
                    comment: reviewComment,
                    rating: reviewRating,
                  };

                  setProductReviewList((prev) => [...prev, newReview]);

                  // Reset form
                  setReviewName("");
                  setReviewComment("");
                  setReviewRating(0);
                }}
                className="space-y-4"
              >
                {/* Rating chọn sao */}
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setReviewRating(i + 1)}
                        className="focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 ${i < reviewRating ? 'text-yellow-400' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 
                          0l1.07 3.292a1 1 0 00.95.69h3.462c.969 
                          0 1.371 1.24.588 1.81l-2.8 
                          2.034a1 1 0 00-.364 
                          1.118l1.07 3.292c.3.921-.755 
                          1.688-1.54 
                          1.118l-2.8-2.034a1 1 0 
                          00-1.175 0l-2.8 
                          2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                          1 0 00-.364-1.118L2.98 
                          8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                          1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-medium">Name</label>
                  <input
                    type="text"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block font-medium">Your Review</label>
                  <textarea
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'ask' && ( 
          <div className="py-12 pl-12 w-full bg-sky-100"> 
            <div className="w-full text-sm leading-6 text-zinc-700"> 
              <p className="text-base text-neutral-950"> 
                Are you curious about the product? Do you have question about using it? Ask us! 
              </p> 
              <div className="mt-4 w-full whitespace-nowrap min-h-[76px]"> 
                <label className="block text-zinc-700">Name</label> 
                <input type="text" className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-12" /> 
              </div> 
              <div className="mt-4 w-full whitespace-nowrap min-h-[76px]"> 
                <label className="block text-zinc-700">E-mail</label> 
                <input type="email" className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-12" /> 
              </div> 
              <div className="mt-4 w-full min-h-[133px]"> 
                <label className="block text-zinc-700">Your request</label> 
                <textarea className="flex gap-2 py-3 mt-1 w-full bg-white rounded-lg border border-solid min-h-[105px]" /> 
              </div> 
            </div> 
            <button className="flex gap-2.5 justify-center items-center px-8 py-4 mt-6 w-full text-base leading-none text-white bg-blue-600 max-w-[467px] min-h-12 rounded-[30px]"> 
              Send request 
            </button> 
          </div> 
        )} 
      </div>
    </section>
  );
}
