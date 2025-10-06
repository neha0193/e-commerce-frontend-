import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white">
      {/* hero left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 px-6">
        <div className="text-gray-800 max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-gray-800"></span>
            <p className="font-medium text-sm md:text-base tracking-wide uppercase">
              Our Bestsellers
            </p>
          </div>

          <h1 className="text-3xl lg:text-5xl font-semibold leading-snug prata-regular mb-6">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-3 cursor-pointer group">
            <Link to='/collection'>
            <p className="font-semibold text-sm md:text-base transition-colors group-hover:text-blue-600">
              Shop Now
            </p>
            <span className="w-10 h-[2px] bg-gray-800 transition-all group-hover:w-16 group-hover:bg-blue-600"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* hero right */}
      <img
        src={assets.hero_img}
        alt="hero section"
        className="w-full sm:w-1/2 object-cover"
      />
    </div>
  );
};

export default Hero;
