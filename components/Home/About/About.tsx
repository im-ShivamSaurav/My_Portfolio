'use client'
import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Lottie from "lottie-react";
import developerAnimation from "@/public/lotties/developer.json"; // adjust the path if needed
// import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading> About Me </SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Cotent */}
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
        <div>

        </div>
      </div>
    </div>
  );
};

export default About;

{/* Stacks Content
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
        
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
           
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Satisfied Customers
            </p>
          </div>
       
         <div>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience} 
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>
       
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Completed Projects
            </p>
          </div>
          
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Websites Launched
            </p>
          </div>
        </div>
  */}