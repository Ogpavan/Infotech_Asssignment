import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Star } from "lucide-react"; // or use any icon lib
import Reviews from "./Reviews";
import insta1 from "../assets/insta1.webp";
import insta2 from "../assets/insta2.webp";
import insta4 from "../assets/insta4.webp";
import insta3 from "../assets/insta3.webp";
import insta5 from "../assets/insta5.webp";
import insta6 from "../assets/insta6.webp";
import { Truck, Headphones, RotateCcw } from "lucide-react";
import { useCart } from "./CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      const docRef = doc(db, "product", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() }); // ✅ include ID
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-12 h-12 border-4 border-orange-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Products &gt; {product.category} &gt;{" "}
        <span className="font-semibold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Star Ratings */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < 4 ? "text-orange-400" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">4 reviews</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Vestibulum ultricies aliquam.
          </p>

          {/* Quantity & Price */}
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-600 font-medium">Quantity</span>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="text-xl font-semibold   mb-6">
            Total: ${product.price * quantity}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 items-center justify-between md:justify-normal">
            {added ? (
              <div className="text-green-600 font-medium animate-fade-in-out">
                ✅ Added!
              </div>
            ) : (
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  setAdded(true);
                  setTimeout(() => setAdded(false), 1500);
                }}
                className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-50"
              >
                ADD TO CART
              </button>
            )}

            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      <Reviews />

      <section>
        <div className="bg-white border-t border-b py-10 border-gray-300 mt-10">
          <div className=" px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <Truck className="text-orange-600 w-10 h-10" />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-black">
                  FREE SHIPPING
                </h3>
                <p className="text-gray-600 text-sm">On all orders of $150</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 border-l border-r px-4 border-gray-300">
              <Headphones className="text-orange-600 w-10 h-10" />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-black">
                  24/7 SUPPORT
                </h3>
                <p className="text-gray-600 text-sm">
                  Get help when you need it
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <RotateCcw className="text-orange-600 w-10 h-10" />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-black">
                  100% MONEY BACK
                </h3>
                <p className="text-gray-600 text-sm">
                  30 day money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 py-10">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Follow us on Instagram
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            <img
              src={insta1}
              alt="Instagram 1"
              className="w-full h-auto object-cover"
            />
            <img
              src={insta2}
              alt="Instagram 2"
              className="w-full h-auto object-cover"
            />
            <img
              src={insta3}
              alt="Instagram 3"
              className="w-full h-auto object-cover"
            />
            <img
              src={insta4}
              alt="Instagram 4"
              className="w-full h-auto object-cover"
            />
            <img
              src={insta5}
              alt="Instagram 5"
              className="w-full h-auto object-cover"
            />
            <img
              src={insta6}
              alt="Instagram 6"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
