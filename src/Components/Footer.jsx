"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  InstapaperShareButton,
  InstagramIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="flex flex-wrap justify-between gap-8">
        {/* Techonsy Brand logo & Name section */}
        <div className="text-center flex-1 min-w-[250px]" data-aos="fade-right">
          <div className="flex justify-center items-center">
            <img
              src="/techonsy_logo.jpg"
              alt="Techonsy Logo"
              className="h-16 w-auto mb-3"
            />
            <div className="ml-1">
              <h1 className="text-4xl font-bold">TECHONSY</h1>
              <p className="text-sm text-gray-400">Software Pvt Ltd</p>
            </div>
          </div>

          {/* Social Media icons section */}
          <div className="flex justify-center space-x-8 mt-8" data-aos="fade-up">
            <FacebookShareButton url={'http://localhost:3000'}>
              <FacebookIcon size={32} round className="transform hover:scale-125 hover:brightness-110 transition-transform duration-300 ease-in-out" />
            </FacebookShareButton>

            <InstapaperShareButton url="{'https://www.instagram.com/techonsy'}">
              <InstagramIcon size={32} round className="transform hover:scale-125 hover:brightness-110 transition-transform duration-300 ease-in-out" />
            </InstapaperShareButton>

            <LinkedinShareButton url="{'https://in.linkedin.com/company/techonsy'}">
              <LinkedinIcon size={32} round className="transform hover:scale-125 hover:brightness-110 transition-transform duration-300 ease-in-out" />
            </LinkedinShareButton>

            <WhatsappShareButton url="{'http://localhost:300'}">
              <WhatsappIcon size={32} round className="transform hover:scale-125 hover:brightness-110 transition-transform duration-300 ease-in-out" />
            </WhatsappShareButton>

            <TwitterShareButton url="{'http://localhost:300'}">
              <TwitterIcon size={32} round className="transform hover:scale-125 hover:brightness-110 transition-transform duration-300 ease-in-out" />
            </TwitterShareButton>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] ml-10" data-aos="fade-down">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="w-16 h-1 bg-gray-700 ml-0 mb-2"></div>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/Services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/Careers" className="hover:text-blue-400">Careers</a></li>
            <li><a href="/About" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/Contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex-1 min-w-[200px]" data-aos="fade-down">
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <div className="w-16 h-1 bg-gray-700 ml-0 mb-2"></div>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:text-blue-400">Terms of Use</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left flex-1 min-w-[250px] space-y-4 mr-10" data-aos="fade-right">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="w-16 h-1 bg-gray-700 ml-0"></div>
          <p>Office No.12, Third Floor, Barve Memorial Complex Jangali Maharaj Road, Opposite Panchali Hotel Shivaji Nagar, Pune 411005</p>
          <p>Email: <a href="mailto:contact@techonsy.com" className="text-blue-400 underline">contact@techonsy.com</a></p>
          <p>Phone: <a href="tel:+917276279026" className="text-blue-400 underline">+91 7276279026</a></p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500" >
        <div className="w-16 h-1 bg-gray-700 mx-auto my-4"> </div>
        <p>© {new Date().getFullYear()} Techonsy Software Pvt Ltd. All rights reserved.</p>     
      </div>
    </footer>
  );
};

export default Footer;