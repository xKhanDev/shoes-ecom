// src/pages/Home.jsx
import { Link } from "react-router-dom";
import shoesData from "../data/shoes";
import Card from "../components/Card";
import { useState } from "react";

const Categories = ["all", "sneakers", "formal", "sports", "casual"];
const banners = [
  {
    id: 1,
    title: "Nikee Sneakers",
    description: "This is High Quality Sneakers for Men",
    image: "/shoes1.jpg",
  },
  {
    id: 2,
    title: "Dura Casual",
    description: "This is High Quality Sneakers for Woman",
    image: "/shoes2.jpg",
  },
  {
    id: 3,
    title: "Adidas Sports",
    description: "This is High Quality Sneakers for Men",
    image: "/shoes3.jpg",
  },
];

const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [filteredShoes, setFilteredShoes] = useState(shoesData);
  const [activeBtn, setActiveBtn] = useState("all");

  const handleBanner = (type) => {
    if (type === "next") {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    } else {
      setBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }
  };
  const handleCategory = (category) => {
    if (category === "all") {
      setFilteredShoes(shoesData);
      setActiveBtn(category);
      return;
    }
    setActiveBtn(category);
    setFilteredShoes(shoesData.filter((shoe) => shoe.category === category));
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Shoes</h1>
      <div className="relative mb-6">
        <div className="flex justify-between items-center">
          <button
            className="size-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 absolute left-0"
            onClick={() => handleBanner("prev")}
          >
            {"<"}
          </button>

          <div className="w-full flex items-center justify-between lg:px-24 lg:py-8 space-x-4 mb-6 bg-white rounded-lg">
            <img
              src={banners[bannerIndex].image}
              alt=""
              className="sm:size-44"
            />
            <div className="flex flex-col space-y-2 text-[#131313]">
              <h1 className="lg:text-5xl font-bold">
                {banners[bannerIndex].title}
              </h1>
              <span className="text-gray-500 text-sm">
                {banners[bannerIndex].description}
              </span>
            </div>
          </div>
          <button
            className="size-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 absolute right-0"
            onClick={() => handleBanner("next")}
          >
            {">"}
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Trending Shoes</h1>
      <div className="flex justify-start items-center space-x-4">
        {Categories.map((category) => (
          <button
            key={category}
            className={`mb-4 text-black bg-[#f0f0f0] py-2 px-4 rounded-md ${
              activeBtn === category ? "bg-gray-300" : ""
            }`}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredShoes.length === 0 ? (
          <div className="w-full flex justify-center items-center">
            <h2 className="text-center text-2xl font-semibold">
              No shoes found
            </h2>
          </div>
        ) : (
          filteredShoes.map((shoe) => <Card key={shoe.id} shoe={shoe} />)
        )}
      </div>
      <div className="text-center mt-6">
        <Link to="/products" className="btn btn-primary">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Home;
