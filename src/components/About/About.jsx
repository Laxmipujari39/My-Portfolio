import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I’m
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Laxmi Poojari
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I’m a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                options={{
                  strings: [
                    "Web Development Enthusiast",
                    "Ex Tech Content Writer",
                    "Tech Learner",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 98,
                }}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m currently pursuing a B.E. in Electronics and Telecommunications at 
            Thadomal Shahani Engineering College. Along the way, I’ve developed an interest 
            in building clean and simple web interfaces using technologies like React, 
            Node.js, and MongoDB, as well as programming in Java and Python.
            <br /><br />
            Most of my projects have been small, personal learning exercises — like 
            portfolio websites and experimental apps — where I could try out new ideas 
            and strengthen my skills. I also enjoy writing technical content and exploring 
            how technology can be explained in clear, simple ways.
            <br /><br />
            Outside of coding, I’m curious about emerging technologies, enjoy creating 
            organized plans, and love seeing ideas take shape into something useful.
          </p>
          <a
            href="https://drive.google.com/file/d/1_5QakGIT7_HAp96Vuyv7cGKA1U38T62k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            My Resume
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Laxmi Poojari"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;