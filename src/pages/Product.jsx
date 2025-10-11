import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from '../components/RealtedProducts'

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(productData);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ui of the product page */}
      {/* product data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images  */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div
            className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal
          sm:w-[18.7%] w-full"
          >
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt="product image"
                className="w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="product image" />
          </div>
        </div>
        {/* product information  */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star_rating" className="w-3.5" />
            <img src={assets.star_icon} alt="star_rating" className="w-3.5" />
            <img src={assets.star_icon} alt="star_rating" className="w-3.5" />
            <img src={assets.star_icon} alt="star_rating" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star_rating"
              className="w-3.5"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is availabel on this product. </p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <p className="border px-5 py-3 text-sm ">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Discover timeless elegance and everyday comfort with this
            beautifully designed outfit, crafted from premium-quality fabric
            that feels as good as it looks. The soft, breathable material
            ensures all-day ease, while the thoughtful tailoring provides a
            flattering silhouette for every body type. Subtle details like fine
            stitching, elegant patterns, and smooth finishing reflect
            exceptional craftsmanship, making this piece a wardrobe essential
            for every season. Whether you’re dressing up for a festive
            celebration, heading out for a casual brunch, or looking for
            something effortlessly chic for daily wear, this outfit adapts
            perfectly to every mood and moment. Pair it with your favorite
            accessories and footwear to complete your look with a touch of
            sophistication — because true style lies in simplicity, comfort, and
            confidence.
          </p>
          <p>
            Elevate your everyday style with this beautifully crafted outfit
            that blends comfort, elegance, and versatility. Made from soft,
            breathable fabric, it drapes perfectly on every body type, offering
            a flattering silhouette that moves with you. Whether you’re heading
            to work, a casual outing, or a festive occasion, this piece ensures
            you look effortlessly chic.
          </p>
        </div>
      </div>
      {/* display related products..  */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
