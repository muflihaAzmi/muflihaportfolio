import React, { useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/mmm.png';
import chat from '../assets/chat.png';
 
function Navbar() {

  const [isOpen,setIsOpen] = useState(false);


  return (
   <>
   
   <nav className='h-15 flex md:pl-20 md:pr-20 p-5 items-center md: justify-between sticky top-0 z-10 '>
    <img src={logo} className='object-cover h-15 w-13 mt-5'/>


    <div className='hidden md:flex gap-x-8 cursor-pointer'>
    <Link  activeClass="active" to ='content' spy={true} smooth={true} offset={-180} duration={500} className='font-semibold text-gray-200  border-b-2 border-transparent hover:border-[#f5f5f9] transition-all duration-300'>Home</Link> 
    <Link  activeClass='active' to ='about' spy={true} smooth={true} offset={-100} duration={500} className='font-semibold text-gray-200  border-b-2 border-transparent hover:border-[#f5f5f9] transition-all duration-300'>About</Link>
    <Link  activeClass="active" to ="skill" spy={true} smooth={true} offset={-25} duration={500} className='font-semibold text-gray-200  border-b-2 border-transparent hover:border-[#f5f5f9] transition-all duration-300'>Skill</Link>
    <Link  activeClass="active" to ="portfolio" spy={true} smooth={true} offset={-50} duration={500} className='font-semibold text-gray-200 border-b-2 border-transparent hover:border-[#f5f5f9] transition-all duration-300' >Portfolio</Link>
    </div>
 
    <div className='flex justify-end gap-2'>
   <button className='bg-white h-10 w-35 flex items-center justify-between font-semibold text-blue-900 px-4 py-2 rounded-3xl shadow-md md: hover:bg-gray-200 cursor-pointer md:transform md:transition md:duration-300 hover:scale-105 active:scale-105 transition-transform duration-300' onClick={()=>document.getElementById('contact').scrollIntoView({behavior: 'smooth'})

   }>Contact Me
    <img src={chat} alt="" className="h-4 w-4" />
   </button>

   {!isOpen &&(
    <button className='md:hidden' onClick={()=> setIsOpen(true)}>
      <span className='text-3xl text-white  ' >&#9776;</span>
    </button>
    )}
    </div>
    

     {isOpen && (
    <div className='md:hidden cursor-pointer flex flex-col gap-2 mt-20  '>
    <Link activeClass="active" to ='content' spy={true} smooth={true} offset={-30} duration={500}  className='font-semibold text-gray-200 border-b-2 border-transparent active:border-[#f5f5f9] transition-all duration-300' onClick={() => setIsOpen(false)}>Home</Link> 
    <Link activeClass='active' to ='about' spy={true} smooth={true} offset={-40} duration={500} className='font-semibold text-gray-200 border-b-2 border-transparent active:border-[#f5f5f9] transition-all duration-300' onClick={() => setIsOpen(false)}>About</Link>
    <Link activeClass="active" to ="skill" spy={true} smooth={true} offset={40} duration={500} className='font-semibold text-gray-200 border-b-2 border-transparent active:border-[#f5f5f9] transition-all duration-300' onClick={() => setIsOpen(false)}>Skill</Link>
    <Link activeClass="active" to ="portfolio" spy={true} smooth={true} offset={40} duration={500}className='font-semibold text-gray-200 border-b-2 border-transparent active:border-[#f5f5f9] transition-all duration-300' onClick={() => setIsOpen(false)}>Portfolio</Link>
   
    </div>
    
     )}
  

   </nav>

   </>
  )
}

export default Navbar