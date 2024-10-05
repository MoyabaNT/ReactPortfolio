import React, { useState } from 'react';
import logodesign from '../assets/portfolio/MyLogo.png';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import PLogo from '../assets/portfolio/PLogo.png';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import NthabiiLogo from '../assets/portfolio/NthabiiLogo.png';

const Portfolio = () => {
    const portfolio = [
        { id: 1, src: logodesign, message: 'SazzyStitches: A vibrant crochet business where creativity and craftsmanship come together. I designed the logo using Canva to perfectly embody the essence of my unique crochet creations. Each stitch tells a story, reflecting the passion and dedication behind every piece. At SazzyStitches, we celebrate the art of crochet, bringing coziness and color to your life through beautifully crafted items.' },
        { id: 2, src: PLogo, message: 'Pack It Buddy: Your ultimate companion for seamless long-distance moving and transportation. The logo is thoughtfully designed to represent the journey of clients as they pack their belongings into boxes, symbolizing the careful attention we bring to every move. Pack It Buddy serves as the essential link between clients and drivers, ensuring a smooth and efficient connection. With the app, finding the right transport for your needs has never been easier. Experience the convenience of modern moving with Pack It Buddy, where every move is a breeze!' },
        { id: 3, src: navbar, message: 'Responsive Navbar: Crafted with Tailwind CSS, these sleek and modern navigation bars are designed to enhance user experience across all devices. Their responsive design ensure seamless accessibility, allowing users to effortlessly navigate through content, whether on mobile, tablet, or desktop. The intuitive layout and stylish aesthetics make for a visually appealing interface that complements any website, providing both functionality and elegance. Elevate your web presence with a navigation solution that adapts to your users needs!' },
        { id: 4, src: reactSmooth, message: 'Seamless Navigation with React Smooth Scroll: I integrated React Smooth Scroll into my projects to deliver a refined scrolling experience that enhances user engagement. This powerful library enables smooth, fluid transitions between sections, ensuring that users enjoy an uninterrupted flow as they navigate through content. The result is a visually captivating and user-friendly interface that keeps visitors immersed in the experience. Elevate your web application with smooth scrolling that reflects modern design standards!' },
        { id: 5, src: installNode, message: 'I leverage the power of Node.js for the backend, ensuring a fast and efficient server-side environment that handles requests seamlessly. Coupled with React, Vite, and Tailwind CSS on the front end, I create dynamic and responsive user interfaces that captivate users. This modern stack allows for rapid development and high performance, delivering a cohesive and visually stunning experience. Whether it is enhancing interactivity or optimizing load times, my approach combines the best of both worlds to bring your web applications to life!' },
        { id: 6, src: NthabiiLogo, message: 'Nthabii-dev Logo: Crafted with precision using Canva, the Nthabii-dev logo embodies innovation and creativity in the digital space. This distinctive design reflects the essence of my work, showcasing a modern aesthetic that resonates with tech enthusiasts and professionals alike. Each element has been thoughtfully considered to represent the values and vision of Nthabii-dev, making it not just a logo, but a symbol of commitment to excellence in development.' }
    ];

    // State to track if the "demo" button has been clicked for each card
    const [isDemoClicked, setIsDemoClicked] = useState(Array(portfolio.length).fill(false));

    // Function to handle the demo click event
    const handleClick = (index) => {
        const updatedDemoState = [...isDemoClicked];
        updatedDemoState[index] = true; // Set the clicked state to true for the clicked card
        setIsDemoClicked(updatedDemoState);
    };

    // Function to handle the close button event
    const handleClose = (index) => {
        const updatedDemoState = [...isDemoClicked];
        updatedDemoState[index] = false; // Reset the clicked state to false for the clicked card
        setIsDemoClicked(updatedDemoState);
    };

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work here!</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
                    {portfolio.map(({ id, src, message }, index) => (
                        <div
                            key={id}
                            className={`shadow-md shadow-gray-600 rounded-lg ${
                                isDemoClicked[index] ? 'bg-gradient-to-b from-black to-gray-800 text-white' : ''
                            }`} // Apply pink background if demo is clicked
                        >
                            {isDemoClicked[index] ? (
                                <div className="p-4 text-white text-center">
                                    {message} {/* Display the specific message for each card */}
                                </div>
                            ) : (
                                <img
                                    src={src}
                                    alt=""
                                    className="rounded-md duration-200 hover:scale-105"
                                />
                            )}
                            <div className="flex items-center justify-center">
                                {isDemoClicked[index] ? (
                                    // Close button to revert the card to its original state
                                    <button
                                        className="w-full px-6 py-3 m-4 bg-gray-600 text-white rounded-md duration-200 hover:scale-105 z-10"
                                        onClick={() => handleClose(index)}
                                    >
                                        Close
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                            onClick={() => handleClick(index)}
                                        >
                                            View
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
