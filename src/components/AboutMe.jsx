import React from 'react'

const AboutMe = () => {
  return (
    <div
     name="about" 
     className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500"> 
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dolor, ut esse sapiente odit nemo officiis nobis ea at impedit debitis repudiandae! Consequatur exercitationem animi, aperiam ad nihil, voluptates sit impedit saepe quod sapiente repudiandae reiciendis blanditiis similique, neque nemo nisi officiis inventore ipsa. Hic ipsam eveniet expedita corrupti iusto!            
            </p>
        <br />
        <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore, qui quaerat autem aliquam quos expedita reprehenderit et quam culpa iusto harum quas praesentium cupiditate dicta eius necessitatibus sit ipsum nulla molestiae, numquam ullam? Dicta eligendi dolor mollitia amet assumenda unde aperiam ipsa fuga. Perspiciatis, illum at! Quaerat, aspernatur aliquam!
        </p>
        </div>

        
    </div>
  )
}

export default AboutMe