import React from 'react'
import '../../styles/Contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'


import { FaMapMarkedAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoTimerOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoShareSocialOutline } from "react-icons/io5";





function Contact() {
    return (

        <>
            <Navbar />
            <div className='contact_main'>
                <div className='contact_main1'>
                    <div className='contact_main11'>
                        <h1>CONTACT INFO</h1>
                    </div>
                    <div className='contact_main12'>
                    <div className='contact_div1'>
                        <div>Talk To Our Experts</div>
                        <div>
                            <Box className='contact_div11'
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField style={{ width: "400px" }} id="standard-basic" label="Name" variant="standard" />
                                <TextField style={{ width: "400px" }} id="standard-basic" label="Email" variant="standard" />
                                <TextField style={{ width: "400px" }} id="standard-basic" label="Phone" variant="standard" />
                                <textarea style={{ width: "400px" }} name="" id="" rows={2} placeholder='Message...'></textarea>
                            </Box>
                            <button>SEND</button>
                        </div>

                    </div>
                    <div className='contact_div2'>
                        <div className='contact_div21'>
                            <div className='contact_div211' >
                                <span><FaMapMarkedAlt /></span>

                            </div>
                            <div >
                                <h1>HEYRAM INFRASTRUCTURE </h1>
                                <p>Sakthi Nagar,Porur</p>
                                <p>Chennai-600116</p>
                            </div>
                        </div>

                        <div className='contact_div21'>
                            <div className='contact_div211' >

                                <span><FiPhoneCall /></span>


                            </div>
                            <div >
                                <h1>Call Us </h1>
                                <p>+91 7538870577</p>
                            </div>
                        </div>

                        <div className='contact_div21'>
                            <div className='contact_div211' >
                                <span><TfiEmail /></span>


                            </div>
                            <div >
                                <h1>Email Us </h1>
                                <p>info@heyraminfrastructure.com</p>
                            </div>
                        </div>
                        <div className='contact_div21'>
                            <div className='contact_div211' >
                                <span><IoTimerOutline /></span>


                            </div>
                            <div >
                                <h1>Operating Hours</h1>
                                <p>Monday to Saturday (9AM - 6PM)</p>
                            </div>
                        </div>
                        <div className='contact_div21'>
                            <div className='contact_div211' >
                                <span><IoShareSocialOutline /></span>


                            </div>
                            <div >
                                <h1>Social</h1>
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>whatsapp</p>
                                <p>linkedin</p>

                            </div>
                        </div>

                    </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact