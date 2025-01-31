'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/Components/Layout";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-900 text-white">
        <section className="container mx-auto py-20 px-6">
          <h1 className="text-5xl font-bold text-center mb-12 text-purple-500" data-aos="fade-down">
            About Us
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center mb-16" data-aos="fade-up">
            <div className="lg:w-1/2 space-y-4 ml-8">
              <h2 className="text-3xl font-semibold mb-4 text-blue-400">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We aim to drive digital transformation by providing innovative solutions that empower businesses to achieve their goals. Our team is dedicated to delivering excellence through cutting-edge technology and unparalleled expertise.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Innovative Solutions</li>
                <li>Customer-Centric Approach</li>
                <li>Global Reach</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src="/Mission_img.jpg" alt="Mission" className="w-80 lg:w-[30rem] rounded-lg shadow-lg transform transition duration-500 hover:scale-105"/>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mb-16" data-aos="fade-up">
            <div className="lg:w-1/2 flex justify-center order-last lg:order-first">
              <img src="/Vision_img.jpg" alt="Vision" className="w-80 lg:w-[30rem] rounded-lg shadow-lg transform transition duration-500 hover:scale-105"/>
            </div>
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold mb-4 text-blue-400">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be a global leader in technology solutions, recognized for our commitment to innovation and quality. We strive to create a future where technology seamlessly integrates with everyday life, enhancing experiences and driving progress.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Leadership in Innovation</li>
                <li>Quality Assurance</li>
                <li>Seamless Integration</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-4 text-blue-400 text-center">Our Founders</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
              Meet the visionaries behind our success. Our founders bring a wealth of experience and a passion for innovation, driving our company to new heights.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
              <div className="text-center">
                <img src="/Rahul_Sir_img.png" alt="Rahul Ahire" className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-blue-400 transform transition duration-500 hover:scale-110"/>
                <h3 className="text-xl font-bold text-blue-400">Rahul Ahire</h3>
                <p className="text-gray-400">DIRECTOR - TECHONSY</p>
              </div>
              <div className="text-center">
                <img src="/Pritam_Sir_img.png" alt="Pritam Kamble" className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-blue-400 transform transition duration-500 hover:scale-110"/>
                <h3 className="text-xl font-bold text-blue-400">Pritam Kamble</h3>
                <p className="text-gray-400">FOUNDER - TECHONSY</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}