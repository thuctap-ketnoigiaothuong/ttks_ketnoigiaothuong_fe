"use client";
import * as React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../context/CardContext.tsx";

interface ProductCardProps {
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
  company: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  discount,
  brand,
  partNo,
  name,
  parameters,
  price,
  originalPrice,
  inStock = true,
  company,
}) => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const [showAddedMessage, setShowAddedMessage] = React.useState(false);

  const isAlreadyInCart = cart.some((item) => item.partNo === partNo);

  const handleUpdateCart = () => {
    if (!inStock) return;

    const quantity = Number(
        (document.querySelector(`#qty-${partNo}`) as HTMLInputElement | null)?.value || 1
    );

    const cartItem = {
      image,
      name,
      price,
      partNo,
      quantity,
      company,
    };

    addToCart(cartItem);
    setShowAddedMessage(true);

    setTimeout(() => {
      setShowAddedMessage(false);
    }, 3000);
  };

  const handleContactCompany = () => {
    navigate(`/companies?search=${encodeURIComponent(company)}`);
  };

  return (
    <article className="w-full text-sm leading-6 group hover:shadow-lg transition-shadow duration-300">
      <div className="pb-3 bg-white rounded-lg border border-solid border-[color:var(--Light-Colors-Platinum-2,#F6F8FB)] group overflow-hidden">
        <div className="relative w-full aspect-[1.224]">
          {discount && (
            <div className="absolute top-2 left-2 z-10 px-2 py-1 font-semibold text-white text-sm bg-orange-500 rounded">
              {discount}
            </div>
          )}

          <img
            src={image}
            alt={name}
            className="object-cover absolute inset-0 w-full h-full rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
          />

          {inStock ? (
            <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 px-3 py-1 text-xs text-green-700 bg-white/70 backdrop-blur-sm rounded">
              <img
                src="/products/instock.png"
                alt="In stock"
                className="object-contain w-4 h-4"
              />
              <p>Còn hàng</p>
            </div>
          ) : (
            <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 px-3 py-1 text-xs text-red-600 bg-white/70 backdrop-blur-sm rounded">
              <img
                src="/products/outstock.png"
                alt="Out of stock"
                className="object-contain w-4 h-4"
              />
              <p>Hết hàng</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start px-2 w-full mt-3">
          <p className="text-sm text-zinc-500">
            {brand} | Part No. {partNo}
          </p>
          <h3 className="text-xl font-bold text-neutral-950 w-[264px]">{name}</h3>
          <p className="text-sm text-blue-700">Company: {company}</p>

          {parameters.map((param, index) => (
            <p key={index} className="mt-1 text-sm text-neutral-950">
              {param}
            </p>
          ))}

          <div className="flex gap-1 mt-1">
            <div className="grow text-xl font-bold text-neutral-950">
              <span className="text-sm text-blue-600">your price</span>
              <span className="text-2xl text-blue-600"> {price} </span>
              <span className="text-sm text-blue-600"> </span>
              {originalPrice && (
                <span className="text-base text-orange-500 line-through">
                  {originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center self-stretch mt-2.5 w-full">
            <input
              id={`qty-${partNo}`}
              type="number"
              defaultValue={1}
              min={1}
              className="flex-1 px-2 py-1 text-center bg-white rounded-lg border border-[color:var(--Light-Colors-Platinum,#EAECEE)] text-neutral-950"
            />
            <select className="px-2 py-1 bg-white rounded-lg border border-[color:var(--Light-Colors-Platinum,#EAECEE)]">
              <option value="item">Item</option>
            </select>
          </div>

          <button
            onClick={handleContactCompany}
            className="w-full px-4 py-2 mt-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-[30px] hover:bg-blue-50"
          >
            Contact company
          </button>

          <button
            onClick={handleUpdateCart}
            disabled={!inStock}
            className={`w-full px-4 py-3 mt-2 text-base font-medium text-white rounded-[30px] max-md:px-5 ${
              inStock ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isAlreadyInCart ? "Update cart" : "Add to cart"}
          </button>
        </div>
      </div>

      {showAddedMessage && (
        <div className="flex gap-2 justify-center items-center px-16 py-2 text-blue-600 bg-sky-100 max-md:px-5">
          <img
            src="/products/added.png"
            alt="Success"
            className="w-4 h-4"
          />
          <p className="text-blue-600">Added to cart</p>
        </div>
      )}
    </article>
  );
};
