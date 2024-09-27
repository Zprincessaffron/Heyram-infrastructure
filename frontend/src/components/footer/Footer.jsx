import React from 'react'
import '../../styles/Footer.css'
import linkedin from '../../images/linkedin.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";


import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footermain'>
        <div className='footer_div1'>
            <div className='footer_div1_1'>
                <h1>Services</h1>
                <div>Web development</div>
                <div>digital marketing</div>
                <div>ai & data</div>
            </div>
            <div className='footer_div1_1'>

            <h1>about us</h1>
                <div>about</div>
                <div>contact </div>
            </div>
            <div className='footer_div1_1'>

            <h1>careers</h1>
            <div>career</div>
            </div>
            <div className='footer_div1_1'>
            <h1>connect with us</h1>
                <div><FaLinkedinIn/>linkedin</div>
                <div><FaInstagram/>instagram</div>
                <div><FaWhatsapp/>whatsapp</div>
                <div><FaFacebookF/>facebook</div>

            </div>

        </div>
        <div className='footer_div2'>
            <div className='footer_div21'>
                www.heyraminfrastructure.com
            </div>
            <div className='footer_div22'>
                <div>TERMS AND CONDITION</div>
                <div>PRIVACY POLICY</div>

            </div>

        </div>
    </div>
  )
}

export default Footer