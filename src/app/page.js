'use client'
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "@/Components/Layout";
import SnapshotPage from "./Snapshot/page";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngular, faReact, faPython, faJava, faDocker, faGitlab, faNodeJs, faJsSquare 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Front-End');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const techStacks = {
    'Front-End': [
      { name: 'Angular', icon: faAngular },
      { name: 'React', icon: faReact },
      { name: 'Flutter', icon: faJsSquare },
      { name: 'Next.js', icon: faJsSquare },
      { name: 'React Native', icon: faReact },
      { name: 'Electron.js', icon: faJsSquare },
      { name: 'Three.js', icon: faJsSquare }
    ],
    'Back-End': [
      { name: 'Django', icon: faPython },
      { name: 'Python', icon: faPython },
      { name: 'Java', icon: faJava },
      { name: 'Express.js', icon: faNodeJs },
      { name: 'Spring Boot', icon: faJava }
    ],
    'Database': [
      { name: 'MySQL', icon: faDatabase },
      { name: 'MongoDB', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
      { name: 'Firebase', icon: faDatabase },
      { name: 'SQLite', icon: faDatabase },
      { name: 'Redis', icon: faDatabase }
    ],
    'Cloud Services': [
      { name: 'Docker', icon: faDocker },
      { name: 'IBM', icon: faJsSquare },
      { name: 'GCP', icon: faJsSquare },
      { name: 'GitLab', icon: faGitlab }
    ],
    'AI/GenAI': [
      { name: 'TensorFlow', icon: faRobot },
      { name: 'PyTorch', icon: faRobot },
      { name: 'OpenAI', icon: faRobot }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 text-white relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 lg:py-24 relative z-10">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Welcome to <span className="text-blue-400">Techonsy</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Innovating the Future with Cutting-Edge Software Solutions
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button
                onClick={() => window.location.href = '/Services'}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all cursor-pointer"
              >
                Discover More
              </button>
            </div>
          </div> 
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <img
              src="/techonsy_img.jpg"
              alt="Techonsy Hero Illustration"
              className="w-80 lg:w-[30rem]"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-50"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-800 text-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">
            Explore our range of services designed to help your business thrive in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Custom Software Development</h3>
              <p>Tailored solutions to meet your unique business needs.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Cloud Solutions</h3>
              <p>Scalable and secure cloud services to enhance your operations.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">AI & Machine Learning</h3>
              <p>Leverage AI to drive innovation and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology-stack" className="py-16 bg-gray-900 text-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(techStacks).map(domain => (
              <button
                key={domain}
                className={`px-4 py-2 rounded ${activeTab === domain ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab(domain)}
              >
                {domain}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {techStacks[activeTab].map(tech => (
              <div key={tech.name} className="bg-gray-800 p-6 rounded shadow-md flex flex-col items-center w-40 h-40">
                <FontAwesomeIcon icon={tech.icon} size="3x" className="mb-4 text-blue-400" />
                <div className="text-xl">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SnapshotPage/>

      {/* Clients Section */}
      <section id="clients" className="py-16 bg-gray-900 text-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Trusted Brands that Choose Us</h2>
          <p className="text-lg mb-8 text-gray-300">
            Renowned brands and organizations that have placed their trust in our expertise, innovation, and dedication to success.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/wipro.png" alt="Client 1" className="h-20" />
            <img src="/infosys.png" alt="Client 2" className="h-20" />
            <img src="/wassal.png" alt="Client 3" className="h-20" />
            <img src="/tihil.png" alt="Client 4" className="h-20" />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Connect with TECHONSY - your innovation and technology partner. Together, we'll transform your ideas into reality and elevate your business to new heights.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.067540451158!2d73.84736777465228!3d18.525849769014055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11ce7c11b75%3A0x67b2133559cc06b2!2sTechonsy%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1738336663482!5m2!1sen!2sin"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2">
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-700 text-white" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 rounded bg-gray-700 text-white" />
                </div>
                <input type="text" placeholder="Subject" className="w-full p-3 rounded bg-gray-700 text-white" />
                <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-700 text-white h-32"></textarea>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>

  );
}