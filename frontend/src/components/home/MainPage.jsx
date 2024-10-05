import React, { useContext, useEffect, useRef, useState } from 'react'
import '../../styles/Home.css'
import firstimg from '../../images/40.jpg'
import rectangle from '../../images/rectangle11.png'
import rectangle20 from '../../images/rectangle20.jpg'
import career from '../../images/career.jpg'
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import turningimg from '../../images/turning-img.png'
import Button from '../button/Button'
import ServiceIntro from './ServiceIntro'
import TopSection from './TopSection'  
import Footer from '../footer/Footer'
import SlideInSection from './SlideInSection'
import Navbar from '../navbar/Navbar'
import NeonBox from './NeonBox'
import { useNavigate } from 'react-router-dom'
import Connect from '../form/Connect'
import { AppContext } from '../../context/AppContext'
import MainSection from './MainSection'
import MenuButton from '../navbar/MenuButton'
import Menubar from '../menubar/Menubar'
import Cards from './Cards'
import small from '../../images/small.png'
import mid from '../../images/mid.png'
import big from '../../images/big.png'
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HiBuildingOffice } from "react-icons/hi2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Test from './Test'
import SplitCard from './SplitCard'

function MainPage() {
  const ref = React.useRef(null);
  const { connectForm, setConnectForm } = useContext(AppContext)

  const isInView = useInView(ref, { once: false }); 
    const [scale,setScale]=useState()
    const [imageWidth, setImageWidth] = useState('100%'); // Initial image width
    
    const [isDivInView, setIsDivInView] = useState(false);
    const [ opacityContent,setOpacityContent] = useState(false)
    const divRef = useRef(null);
    const navigate = useNavigate()
    
  


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
   <Connect/>
   <Navbar/>
   <MenuButton/>
   <Menubar/>
   
   
   <div className='mainmain'>

    {/* <TopSection/> */}
    <MainSection/>

    <div className='mainpagediv2'>



        <div className='mainpagediv21'>
        <img className='turningimg' src={turningimg} alt="" />
 
        <div className='mainpagediv22'>
            <div className='mainpagediv22_0'>
              
             <div className='mainpagediv22_0_1'>
                     <h1>Choose the Perfect Package Tailored for Your Business Growth</h1>
             </div>
             <div className='mainpagediv22_0_2'  style={{flexDirection:"row",justifyContent:"center"}}  >
             <div >
              <SlideInSection  delayy={0.2} durationn={0.4}>
              <Cards translate="card_div2left"   type="Start-Up Companies" route='/startup-services' images={<SiHomeassistantcommunitystore/>} intro="Empowering new ventures to transform ideas into reality with agile and innovative solutions."
              intro2="Start-ups require cost-effective and scalable solutions. We provide the support to fuel their growth." />
             </SlideInSection>
              </div>

              <div>
              <SlideInSection delayy={0.4} durationn={0.4}>

              <Cards  translate="card_div2mid"  type="Growing Organizations"  route='/mid-services' images={<HiBuildingOffice/>}   intro="Helping established businesses scale up with technology and strategic solutions."
              intro2="Mid-size companies need tailored strategies for scaling operations. We offer targeted solutions to achieve this." />
             </SlideInSection> 
 
              </div>

              <div>
              <SlideInSection delayy={0.6} durationn={0.4}>

              <Cards translate="card_div2right" type="Global Organizations"  route='/large-services' images={<PiBuildingApartmentFill/>}   intro="Supporting enterprises to stay ahead with enterprise-grade solutions and services."
              intro2="Large companies require robust and secure solutions. We deliver enterprise-level services to match their needs." />
             </SlideInSection>

              </div>
             </div>
            


            </div>
            {/* <div className='mainpagediv22_1'  >
            <SlideInSection delayy={0.2} durationn={0.4}>
            <h1 className='mainpagediv221_h1'>Empower Your Business with Access to World-Class Services.</h1>
            </SlideInSection>
            <SlideInSection delayy={0.3} durationn={0.4}>

            <div className='mainpagediv221'><span onClick={()=>navigate('/services')}>See What We Do</span><span onClick={()=>navigate('/services')}><Button/></span></div>
            </SlideInSection>

            </div> */}
            <div className='mainpagediv22_101'>
              <SplitCard/>

            </div>
            <div style={{marginBottom:"10rem"}}>
              <ServiceIntro/>
              {/* <Test/> */}
            </div>
            <div>
          
        <div className='mainpagediv4'  ref={divRef}
>

            <img  src={career} alt=""  style={{    width: `${imageWidth}%`,
            position: 'sticky',
            top: '30%', // Adjust the top position as needed
            // Center the image horizontally
             // To perfectly center the image
           }}  />
            <div className={`mainpagediv41 ${opacityContent?"true":""}`}>
              <h3>CAREERS</h3>
              <h2>Grow your career at the heart of change</h2>
              <p>It's your time to shine. Bring your ingenuity, curiosity and big ideas.</p>
              <div style={{cursor:"pointer"}} onClick={()=>{navigate('/careers')}}><span>Join  Us </span><Button/> </div>
              

            </div>
            
            </div>
            
            
            </div>
            <div  className='mainpagediv5'>

              <div>
              <SlideInSection delayy={0.2} durationn={0.4}>

                <h1 className='mainpagediv5_h1'>Your business is our priority!</h1>
                
              </SlideInSection>
                <p className='mainpagediv5_p'>Partnering with Heyram infrastructure enables your organization to gain a competitive  advantage by focusing on your core business goals and delivering dependable solutions,  optimized to meet your needs. Reach out today to schedule a meeting, and discover how we  deliver the best solutions possible.</p>
                <div  style={{cursor:"pointer"}} onClick={()=>{setConnectForm(true)}} ><span>Connect with us </span><span><Button/></span></div>
              </div>
            </div>

            {/* <div  className='mainpagediv6'>
              <div>
              <SlideInSection delayy={0.2} durationn={0.4}>

                <h1 className='mainpagediv6_h1'>Our MSP Clients</h1>
                </SlideInSection>
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
              <div>
                <NeonBox/>
              </div>
           

            
            </div> */}

           
        </div>
      
        
   <Footer/>

        </div>
        
      
        

        


    </div>

   </div>
   
   
   </>
  )
}

export default MainPage