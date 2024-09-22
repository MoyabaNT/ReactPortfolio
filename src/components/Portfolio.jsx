import React from 'react'
import logodesign from '../assets/portfolio/MyLogo.png'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import PLogo from '../assets/portfolio/PLogo.png'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import NthabiiLogo from '../assets/portfolio/NthabiiLogo.png'

const Portfolio = () => {
    const portfolo = [
        {
            id: 1,
            src: logodesign
        },
        {
            id: 2,
            src: PLogo
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: NthabiiLogo
        }
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8"> 
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className="py-6">
                    Check out some of m work here!
                </p>
                
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
            {
    portfolo.map(({id, src}) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                
        <img 
        src={src}
         alt="" 
         className="rounded:md duration-200 hover:scale-105"/>
        <div className="flex items-center justify-center">
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
        </button>
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                code
        </button>
                </div>
                </div>

    ))
}
            </div>
        </div>
    </div>
  )
}

export default Portfolio