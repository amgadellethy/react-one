import React from 'react'
import '../bootstrap/bootstrap.min.css'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'




export default function Contact() {
    return <>
        
        <div className="contact ">
            <div className="container">
                <h2 className='text-center'>CONTACT SECTION</h2>
                <div className=" portfolio-star text-center mb-4">
                   <FontAwesomeIcon icon={faStar}  />
                </div>
               
                    <div className=" text-center">
                        <div className="user mb-4">
                            <input type="text" placeholder='userName' className='w-50 py-2' />
                        </div>
                        <div className="user mb-4">
                            <input type="number" placeholder='userAge' className='w-50 py-2' />
                        </div>
                        <div className="user mb-4">
                            <input type="email" placeholder='userEmail' className='w-50 py-2' />
                        </div>
                        <div className="user mb-4">
                            <input type="password" placeholder='userPassword' className='w-50 py-2' />
                    </div>
                    <div className="button-container w-50 mx-auto text-start">
                        <button className=''>send Message</button>
                    </div>
                    
                        
                    </div>
                
                








            </div>
        </div>
       


  </>
  
}
