import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about us image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Paridhan, we believe clothing is an expression of individuality,
            comfort, and culture. Each piece is thoughtfully designed using
            high-quality fabrics and precise tailoring to ensure a perfect fit
            and timeless appeal. Our collection blends traditional elegance with
            modern trends, creating styles that suit every occasion. With a
            focus on detail and craftsmanship, Paridhan brings you fashion that
            feels personal, graceful, and effortlessly beautiful.
          </p>
          <p>
            Paridhan is built on the foundation of sustainable craftsmanship and
            mindful design. We collaborate with skilled artisans to create
            clothing that honors India’s rich textile heritage while embracing
            modern aesthetics. Every product is made with care — from choosing
            eco-friendly fabrics to ensuring long-lasting comfort. Our goal is
            to make shopping an inspiring experience, where quality, creativity,
            and consciousness come together seamlessly.
          </p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            At Paridhan, our mission is to redefine everyday fashion through
            authenticity and purpose. We aim to create clothing that empowers
            confidence, celebrates culture, and encourages mindful living. By
            merging traditional artistry with contemporary design, we offer
            styles that are both elegant and responsible. Every collection
            reflects our promise to deliver comfort, sustainability, and
            timeless charm in every thread.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg"> 💫 Quality Assurance :</b>
          <p className="text-gray-600">
            Every Paridhan garment is crafted with care, premium fabrics, and
            precise stitching to guarantee lasting comfort and quality.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg"> 🌸 Convenience :</b>
          <p className="text-gray-600">
            Paridhan offers easy online shopping with secure payments, quick
            delivery, and smooth browsing for a hassle-free experience.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg"> ✨ Exceptional Customer Service :</b>
          <p className="text-gray-600">
            Our team ensures fast, helpful support for orders, returns, and
            styling advice, keeping every customer satisfied and valued.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
