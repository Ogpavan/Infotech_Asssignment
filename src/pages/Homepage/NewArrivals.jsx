import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // adjust path as needed
import { Link } from "react-router-dom"; // ✅ Correct import

export default function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "product"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id, // ✅ Add Firestore document ID
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-2">New Arrivals</h2>
      <p className="text-center text-gray-600 mb-8">
        Discover the latest additions to our store
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10">
        {products.map((item) => (
          <div key={item.id}>
            {" "}
            {/* ✅ move key here */}
            <Link to={`/product/${item.id}`} className="block  duration-200">
              <div className="flex justify-between flex-col items-center md:items-start mb-2">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-auto object-contain mb-2 max-h-52 hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="md:px-2 flex flex-col items-center md:items-start">
                  <p className="text-gray-600 text-sm">{item.category}</p>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">$ {item.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/productpage"} className="w-[100%]">
        <div className="flex justify-center w-full items-center  py-10">
          <button className="bg-[#bd744c] text-white px-4 py-2 rounded-sm ">
            View More{" "}
          </button>
        </div>
      </Link>
    </div>
  );
}
