import React from 'react'
import html from '../assets/html.png'
import Figma from '../assets/figma.png'
import GitHub from '../assets/github.png'
import Nextjs from '../assets/nextjs.png'
import Tailwind from '../assets/tailwind.png'
import JavaScript from '../assets/javascript.png'
import REactimage from '../assets/react.png'
import Firebase from '../assets/firebase.png'
import Canva from '../assets/canva.png'

const MyExperience = () => {
  const techs=[
    {
      id: 1,
      src:html,
      title: 'HTML',
      style: 'shadow-orange-500 text-white'
    },
     {
      id: 2,
      src:JavaScript,
      title: 'JavaScript',
      style: 'shadow-yellow-400 text-white'
    }, 
    {
      id: 3,
      src: REactimage,
      title: 'React',
      style: 'shadow-blue-600 text-white'
    },
     {
      id: 4,
      src:Tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400 text-white'
    }, 
    {
      id: 5,
      src:Nextjs,
      title: 'Next JS',
      style: 'shadow-white text-white'
    }, 
       {
      id: 6,
      src:GitHub,
      title: 'GitHub',
      style: 'shadow-gray-400 text-white'
    },   
     {
      id: 7,
      src:Firebase,
      title: 'Firebase',
      style: 'shadow-amber-400 text-white'
    },
    {
      id: 8,
      src:Figma,
      title: 'Figma',
      style: 'shadow-purple-400 text-white'
    },  
      {
      id: 9,
      src:Canva,
      title: 'Canva',
      style: 'shadow-blue-300 text-white'
    },
    
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
        <p className='py-6'>These are my technologies</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {techs.map(({id, src, title, style}) => (
        <div key={id}
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} alt="" className='w-20 mx-auto'/>
        <p className='mt-4'>{title}</p>
      </div>        ))}

      </div>
    </div>
  )
}

export default MyExperience