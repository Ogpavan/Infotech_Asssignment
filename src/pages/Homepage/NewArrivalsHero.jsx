import React from "react";
import newarrivalhero from "../../assets/newarrivalhero.webp";

export default function NewArrivalsHero() {
  return (
    <section className="bg-[#f8f8f8] py-12   ">
      <div className="w-full  flex flex-col md:flex-row items-center justify-between    ">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left md:pl-40 ">
          <p className="text-sm text-gray-700 font-semibold mb-2">
            NEWS AND INSPIRATION
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            NEW ARRIVALS
          </h1>

          <div className="w-12 h-1 bg-[#bc7b56] rounded-full md:mx-0 mb-6   "></div>

          {/* Countdown Timer */}
          <div className="flex justify-center  md:justify-start md:space-x-4 mb-6    ">
            {["days", "hours", "mins", "secs"].map((label, idx) => (
              <div key={idx} className="border px-4 py-2 text-center">
                <p className="text-[#bc7b56] font-semibold text-xl">0</p>
                <p className="text-sm text-gray-700">{label}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="text-2xl md:text-3xl">
            <span className="line-through text-gray-400 mr-4">$140.56</span>
            <span className="text-[#bc7b56] font-bold">$70</span>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img
            src={newarrivalhero} // use your own asset
            alt="New Arrival"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
