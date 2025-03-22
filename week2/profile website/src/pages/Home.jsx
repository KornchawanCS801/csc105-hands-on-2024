import React from 'react'
import Faceb from '../logos/face.jpg'
import Gmail from '../logos/gmail.jpg'
import Instragram from '../logos/instagram.jpg'
import Me1 from '../images/me1.jpg'
function Home() {
  return (
    <>
    <div className='w-screen h-screen bg-gray-100 flex justify-center items-center' >
      <div className='w-full sm:w-2/3 md:w-1/2 bg-white flex p-4 items-center rounded-2xl '>
        <div className='w-2/3'>
            <h2 className='text-3xl font-semibold'> My Name is</h2>
            <h1 className='font-bold'>Kornchawal Pasitthichokphokin</h1>
            <h2 className='text-3xl font-semibold mb-4'>I'm a CS Student</h2>
            <h3 className='text-xl w-1/2 '>I'm Thai and I am a gamer</h3>
            <div className='flex space-x-4 mt-4'>

              <img src = {Faceb} alt="Logo" width={34} className='cursor-pointer' />
              <img src = {Gmail} alt="Logo" width={34} className='cursor-pointer' />
              <img src = {Instragram} alt="Logo" width={48} className='cursor-pointer' />
            </div>
              <button className='bg-yellow-600 w-1/3 mt-8 rounded-2xl p-2 font-bold text-white duration-200 hover:bg-green-800 '>My Portfolio</button>
        </div> 
        <div>
        <img src={Me1} alt="Profile" className='rounded' />

        </div>
      
      </div>
    </div>
    </>
  )
}

export default Home
