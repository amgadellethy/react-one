import React from 'react'
import './Home.css'
import '../bootstrap/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return <>


    <div className='home'>
       <div className='container d-flex flex-column justify-content-center align-items-center gap-3'>
     
        <img src="../../../public/avataaars.svg" className='w-100' alt="" />
        <h2 className='text-center text-white h1 fw-bolder'>START FRAMEWORK</h2>
        <div className="star text-white">
        <FontAwesomeIcon icon={faStar}  />

        </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
    </>
  
}
  


     
  
     
    
  
