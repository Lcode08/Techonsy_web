'use client'
import Footer from "@/Components/Footer";
import Layout from "@/Components/Layout";
import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    alert("Thank you! Your message has been sent.");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
   <Layout>
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Rotating SVG Animation */}
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] absolute top-[-100px] left-[-100px] opacity-30 animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-500">
              Let’s discuss working together
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg lg:place-content-center">
              <h2 className="text-4xl font-bold text-gray-300 mb-8 font-sans">
                Tell us about your project
              </h2>
              <p className="text-gray-400 mb-6 text-xl font-sans">
                We are always here to help. Whether you're ready to start your
                journey or just exploring, reach out to us. We’d love to talk!
              </p>
              <p className="text-gray-400 mb-2 font-sans text-lg">
                Email us at{" "}
                <a
                  href="mailto:contact@yourcompany.com"
                  className="text-blue-500 underline ml-2"
                >
                  contact@yourcompany.com
                </a>
              </p>
              <p className="text-gray-400 font-sans text-lg">
                Business at:{" "}
                <span className="text-purple-500 font-medium ml-2">
                  +1 (123) 456-7890
                </span>
              </p>
            </div>

            {/* Right Section - Form */}
            <form
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-sans">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Title/Role</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-sans">
                <div>
                  <label className="block text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-sans">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">
                    What we can help you with?
                  </label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 mb-2 mt-10 font-sans">
                  PLEASE TELL US MORE... (E.g.: Your idea, timeline, budget.)
                </label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-4/5 py-2 bg-blue-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 ml-14 mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
 </Layout>

  );
}