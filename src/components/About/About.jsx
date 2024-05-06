import React from 'react'
import '../bootstrap/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function About() {
    return <>
         <div className='home'>
       <div className='container d-flex flex-column justify-content-center align-items-center gap-3'>
     
        <h2 className='text-center text-white h1 fw-bolder'>ABOUT COMPONENT</h2>
        <div className="star text-white">
        <FontAwesomeIcon icon={faStar}  />

                </div>
                <div className="text-content">
                    <div className="row gy-3">
                        <div className="col-md-6 col-12 mb-3">
                            <div className="inner">
                                <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <div className="inner">
                                <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
    </div>
    </div>
    </>
    
  
}
