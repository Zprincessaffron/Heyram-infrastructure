import React from 'react'
import '../../styles/ServiceIntro.css'
import frame4 from '../../images/frame 4.png'
function ServiceIntro() {
  return (
    <div className='si_main'>
        <div className='si_main_quates'> Crafted with Talent, Perfected through Service </div>
        <div className='si_selection'>
            <div>DEVELOPMENT</div>
            <div>DIGITAL MARKETING </div>
            <div> Data & Ai</div>


        </div>
        <div className='si_div1'>
            <div className='si_div11'>
                <div className='si_div11_0'>WEBSITE DEVELOPMENT</div>
                <div className='si_div11_1'>
                At Heyram Infrastructure, we create modern, responsive websites tailored to your business needs. From design to development, our team ensures a seamless user experience, helping you stand out in the digital world.
                </div>
                <div>
                    <button>View More</button>
                </div>
            </div>
            <div className='si_div12'>
                <img src={frame4} alt="" />

            </div>

        </div>
        <div className='sifull_main'>
            <div>

            </div>
            <div>
                
            </div>

        </div>
    </div>
  )
}

export default ServiceIntro