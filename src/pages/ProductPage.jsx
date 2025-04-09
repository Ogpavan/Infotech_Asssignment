import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { FaSpinner } from "react-icons/fa"; // Spinner icon

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true); // 🔁

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "product"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
        setFiltered(items);
        const allCategories = [...new Set(items.map((p) => p.category))];
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // ✅ stop loading
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setFiltered(
      cat === "" ? products : products.filter((p) => p.category === cat)
    );
    setShowFilters(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">All Products</h2>
        <button
          className="md:hidden flex items-center gap-2 text-orange-500"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Panel */}
        <div
          className={`w-full md:w-1/4 ${
            showFilters ? "block" : "hidden"
          } md:block`}
        >
          <h3 className="font-semibold mb-4 text-lg">Filter by Category</h3>
          <form className="space-y-2">
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={selectedCategory === ""}
                  onChange={() => handleCategoryChange("")}
                />
                <span>All</span>
              </label>
            </div>
            {categories.map((cat) => (
              <div key={cat}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span>{cat}</span>
                </label>
              </div>
            ))}
          </form>
        </div>

        {/* Product Grid or Loader */}
        <div className="w-full md:w-3/4">
          {loading ? (
            <div className="flex justify-center items-center h-60">
              <FaSpinner className="animate-spin text-3xl text-orange-500" />
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  key={item.id}
                  className="bg-white p-4 rounded shadow hover:shadow-lg transition"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-40 object-contain mb-3 hover:scale-105 transition-transform"
                  />
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-orange-500 font-medium">${item.price}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
