import React, { useState } from "react";
import { Heart, ShoppingCart, Zap, Star, Truck } from "lucide-react";
import { toast } from "react-toastify";

const ProductCard = ({ product,addtoCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            -{Math.round(product.discountPercentage)}% OFF
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Add to wishlist"
        >
          <Heart
            size={20}
            className={
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button>

        {/* Image */}
        <div className="flex h-64 items-center justify-center p-8">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5">
        
        {/* Brand & Category */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
            {product.brand}
          </span>

          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-sm font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="mb-1 text-sm text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Stock / Shipping */}
        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-green-600">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            {product.availabilityStatus}
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <Truck size={14} />
            Ships in 3-5 days
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          
          {/* Add to Cart */}
          <button onClick={()=>addtoCart(product)} className="flex items-center justify-center gap-2 rounded-xl border-2 border-purple-600 px-3 py-3 text-sm font-semibold text-purple-600 transition-all duration-200 hover:bg-purple-50 active:scale-95">
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          {/* Buy Now */}
          <button className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-3 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-purple-700 hover:shadow-lg active:scale-95">
            <Zap size={18} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;