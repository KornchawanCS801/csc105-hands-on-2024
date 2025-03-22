import React from 'react'
import Me2 from '../images/me2.jpg'

function About() {
  return (
    <div 
      className="w-screen h-screen bg-white flex justify-center items-center px-4"
    
      
    >
      <div className="w-full sm:w-2/3 md:w-1/2 h-auto sm:h-2/3 md:h-1/2 bg-white flex flex-col sm:flex-row shadow-lg rounded-lg overflow-hidden">

        <div className="w-full sm:w-1/3 flex justify-center items-center p-4"   >
          <img src={Me2} alt="Skyhook" className="w-2/3 sm:w-full rounded-lg object-cover" />
        </div>
        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center space-y-4">
          <h2 className="font-bold text-4xl sm:text-6xl">About Me</h2>
          <h2 className="font-semibold text-xl sm:text-2xl">College Student</h2>
          <p className="text-sm sm:text-base">
            LOVE YOU  3000
          </p>
          <button className="bg-yellow-700 text-white duration-300 hover:bg-green-800 p-2 rounded-xl font-semibold px-4">
            Read more
          </button>
        </div>

      </div>
    </div>
  )
}

export default About