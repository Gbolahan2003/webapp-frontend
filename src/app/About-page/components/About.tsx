import React from 'react'
import Image from 'next/image'
import '../../../Styles/About.css'

import Picture from '../../../../public/images/png/About1.png'
import Picture1 from '../../../../public/images/png/About2.png'
import Picture2 from '../../../../public/images/png/About3.png'
const About = () => {
  return (
    <div>
        <div className="about-container">
          <section className="first-section">
            <div className="about-main-container">
                <div className="about-text-container">
                    <div className="about-header">
                        <h1>About us</h1>
                        <p className="about-header-text">We are young individuals who are enthusiastic about promoting functional literacy by bridging the gap between underserved students, and their access to digital literacy in Nigeria.

                       </p>
                        <p className="about-header-text">Cybtracy was founded in 2020 after our founders volunteered for the World Literacy Foundation and saw the need for digital literacy in their community. They ran a four-weeks digital training class in an underserved school, and they saw that there was a big void that needed to be filled as the majority of the students had zero to little idea on how to do basic things with a digital computer.</p>
                    </div>
                </div>
                <div className="about-text-container">
                    <div className="about-header">
                        <h1>Our mission</h1>
                        <p className="about-header-text">Our mission is to promote functional literacy through basic digital literacy in underserved schools and communities in Nigeria. We seek to impact students with forward-thinking digital skills to a point where they can come up with solutions to problems on their own, and communicate it digitally.</p>
                    </div>
                </div>
                <div className="about-button">
                <button>
                    meet the Team
                </button>
            </div>
           </div> 
           <div className="about-us-image_container">
            <div className="pic-1"><Image src={Picture1} alt='leone'/></div>
            <div className="picture"><Image src={Picture} alt='leone'/></div>
            <div className="pic-1"><Image src={Picture2} alt='leone'/></div>
            </div>
            
            </section>  
            <section className="impact">
                <div className="impact-container">
               <div className="div-impact">
               <div className="impact-header">The Impact </div>
               
               <div className="impact-text-container"> <div className="impact-text">Over 200 secondary school students in this cohort and 150 in the pilot version have been impacted.</div></div>
               </div>
                </div>
                </section>    
                <section className="support">
                    <div className="section-support-container">
                        <div className="support-text-container">
                            <div className="support-text-header">Supporting organizations</div>
                            <p className="support-text">We are better with your support. Become a part of the family!</p>
                            <div className="about-button">
                            <button>
                            Partner with us
                           </button>
                           </div>
                        </div>
                        <div className="support-image-container">
                            <div className='div-1 a'>
                            <div className="support-div"></div>
                            <div className="support-div"></div>
                            </div>
                           
                            <div className='div-1 b'>
                            <div className="support-div"></div>
                            <div className="support-div"></div>
                            </div>
                           
                            <div className='div-1 c'>
                            <div className="support-div"></div>
                            <div className="support-div"></div>
                            </div>
                           
                        </div>

                    </div>
                </section>
     </div>
    </div>
  )
}

export default About