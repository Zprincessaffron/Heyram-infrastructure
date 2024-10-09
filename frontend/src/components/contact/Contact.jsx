import React, { useContext, useEffect, useState } from 'react'
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
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner"; // Import the desired spinner
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';



function Contact() {

    const [loading, setLoading] = useState(false)
    const { isMobile } = useContext(AppContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post('/contact', data);
            console.log('contact Form submitted successfully:', response.data);
            setLoading(false)
            toast("Submited Sucessfully ✓")
            // You can also reset the form or redirect after submission
            reset();
        } catch (error) {
            console.error(error);
            setLoading(false)

        }


    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            <Navbar />
            {isMobile ? (
                <div className='contact_mainn'>

                    <div className='contact_mainn_1'>
                        <h1>CONTACT INFORMATION</h1>

                    </div>
                    <div className='contact_mainn_2'>
                        <h1>Talk To Our Experts</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" className={`errormsg ${errors.name ? 'error' : ''}`}    {...register('name', { required: 'Name is required' })} />
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" className={`errormsg ${errors.email ? 'error' : ''}`}

                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Email is not valid',
                                    },
                                })} />
                        </div>

                        <div>
                            <label htmlFor="">Phone</label>
                            <input type="tel" 
                             className={errors.phone ? 'error' : ''}
                             {...register('phone', {
                                 required: 'Phone number is required',
                                 minLength: {
                                     value: 10,
                                     message: 'Phone number must be at least 10 digits',
                                 },
                                 maxLength: {
                                     value: 15,
                                     message: 'Phone number cannot exceed 15 digits',
                                 },
                             })}/>
                        </div>

                        <div>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" rows={2} placeholder='Message...' className={`errormsg ${errors.message ? 'error' : ''}`}   {...register('message', { required: 'message is required' })} ></textarea>
                        </div>
                        <div className='con_button_div'>
                        <button>{loading ? (<ThreeDots
                                            height="15"
                                            width="30"
                                            color="white"
                                            ariaLabel="loading"
                                        />) : "Send"}</button>
                        </div>
                        </form>

                    </div>
                    <div className='contact_mainn_2'>
                    <div  className='contact_div21'>
                                    <div className='contact_div211' >
                                        <span><FaMapMarkedAlt /></span>

                                    </div>
                                    <div >
                                        <h1>HEYRAM INFRASTRUCTURE </h1>
                                        <p>Sakthi Nagar,Porur</p>
                                        <p>Chennai-600116</p>
                                    </div>
                                </div>
                    
                    
                    <div  className='contact_div21'>
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
                                
                    </div>


                </div>

            ) : (
                <div className='contact_main'>
                    <div className='contact_main1'>
                        <div className='contact_main11'>
                            <h1>CONTACT INFO</h1>
                        </div>
                        <div className='contact_main12'>
                            <div className='contact_div1'>
                                <div>Talk To Our Experts</div>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <Box className='contact_div11'
                                            component="form"
                                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                            noValidate
                                            autoComplete="off"
                                        >

                                            <TextField style={{ width: `${isMobile ? "200px" : "400px"}` }} id="standard-basic" label="Name" variant="standard" className={`errormsg ${errors.name ? 'error' : ''}`}    {...register('name', { required: 'Name is required' })} />
                                            <TextField style={{ width: `${isMobile ? "200px" : "400px"}` }} id="standard-basic" label="Email" variant="standard" className={`errormsg ${errors.email ? 'error' : ''}`}

                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^\S+@\S+$/i,
                                                        message: 'Email is not valid',
                                                    },
                                                })}
                                            />
                                            <TextField style={{ width: `${isMobile ? "200px" : "400px"}` }} id="standard-basic" label="Phone" variant="standard" type='tel'
                                                className={errors.phone ? 'error' : ''}
                                                {...register('phone', {
                                                    required: 'Phone number is required',
                                                    minLength: {
                                                        value: 10,
                                                        message: 'Phone number must be at least 10 digits',
                                                    },
                                                    maxLength: {
                                                        value: 15,
                                                        message: 'Phone number cannot exceed 15 digits',
                                                    },
                                                })}
                                            />
                                            <textarea style={{ width: `${isMobile ? "200px" : "400px"}` }} name="" id="" rows={2} placeholder='Message...' className={`errormsg ${errors.message ? 'error' : ''}`}   {...register('message', { required: 'message is required' })} ></textarea>
                                        </Box>
                                        <button>{loading ? (<ThreeDots
                                            height="15"
                                            width="30"
                                            color="white"
                                            ariaLabel="loading"
                                        />) : "Send"}</button>
                                    </form>
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


                            </div>
                        </div>

                    </div>

                </div>
            )}
            <Footer />
        </>
    )
}

export default Contact