import React from 'react'
import '../../styles/Menubar.css'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import SlideInSection from './SlideInSection'
import { useNavigate } from 'react-router-dom'
import techvideo from '../../images/techvideo.mp4'
function Menubar() {
    const  navigate =useNavigate()
    const { showMenu }=useContext(AppContext)
    console.log(showMenu)

    function handleRedirect(val){
        navigate(val)
    }

  return (
    <div className={`mb_main ${showMenu}`}>
         {showMenu?(
            <div className='menu_video'>
            <video src={techvideo} autoPlay muted loop ></video>
        </div>
         ):null}
        {showMenu?(
            <div className='mb_listmain'>
                <div className='menu_items'>
            <SlideInSection delayy={0} durationn={0.5} >
               <div onClick={()=>handleRedirect("/careers")}>Career</div>
            </SlideInSection>
            <SlideInSection delayy={0.1} durationn={0.5} >
                <div onClick={()=>handleRedirect("/about-us")}>ABOUT</div>
            </SlideInSection>
            <SlideInSection delayy={0.2} durationn={0.5} >
                <div onClick={()=>handleRedirect("/web-development")} >WEB DEVELOPMENT</div>
            </SlideInSection>
            <SlideInSection delayy={0.3} durationn={0.5} >
                <div onClick={()=>handleRedirect("/digital-marketing")}>DIGITAL MARKETING</div>
            </SlideInSection>
            <SlideInSection delayy={0.4} durationn={0.5} >
                <div onClick={()=>handleRedirect("/data-ai")}>GEN Z AI</div>
            </SlideInSection>
            <SlideInSection delayy={0.5} durationn={0.5} >
                <div onClick={()=>handleRedirect("/contact-us")}>CONTACT</div>
            </SlideInSection>
            </div>
            </div>
        ):null}
       

    </div>
  )
}

export default Menubar


