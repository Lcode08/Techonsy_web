"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/Components/Layout";

const services = [
  {
    title: "MERN/MEAN Stack Development",
    description: "Build scalable and robust web applications using modern JavaScript technologies.",
    icon: "💻",
    link: "/Services/mern-mean-development",
  },
  {
    title: "Generative AI Solutions",
    description: "Leverage AI to create innovative tools that automate and optimize business workflows.",
    icon: "🤖",
    link: "/Services/generative-ai-solutions",
  },
  {
    title: "Cloud Services",
    description: "Empower your business with scalable and secure cloud solutions on AWS, Azure, or GCP.",
    icon: "☁️",
    link: "/Services/cloud-services",
  },
  {
    title: "Mobile App Development",
    description: "Develop intuitive and high-performing mobile applications for iOS and Android.",
    icon: "📱",
    link: "/Services/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    description: "Craft seamless user experiences and beautiful interfaces tailored for your audience.",
    icon: "🎨",
    link: "/Services/ui-ux-design",
  },
  {
    title: "QA Testing",
    description: "Ensure your products are bug-free and high-quality with our thorough QA testing services.",
    icon: "✅",
    link: "/Services/qa-testing",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-32 text-center overflow-hidden" data-aos="fade-down">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-10 right-10 w-60 h-60 bg-blue-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 opacity-10 rounded-full"></div>

          {/* Hero Content */}
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold tracking-tight">
              Discover Our Services
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Empower your business with cutting-edge solutions and expert guidance.
            </p>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="container mx-auto py-20 px-6" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-100">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className="text-6xl text-blue-400 mb-6"
                  aria-label="service-icon"
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-blue-700 py-16" data-aos="fade-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to transform your ideas into reality.
            </p>
            <a
              href="/Contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto py-16 px-6" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-100">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-300 italic">
                "Techonsy helped us scale our business with expert cloud solutions."
              </p>
              <h4 className="mt-4 text-lg font-bold text-white">- Satya Nadella</h4>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-300 italic">
                "Their AI solutions saved us hours every week. Highly recommended!"
              </p>
              <h4 className="mt-4 text-lg font-bold text-white">- Tim Cook</h4>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-300 italic">
                "Amazing UI/UX design! Our app now stands out in the market."
              </p>
              <h4 className="mt-4 text-lg font-bold text-white">- Deepinder Goyal</h4>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}