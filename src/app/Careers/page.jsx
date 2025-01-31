"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/Components/Layout";
import React, { useState } from "react";

const Careers = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [expandedJob, setExpandedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a skilled frontend developer to join our team. Proficiency in React, Next.js, and Tailwind CSS is a plus!",
    },
    {
      id: 2,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-Time",
      description:
        "Join our backend team to build scalable APIs. Experience with Node.js and MongoDB is required.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "On-site",
      type: "Internship",
      description:
        "If you have a passion for creating user-friendly designs, we want to hear from you! Experience in Figma is preferred.",
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    return (
      (filter === "" || job.department === filter) &&
      (search === "" ||
        job.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-900 text-white">
        {/* Header Section */}
        <div className="text-center bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold">Careers at Techonsy</h1>
          <p className="text-lg mt-4">
            Find your next career opportunity and help us shape the future!
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="py-6 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search by job title..."
            className="flex-1 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="py-6 px-6 max-w-6xl mx-auto">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 mb-6"
              data-aos="fade-up"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">{job.title}</h3>
                  <p className="text-sm text-gray-400">
                    {job.location} | {job.type}
                  </p>
                </div>
                <button
                  className="text-blue-500"
                  onClick={() =>
                    setExpandedJob(expandedJob === job.id ? null : job.id)
                  }
                >
                  {expandedJob === job.id ? "Hide Details" : "View Details"}
                </button>
              </div>
              {expandedJob === job.id && (
                <div className="mt-4">
                  <p className="text-gray-300">{job.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-400">No jobs found.</p>
          )}
        </div>

        {/* Application Form */}
        <div className="py-12 px-6 max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
            Submit Your Application
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Resume</label>
              <div className="border-dashed border-2 border-gray-700 p-4 rounded-lg">
                <input
                  type="file"
                  className="w-full text-sm text-gray-500"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Cover Letter</label>
              <textarea
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
                rows="4"
                placeholder="Why do you want to join us?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;