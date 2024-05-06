import React from 'react'
import '../bootstrap/bootstrap.min.css'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    return <>       
        <div className="portfolio text-center my-5 position-relative">
           
            <h2>PORTFOLIO COMPONENT</h2>        
        <div className=" portfolio-star text-center mb-4">
        <FontAwesomeIcon icon={faStar}  />
            </div>
           <div className="portfolio-imgs mb-5">
            <div className="container">
                 <div className="row g-5">
                <div className="col-4">
                    <div className="inner position-relative ">
                            <img src="../../../public/poert1.png" className='w-100 ' alt="" />
                            <div className="overlay">
                            <FontAwesomeIcon icon={faPlus} className='plus-icon'  />

                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="inner position-relative ">
                            <img src="../../../public/port2.png" className='w-100 ' alt="" />
                            <div className="overlay">
                            <FontAwesomeIcon icon={faPlus} className='plus-icon'  />

                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="inner position-relative ">
                            <img src="../../../public/port3.png" className='w-100 ' alt="" />
                            <div className="overlay">
                            <FontAwesomeIcon icon={faPlus} className='plus-icon'  />

                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="inner position-relative ">
                            <img src="../../../public/poert1.png" className='w-100 ' alt="" />
                            <div className="overlay">
                            <FontAwesomeIcon icon={faPlus} className='plus-icon'  />

                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="inner position-relative ">
                            <img src="../../../public/port2.png" className='w-100 ' alt="" />
                            <div className="overlay">
                            <FontAwesomeIcon icon={faPlus} className='plus-icon'  />

                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="inner position-relative ">
                            <img src="../../../public/port3.png" className='w-100 ' alt="" />
                            <div className="overlay">
                            <FontAwesomeIcon icon={faPlus} className='plus-icon'  />

                            </div>
                    </div>
                </div>
            </div>
            </div>
           
            </div> 



            <div className="pop-up d-none w-100 position-absolute start-0 top-0">
                <div>
                    <img src="../../../public/poert1.png" alt="" />
                </div>
                
            </div>    
        </div>
    </> 
}

const allImgs = document.querySelectorAll(".portfolio-imgs .row img");
// console.log(allImgs);
const overlay = document.querySelectorAll(".portfolio-imgs .row .overlay");
// console.log(overlay);
const popUp = document.querySelector(".pop-up");
// console.log(popUp)
const popUpImages = document.querySelector(".pop-up img")

function showPopUP() {
    popUp.classList.remove("d-none");
}
function hidePopUP() {
    popUp.classList.add("d-none");
}
function getImageSrc(e) {
    popUpImages.setAttribute("src" , e)
    // console.log(e)
}


for (let i = 0; i < overlay.length; i++){
    overlay[i].addEventListener("click", function (e) {
        showPopUP();
        // getImageSrc(e)
        getImageSrc(e.target.previousElementSibling.getAttribute("src"))
        
    })
}






popUp.addEventListener("click", function (e) {
    if (e.target === popUp) {
        hidePopUP()
    }
})

