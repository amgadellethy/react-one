import React from 'react'
import './information.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function information() {
    return <>
        <div className="information">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3">
                        <div className="inner text-white text-center">
                            <h4>LOCATION</h4>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>

                            
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="inner text-white">
                            <h4 className='text-center'>AROUND THE WEB</h4>
                            <ul className='social-list d-flex justify-content-center  align-items-center gap-2 m-0 p-0'>
                                <li>
                                <FontAwesomeIcon icon={faFacebook}  />
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faTwitter}  />
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faLinkedin}  />
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faGlobe}  />
                                </li>
                            </ul>
                           

                            
                        </div>
                    </div>


                    <div className="col-12 col-md-4 mb-3">
                        <div className="inner text-white text-center">
                            <h4>ABOUT FREELANCER</h4>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                           

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  
}
