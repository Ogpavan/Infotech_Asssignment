import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import first_hero from "../../assets/first_hero.webp";
import second_hero from "../../assets/second_hero.webp";
import third_hero from "../../assets/third_hero.webp";
import { Link } from "react-router-dom";
import NewArrivals from "./NewArrivals";
import NewArrivalsHero from "./NewArrivalsHero";
import TopSellingProducts from "./TopSellingProduct";
import { useEffect } from "react";

const Home = () => {
  const banners = [
    {
      img: first_hero,
      title: "Explore the Latest Tech",
      subtitle: "Smart gadgets at unbeatable prices",
      btnText: "Shop Now",
    },
    {
      img: second_hero,
      title: "Laptops for Every Need",
      subtitle: "Performance meets portability",
      btnText: "Browse Laptops",
    },
    {
      img: third_hero,
      title: "Upgrade Your Gear",
      subtitle: "Find your next smartphone today",
      btnText: "See Phones",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" max-w-10xl mx-auto  ">
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        dynamicHeight={false}
        className="rounded-lg overflow-hidden"
      >
        {banners.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
          >
            <img
              src={item.img}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0  flex flex-col items-start justify-center px-6 sm:px-32  ">
              <div className="   ">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2 drop-shadow ">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-lg mb-4 drop-shadow">
                  {item.subtitle}
                </p>
                <Link
                  to="/products"
                  className="border border-[#bd744c] text-[#bd744c]  px-4 py-2 rounded shadow  transition"
                >
                  {item.btnText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <NewArrivals />
      <NewArrivalsHero />
      <TopSellingProducts />
    </div>
  );
};

export default Home;
