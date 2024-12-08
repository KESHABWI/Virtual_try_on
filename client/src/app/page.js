"use client";
import Footer from "@/components/Footer/page";
import CustomNavbar from "@/components/Navbar/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      {/* Navbar */}
<CustomNavbar></CustomNavbar>

      {/* Main Content */}
      <div className="flex-grow md:px-12 lg:px-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 pt-10">Virtual Try-On Made</h2>
          <p className="text-gray-400 mb-8">
            Experience a new way of shopping with our AI-powered try-on app.
            Glam up with your favorite outfits virtually!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:scale-105 text-white px-8 py-3 rounded-full font-bold shadow-lg">
            Try Now
          </button>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-10 gap-y-10 text-center mb-20">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              AI-Powered Fit
            </h3>
            <p className="text-gray-400">
              Use advanced AI to try on clothes virtually and find the perfect
              fit.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              Multiple Styles
            </h3>
            <p className="text-gray-400">
              Explore a variety of fashion styles and outfits in seconds.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              Realistic Previews
            </h3>
            <p className="text-gray-400">
              See how clothes look on you with photo-realistic renders.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
