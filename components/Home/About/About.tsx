'use client'
import SectionHeading from "@/components/Helper/SectionHeading";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import developerAnimation from "@/public/lotties/developer.json"; // adjust the path if needed
import dynamic from "next/dynamic";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Define the type for the AboutInfo object (based on your API response)
interface AboutInfo {
  title: string;
  description: string;
}

const About = () => {
  // State to hold the fetched data
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);

  // Fetch data from the API route
  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await fetch("/api/AboutInfo");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAboutInfo(data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching AboutInfo:", error);
      }
    };

    fetchAboutInfo();
  }, []);

  // If data is not yet available, show loading state
  if (!aboutInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading> About Me </SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-orange-500 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-yellow-400 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                AI / ML Development
              </p>
            </div>
          </div>
        </div>
        {/* Right side of about */}
        <div className="w-full h-full flex items-center justify-center">
          <Lottie animationData={developerAnimation} loop={true} className="w-[90%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
