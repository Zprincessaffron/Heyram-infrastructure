import React, { useEffect, useState } from 'react'
import '../../styles/Services.css'
import glass from '../../images/glass47.png'
import aidata from '../../images/aidata.png'
import Button from '../button/Button'
import digital from '../../images/digitalservices.png'
import web from '../../images/webdevelopment.png'
import animationWeb from '../../images/Animation-web.json'; 
import Lottie from 'react-lottie';
import animationdigital from '../../images/Animation-digital.json'; 
import animationdata from '../../images/Animation-data.json'; 
import Footer from '../footer/Footer'


function Services() {
    const [blur,setBlur]=useState(false)

    useEffect(() => {
     setTimeout(() => {
        setBlur(true)
     }, 100);
    }, [ ])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationWeb,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationdigital,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    
  return (
    <>
    <div className='services_main'>
        <div className='services_div1' style={{backgroundImage:`url(${glass})`}} >

            <div className={`services_div11 ${blur?"true":""}`}>
                <div className='services_div11_font1'>Together We Genesis</div>
                <div className='services_div11_font2'>At the core of innovation, we bring fresh ideas and craft next-gen websites with creativity and  expertise. Our IT services are designed to push boundaries, offering solutions that elevate  your digital presence and drive success</div>


            </div>
            

        </div>
        <div className='services_div2'>
            <div className='services_div21'>
                <div className='services_div21_1'>
                    <div className='services_div21_1_bar'></div>
                    <h1 className='services_div21_1_h1'>Website Development</h1>
                    <p className='services_div21_1_p'>We deliver cutting-edge AI solutions and powerful data analytics to unlock insights  and drive smarter decisions. By leveraging innovative technologies, we analyze  complex data and provide tailored services to meet your unique business needs.</p>
                    <div className='services_div21_11'>View More<Button/> </div>
                </div>
                <div className='services_div21_2'>
                <Lottie style={{opacity:"80%"}} options={defaultOptions} width={500} />
                         </div>
            </div>


            <div className='services_div21' style={{flexDirection:"row-reverse"}} >
                <div className='services_div21_1'>
                    <div className='services_div21_1_bar'></div>
                    <h1 className='services_div21_1_h1'>Digital Marketing Services</h1>
                    <p className='services_div21_1_p'>Our digital marketing services help you reach and engage your target audience  effectively. From SEO to social media and content marketing, we create customized  strategies that boost your online presence and drive measurable results for your  business.</p>
                    <div className='services_div21_11'>View More<Button/> </div>
                </div>
                <div className='services_div21_2' style={{display:"flex",justifyContent:"end"}}>
                <Lottie style={{opacity:"80%"}} options={defaultOptions2} width={400} />
                </div>
            </div>


            <div className='services_div21'  >
                <div className='services_div21_1' >
                    <div className='services_div21_1_bar'></div>
                    <h1 className='services_div21_1_h1'>AI and Data Analytics Services</h1>
                    <p className='services_div21_1_p'>We deliver cutting-edge AI solutions and powerful data analytics to unlock insights  and drive smarter decisions. By leveraging innovative technologies, we analyze  complex data and provide tailored services to meet your unique business needs.</p>
                    <div className='services_div21_11'>View More<Button/> </div>
                </div>
                <div className='services_div21_2'>
                <Lottie  style={{opacity:"80%"}} options={defaultOptions3} width={400} />
                </div>
            </div>

            <Footer/>
        </div>
        
    </div>
   
    </>
  )
}

export default Services