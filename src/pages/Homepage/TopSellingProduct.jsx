import React from "react";
import top1 from "../../assets/top1.webp";
import top2 from "../../assets/top2.webp";
import top3 from "../../assets/top3.webp";
import top4 from "../../assets/top4.webp";
import top5 from "../../assets/top5.webp";
import insta1 from "../../assets/insta1.webp";
import insta2 from "../../assets/insta2.webp";
import insta3 from "../../assets/insta3.webp";
import insta4 from "../../assets/insta4.webp";
import insta5 from "../../assets/insta5.webp";
import insta6 from "../../assets/insta6.webp";
import { Truck, Headphones, RotateCcw } from "lucide-react";

export default function TopSellingProducts() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Top Selling Products
            </h2>
            <p className="mt-4 text-gray-600">
              These furniture sets will become an essential part of an ecosystem
              of elements in your home. Your domestic space will easily embrace
              these tables, chairs, and bookshelves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
            {/* Large left image block */}
            <div className="relative col-span-1 md:col-span-2 h-[420px]  ">
              <img
                src={top1}
                alt="Spring Things"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center p-8">
                <div>
                  <p className="text-sm text-[#bc7b56] font-semibold">
                    ALL NEW
                  </p>
                  <h3 className="text-3xl font-bold text-[#bc7b56]">
                    SPRING THINGS
                  </h3>
                  <div className="w-10 h-1 bg-[#bc7b56] my-2"></div>
                  <p className="text-gray-700 text-sm">Save up to 30%</p>
                </div>
              </div>
            </div>

            {/* Top right grid */}
            <div className="flex space-x-6">
              <div className="space-y-6  ">
                <div className="relative h-[190px] ">
                  <img
                    src={top2}
                    alt="Online Exclusive"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 p-4">
                    <p className="text-sm text-[#bc7b56] font-semibold">
                      Online Exclusive
                    </p>
                    <a href="#" className="text-[#bc7b56] text-sm underline">
                      shop now
                    </a>
                  </div>
                </div>

                <div className="relative h-[190px]">
                  <img
                    src={top3}
                    alt="70% Sale"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 font-bold text-sm">
                    70% SALE
                  </div>
                </div>
              </div>

              {/* Bottom grid */}
              <div className="space-y-6  ">
                <div className="relative h-[190px]">
                  <img
                    src={top4}
                    alt="Spring Sale"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 font-bold text-sm">
                    SPRING SALE
                  </div>
                </div>

                <div className="relative h-[190px] flex items-end justify-center p-4">
                  <img
                    src={top5}
                    alt="Summer Collection"
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                  <div className="relative text-center">
                    <p className="text-[#bc7b56] text-sm font-medium">
                      collection
                    </p>
                    <h4 className="text-xl font-semibold text-[#bc7b56]">
                      SUMMER
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white border-t border-b py-10 border-gray-300">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
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
        <div className="max-w-7xl mx-auto px-4 py-10">
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
    </>
  );
}
