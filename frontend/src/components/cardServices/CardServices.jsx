import React, { useState } from 'react'
import '../../styles/CardServices.css'
import dottedback from '../../images/dottedback.png'
import webd from '../../images/webd.jpg'
import accord_1 from '../../images/accord_1-1.gif'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { GiPartyHat } from "react-icons/gi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { PiIslandFill } from "react-icons/pi";
import animationWeb from '../../images/webanim.json';
import Lottie from 'react-lottie';
import Footer from '../footer/Footer'
import { TbPointFilled } from "react-icons/tb";
import branding from '../../images/brannding.jpg'
import strategy from '../../images/strategy.jpg'
import startupCompanies from './CardServicesData'
import background from '../../images/startupc.jpg'
function CardServices() {
    const [heigth, setHeight] = useState('')
    const data = startupCompanies.startupCompanies
    const webServiceData = [
        {
            title: "Personal",
            png: <IoIosPersonAdd />
        },
        {
            title: "Business",
            png: <MdBusinessCenter />
        },
        {
            title: "e-commerce",
            png: <FaShoppingCart />
        },
        {
            title: "Education",
            png: <FaBookReader />
        },
        {
            title: "Event",
            png: <GiPartyHat />
        },
        {
            title: "travel",
            png: <FaSuitcaseRolling />
        },
        {
            title: "real Estate",
            png: <PiIslandFill />
        }
    ]

    function handleHeight(val) {
        if (heigth == val) {
            setHeight("")
        } else {
            setHeight(val)
        }
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationWeb,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div className='cs_main'>
            <div className='cs_container1' style={{backgroundImage:`url(${background})`}}>
            <div>
                    <h1>START-UP COMPANIES</h1>
                    <p>Start-ups need a strong foundation to establish their presence and compete effectively in the digital marketplace. We offer a comprehensive range of services to help new businesses build, promote, and grow their brands</p>

                </div>
            </div>

            <div className='cs_container2'>
                <div className='cs_container2_splitter'>
                    <div className='cs_container2_1'>
                        <h1>{data.webDevelopment[0].title}</h1>
                        <p> <span style={{ marginTop: "3px", marginRight: "5px" }}>  <TbPointFilled /> </span>{data.webDevelopment[0].content}</p>

                    </div>
                    <div className='cs_container2_2' style={{ backgroundImage: `${dottedback}` }}>
                        <Lottie style={{ opacity: "80%" }} options={defaultOptions} width={650} />


                    </div>
                </div>
                <div className='cs_container2_splitter2'>
                    <div className='cs_container2_s1'>
                        <h1>Featured Website Design Projects</h1>
                    </div>
                    <div className='cs_container2_s2'>
                        {webServiceData.map((item) => (
                            <div className='weservicesmap'>
                                <>{item.png}</>
                                <h1>{item.title}</h1>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <div className='cs_container4'>
                <div className='cs_container4_splitter'>
                    <div className='cs_container41'>
                        <h1>DIGITAL SERVICES</h1>
                        {data.digitalMarketing.map((item)=>(
                            <div className='cs_container411'>
                            <div className='cs_container411_1'>

                                <h1>0{item.id}</h1>

                            </div>
                            <div className='cs_container411_2'>
                                <div className={`cs_container411_21 ${heigth == item.title ? "true" : ''}`}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>

                                </div>
                                <div className='cs_container411_22'>
                                    <div className={`cs_container411_22_2 ${heigth == item.title ? "true" : ""}`}><FaArrowAltCircleDown onClick={() => handleHeight(item.title)} /></div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>


                </div>


            </div>
            <div className=' pl-[3rem] pb-[3rem] w-[100%] '>
                <div className='cs_container5' >
                    <div className='cs_container51'>
                        <h1>{data.branding[0].title}</h1>
                        <p>{data.branding[0].content}</p>

                    </div>
                    <div className='cs_container52'>
                        <img src={branding} alt="" />

                    </div>
                </div>

                <div className='cs_container6'  >
                    <div className='cs_container61'>
                        <img src={strategy} alt="" />

                    </div>
                    <div className='cs_container62' >
                        <h1>{data.marketingStrategies[0].title}</h1>
                        <p>{data.marketingStrategies[0].content}</p>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CardServices