'use client'

import React, { useState, useEffect, useRef } from 'react';

const SnapshotPage = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [retention, setRetention] = useState(0);
  const [team, setTeam] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const targetValues = {
    years: 10,
    projects: 50,
    retention: 95,
    team: 30,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          clearInterval(intervalRef.current);
          resetCounts();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  const startCounting = () => {
    intervalRef.current = setInterval(() => {
      setYears(prev => (prev < targetValues.years ? prev + 1 : prev));
      setProjects(prev => (prev < targetValues.projects ? prev + 1 : prev));
      setRetention(prev => (prev < targetValues.retention ? prev + 1 : prev));
      setTeam(prev => (prev < targetValues.team ? prev + 1 : prev));

      if (
        years >= targetValues.years &&
        projects >= targetValues.projects &&
        retention >= targetValues.retention &&
        team >= targetValues.team
      ) {
        clearInterval(intervalRef.current);
      }
    }, 50);
  };

  const resetCounts = () => {
    setYears(0);
    setProjects(0);
    setRetention(0);
    setTeam(0);
  };

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 text-white min-h-fit flex flex-col items-center justify-center py-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 mt-5 ml-8 font-sans">
        Snapshot of Our Success
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 text-center">
          <span className="text-blue-300 font-bold text-4xl">{years}+</span>
          <p className="text-gray-200 mt-2">Years in Business</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 text-center">
          <span className="text-blue-300 font-bold text-4xl">{projects}+</span>
          <p className="text-gray-200 mt-2">Projects Delivered Globally</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 text-center">
          <span className="text-blue-300 font-bold text-4xl">{retention}%</span>
          <p className="text-gray-200 mt-2">Global Client Retention Rate</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 text-center">
          <span className="text-blue-300 font-bold text-4xl">{team}+</span>
          <p className="text-gray-200 mt-2">Team Members</p>
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-10 mb-5 w-40">
        Learn More
      </button>
    </div>
  );
};

export default SnapshotPage;