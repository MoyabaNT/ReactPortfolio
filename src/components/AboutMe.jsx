import React from 'react';

const AboutMe = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base sm:text-lg md:text-xl mt-10 sm:mt-20">
          As a Full Stack Developer, I excel in designing, developing, and managing innovative technology solutions tailored to solve complex business problems. My expertise spans a broad range of technologies including JavaScript for dynamic applications, React Native for cross-platform mobile development, and Tailwind CSS for crafting modern, responsive websites. I am skilled in leveraging Firebase for robust backend solutions, managing data with MySQL, and creating compelling graphics with Canva and Figma. My proficiency with Git ensures efficient version control and collaboration.
        </p>
        <br />
        <p className="text-base sm:text-lg md:text-xl">
          With a degree that fosters a strong problem-solving mindset, I am adept at integrating technology to drive meaningful results, continuously innovate, and adapt to the latest industry trends. My commitment to excellence and passion for technology enable me to deliver high-impact solutions that align with strategic business goals.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
