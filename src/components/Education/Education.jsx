import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          My education has been a journey of learning and growth.  
          Here are the milestones of my academic background.
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col items-center gap-12">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full sm:max-w-2xl p-6 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_25px_2px_rgba(130,69,236,0.3)] hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Logo & Info */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-16 bg-white rounded-md overflow-hidden border border-purple-500 shadow-md">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-md text-gray-300">{edu.school}</h4>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              </div>
            </div>

            {/* Grade */}
            <p className="mt-4 text-purple-400 font-bold">
              Grade: {edu.grade}
            </p>

            {/* Description */}
            <p className="mt-3 text-gray-400">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
