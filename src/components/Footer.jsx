import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.new_logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Paridhan is dedicated to bringing you stylish, comfortable, and
            affordable clothing that blends tradition with modern trends. Our
            mission is to make fashion accessible to everyone while ensuring
            quality and sustainability.
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >Home</Link>
            </li>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <li>About us</li>
            </Link>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9999999999</li>
            <li>contact@paridhan.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ paridhan.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
