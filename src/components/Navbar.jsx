import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <Link to="/">
        <img src={assets.new_logo} alt="logo" className="w-36" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 relative group"
        >
          <p className="hover:text-black">HOME</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 relative group"
        >
          <p className="hover:text-black">COLLECTION</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 relative group"
        >
          <p className="hover:text-black">ABOUT</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 relative group"
        >
          <p className="hover:text-black">CONTACT</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <Link to="/collection">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="search_icon"
            className="w-5 cursor-pointer"
          />
        </Link>

        {/* Profile Dropdown */}
        <div className="relative group">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt="profile_icon"
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="absolute right-0 top-full mt-2 hidden group-hover:block">
            <div className="flex flex-col w-36 gap-2 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5" />
          <span className="absolute -right-1 -bottom-1 w-4 h-4 flex items-center justify-center bg-black text-white text-[8px] rounded-full">
            {getCartCount()}
          </span>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden  transition-all bg-gray-100 z-50 ${
          visible ? "w-64" : "w-0"
        }`}
      >
        <div className="flex flex-col h-full text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="back-icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>

          <nav className="flex flex-col">
            <NavLink
              className="py-2 pl-6 border-b border-gray-200 hover:text-black"
              onClick={() => setVisible(false)}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="py-2 pl-6 border-b border-gray-200 hover:text-black"
              onClick={() => setVisible(false)}
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              className="py-2 pl-6 border-b border-gray-200 hover:text-black"
              onClick={() => setVisible(false)}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              className="py-2 pl-6 border-b border-gray-200 hover:text-black"
              onClick={() => setVisible(false)}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
