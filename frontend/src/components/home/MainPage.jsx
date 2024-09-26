import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Home.css'
import firstimg from '../../images/40.jpg'
import rectangle from '../../images/rectangle11.png'
import rectangle20 from '../../images/rectangle20.jpg'
import career from '../../images/career.jpg'

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Button from '../button/Button'
import ServiceIntro from './ServiceIntro'
function MainPage() {
    const [scale,setScale]=useState()
    const [imageWidth, setImageWidth] = useState('100%'); // Initial image width
    
    const [isDivInView, setIsDivInView] = useState(false);
    const [ opacityContent,setOpacityContent] = useState(false)
    const divRef = useRef(null);
  


    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            
        setScale(true)
        }, 1000);
     
    }, [])
    useEffect(() => {
      if(imageWidth <= 50){
        setOpacityContent(true)

      }else{
        setOpacityContent(false)
      }
      
    }, [imageWidth])
    useEffect(() => {
      if(isDivInView == false){
        setImageWidth(100)

      }
      
    }, [isDivInView])
    console.log(imageWidth)
    

    useEffect(() => {
      const handleScroll = () => {
        if (divRef.current) {
          const topPosition = divRef.current.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (topPosition <= 0) {
            // Div is at the top, start resizing the image
            setIsDivInView(true);
  
            // Calculate how far the div has been scrolled past the top
            const scrolledDistance = Math.min(Math.abs(topPosition), viewportHeight); // Max out at the viewport height
  
            // Interpolate the image width from 100vw to 40vw
            const newWidth = Math.max(45, 100 - (scrolledDistance / viewportHeight) * 60); // 100vw -> 40vw
            setImageWidth(`${newWidth}`);
          } else {
            setIsDivInView(false);
            setImageWidth('100%'); // Reset to 100vw if div hasn't reached the top yet
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
   <>
   <div className='mainmain'>
    <div className='maincon'>
        <div className='maincon1'>
            <img src={firstimg} alt="" />
            <div className='maincon2'>
                <h1>HEYRAM INFRASTRUCTURE</h1>
                <h2> Experience the impact across your digital ecosystem</h2>
                <div><span>Connect with us </span><span><Button/></span></div>

            </div>
            <div className={`maincon3 ${scale?"true":""}`}>

            </div>

        </div>

        


    </div>

    <div className='mainpagediv2'>
        <img src={rectangle} alt="" />
        <img  style={{rotate:"180deg",marginTop:"10rem",top:"280vh"}} src={rectangle} alt="" />


        <div className='mainpagediv21'>
        <div className='mainpagediv22'>
            <div className='mainpagediv22_1'  >
            <h1>Empower Your Business with Access to World-Class Services.</h1>
            <div className='mainpagediv221'><span>See What We Do</span><span><Button/></span></div>
            </div>
            <div style={{marginBottom:"10rem"}}>
              <ServiceIntro/>
            </div>
            <div>
          
        <div className='mainpagediv4'  ref={divRef}
>

            <img  src={career} alt=""  style={{    width: `${imageWidth}%`,
            position: 'sticky',
            top: '30%', // Adjust the top position as needed
            // Center the image horizontally
             // To perfectly center the image
            transition: 'width 0.1s ease'}}  />
            <div className={`mainpagediv41 ${opacityContent?"true":""}`}>
              <h3>CAREERS</h3>
              <h2>Grow your career at the heart of change</h2>
              <p>It's your time to shine. Bring your ingenuity, curiosity and big ideas.</p>
              <div><span>Join  Us </span><Button/> </div>


            </div>
            
            </div>
            
            
            </div>
            <div  className='mainpagediv5'>
              <div>
                <h1>Your business is our priority!</h1>
                <p>Partnering with Heyram infrastructure enables your organization to gain a competitive  advantage by focusing on your core business goals and delivering dependable solutions,  optimized to meet your needs. Reach out today to schedule a meeting, and discover how we  deliver the best solutions possible.</p>
                <div><span>Connect with us </span><span><Button/></span></div>
              </div>
            </div>

            <div  className='mainpagediv6'>
              <div>
                <h1>Our MSP Clients</h1>
              </div>
              <div className='mainpagediv62'>
                <div >
                  Zprincess saffron
                </div>
                <div >
                  Zprincess saffron
                </div>
                <div >
                  Zprincess saffron
                </div>
              </div>
            
            </div>

           
        </div>

        </div>
        
      
        

        


    </div>

   </div>
   
   </>
  )
}

export default MainPage