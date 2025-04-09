import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white text-sm">
      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-4 py-10 border-b border-gray-700">
        <div className="md:flex items-center justify-between gap-4">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Many desktop publishing
            </h3>
            <p className="text-gray-400 max-w-md">
              Do you want to receive exclusive email offers? Subscribe to our
              newsletter! You will receive a unique promo code which gives you a
              20% discount on all our products in 10 minutes.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full md:w-72 bg-white text-black rounded-sm focus:outline-none"
            />
            <button className="bg-[#C77A54] text-white font-semibold px-6 py-3 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-3">Flatlogic.</h2>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <div className="flex flex-col gap-3 text-white text-xl">
            <Instagram className="hover:text-gray-300 cursor-pointer" />
            <Twitter className="hover:text-gray-300 cursor-pointer" />
            <Linkedin className="hover:text-gray-300 cursor-pointer" />
            <Facebook className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-white mb-3">COMPANY</h3>
          <ul className="text-gray-400 space-y-2">
            <li>What We Do</li>
            <li>Available Services</li>
            <li>Latest Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">MY ACCOUNT</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Order Tracking</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">CUSTOMER SERVICE</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Help & Contact Us</li>
            <li>Returns & Refunds</li>
            <li>Online Stores</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-gray-500 text-xs border-t border-gray-700 py-4">
        © 2020–2025 powered by Flatlogic
      </div>
    </footer>
  );
}
