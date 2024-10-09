import React, { useState } from 'react';
import first from '../assets/pay.png';
import second from '../assets/quote.png';
import third from '../assets/reque.png';
import forth from '../assets/side.png';
import fifth from '../assets/view.png';
import six from '../assets/direct.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProjectExperience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(false); // New state for slideshow

  const myprojects = [
    {
      id: 1,
      images: [forth, second, third, first, fifth, six], // Array of images for each project
      title: 'Pack It Buddy',
      message: 'Final year project ~ Find the project here 👌 : https://github.com/MoyabaNT/Systematic-Six-Final-Sprint/tree/main ...Pack It Buddy addresses a significant gap in the moving industry by providing a platform that connects customers with trustworthy moving services, particularly for those in rural areas who are often overlooked. The industry has yet to tap into the potential of offering reliable packing assistance, leaving many customers uncertain about which companies to trust. Our solution bridges this gap by offering a seamless, transparent platform that caters to all customers, including those in temporary housing such as renters in business hubs. Pack It Buddy delivers a user-centric, efficient service that ensures forwarders and customers are easily connected.',
    },
  ];

  const handleViewClick = (id) => {
    setSelectedProject(id);
    setCurrentImageIndex(0); // Start the slideshow from the first image
    setShowSlideshow(false); // Show the message first
  };

  const handleStartSlideshow = () => {
    setShowSlideshow(true); // Start showing the slideshow
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0); // Reset to the first image
    setShowSlideshow(false); // Reset slideshow view
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === myprojects[0].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? myprojects[0].images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      name="projects"
      className="w-full h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Projects
        </p>
        <p className="py-6 text-lg">These are the projects I have worked on</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-white">
          {myprojects.map(({ id, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${
                selectedProject === id ? 'scale-110' : ''
              }`}
            >
              <img
                src={myprojects[0].images[0]} // Display the first image as thumbnail
                alt={title}
                className="w-44 mx-auto"
              />
              <p className="mt-4 text-base">{title}</p>
              {!selectedProject && (
                <button
                  onClick={() => handleViewClick(id)}
                  className="px-2 py-1 bg-blue-500 rounded"
                >
                  View
                </button>
              )}
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative text-center">
              {!showSlideshow ? (
                <div>
                  {/* Display the message first */}
                  <p className="bg-gradient-to-b from-black via-slate-950 to-black text-white p-4 rounded-lg">
                    {myprojects[0].message}
                  </p>
                  <button
                    onClick={handleStartSlideshow}
                    className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-950 hover:font-bold text-white rounded"
                  >
                    View project
                  </button>
                </div>
              ) : (
                <div>
                  <img
                    src={myprojects[0].images[currentImageIndex]} // Display the current image in the slideshow
                    alt="Enlarged"
                    className="w-3/4 h-auto ml-44 sm:ml-24"
                  />
                  <button
                    onClick={handleCloseClick}
                    className="absolute top-4 right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full"
                  >
                    X
                  </button>

                  <button
                    onClick={handlePrevClick}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-full"
                  >
                    <IoIosArrowBack />
                  </button>

                  <button
                    onClick={handleNextClick}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-full"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectExperience;
