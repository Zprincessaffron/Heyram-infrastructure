import React from 'react'
import '../../styles/Menubar.css'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import SlideInSection from './SlideInSection'
function Menubar() {
    const { showMenu }=useContext(AppContext)
    console.log(showMenu)

  return (
    <div className={`mb_main ${showMenu}`}>
        {showMenu?(
            <div className='menu_items'>
            <SlideInSection delayy={0} durationn={0.5} >
               Career
            </SlideInSection>
            <SlideInSection delayy={0.1} durationn={0.5} >
                <div>ABOUT</div>
            </SlideInSection>
            <SlideInSection delayy={0.2} durationn={0.5} >
                <div>WEB DEVELOPMENT</div>
            </SlideInSection>
            <SlideInSection delayy={0.3} durationn={0.5} >
                <div>DIGITAL MARKETING</div>
            </SlideInSection>
            <SlideInSection delayy={0.4} durationn={0.5} >
                <div>GEN Z AI</div>
            </SlideInSection>
            <SlideInSection delayy={0.5} durationn={0.5} >
                <div>CONTACT</div>
            </SlideInSection>
            </div>
        ):null}

    </div>
  )
}

export default Menubar