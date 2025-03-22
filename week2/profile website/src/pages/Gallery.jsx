import React from 'react'
import picture1 from '../images/pic1.jpg'
import picture2 from '../images/pic2.jpg'
import picture3 from '../images/pic3.jpg'
import picture4 from '../images/pic4.jpg'
import picture5 from '../images/pic5.jpg'
import picture6 from '../images/pic6.jpg'

function Gallery() {
  return (
    <div className='flex flex-col bg-black w-screen items-center justify-center'  >
        <div className='font-bold mb-10 text-white'>
            <h1>Gallery</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 w-1/2 space-y-6">
            <img src={picture1} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={picture2} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={picture3} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={picture4} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={picture5} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={picture6} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
     </div>
    </div>
  )
}

export default Gallery
