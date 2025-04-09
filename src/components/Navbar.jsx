import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { useCart } from "../pages/CartContext"; // ✅ Adjust the path

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const { cartItems } = useCart();

  const cartCount = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between md:justify-center relative">
        {/* Mobile: Menu icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Centered Brand */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Flatlogic
          </Link>
        </div>

        {/* Mobile: Cart icon */}
        <div className="md:hidden flex items-center relative">
          <Link to="/cart" title="Cart">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop: Nav Center */}
        <ul className="hidden md:flex gap-6 mx-auto text-gray-700 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productpage">Products</Link>
          </li>
        </ul>

        {/* Desktop: Right icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-700 absolute right-4 ">
          <Link to="/search" title="Search">
            <Search size={20} />
          </Link>
          <Link to="/profile" title="Profile">
            <User size={20} />
          </Link>
          <Link to="/cart" title="Cart" className="relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-semibold">Flatlogic.</span>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4 text-white md:text-gray-700 font-medium">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/productpage" onClick={toggleMenu}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/profile" onClick={toggleMenu}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={toggleMenu}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
