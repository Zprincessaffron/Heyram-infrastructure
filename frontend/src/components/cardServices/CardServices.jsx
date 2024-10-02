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

function CardServices() {
    const [heigth,setHeight]=useState('')
    const webServiceData = [
        {
            title:"Personal",
            png:<IoIosPersonAdd/>
        },
        {
            title:"Business",
            png:<MdBusinessCenter/>
        },
        {
            title:"e-commerce",
            png:<FaShoppingCart/>
        },
        {
            title:"Education",
            png:<FaBookReader/>
        },
        {
            title:"Event",
            png:<GiPartyHat/>
        },
        {
            title:"travel",
            png:<FaSuitcaseRolling/>
        },
        {
            title:"real Estate",
            png:<PiIslandFill/>
        }
    ]

    function handleHeight(val){
        if(heigth == val){
            setHeight("")
        }else{
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
        <div className='cs_container1'>
           <div>
           <h1>START-UP COMPANIES</h1>
            <p>Start-ups need a strong foundation to establish their presence and compete effectively in the digital marketplace. We offer a comprehensive range of services to help new businesses build, promote, and grow their brands</p>

           </div>
        </div>

        <div className='cs_container2'>
            <div className='cs_container2_splitter'>
            <div className='cs_container2_1'>
               <h1> WEB DEVELOPMENT</h1>
               <p> <span style={{marginTop:"3px",marginRight:"5px"}}>  <TbPointFilled/> </span> Our team specializes in creating modern, responsive, and high-performance websites using the MERN stack (MongoDB, Express.js, React, and Node.js) as the core technology stack. By leveraging this powerful combination, we develop applications that are not only visually engaging but also provide a seamless user experience. Using React for the frontend, Node.js and Express.js for the backend, and MongoDB for efficient data management, we ensure that each website is built to deliver high performance and scalability.</p>
               <p> <span style={{marginTop:"3px",marginRight:"5px"}}>  <TbPointFilled/> </span>  This approach enables us to create websites with fast load times, dynamic content updates, and the ability to scale effortlessly as your business grows. Additionally, the modular nature of the MERN stack allows for seamless integration with a variety of third-party services, APIs, and microservices, providing a solid foundation for future expansion and new functionalities.






</p>

            </div>
            <div className='cs_container2_2' style={{backgroundImage:`${dottedback}`}}>
                <Lottie style={{opacity:"80%"}} options={defaultOptions} width={500} />


            </div>
            </div>
            <div className='cs_container2_splitter2'>
                <div className='cs_container2_s1'>
                    <h1>Featured Website Design Projects</h1>
                </div>
                <div className='cs_container2_s2'>
                    {webServiceData.map((item)=>(
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
                <div className='cs_container411'>
                    <div className='cs_container411_1'>

                    <h1>01</h1>

                    </div>
                    <div className='cs_container411_2'>
                        <div className={`cs_container411_21 ${heigth=="seo"?"true":''}`}>
                        <h1>Search Engine Optimization</h1>
                        <p>We focus on both on-page and off-page SEO strategies to improve your website’s visibility and ranking on search engines.</p>
                       
                        </div>
                        <div className='cs_container411_22'>
                            <div className={`cs_container411_22_2 ${heigth == "seo"?"true":""}`}><FaArrowAltCircleDown onClick={()=>handleHeight("seo")}/></div>
                        </div>
                    </div>
                </div>

                <div className='cs_container411'>
                    <div className='cs_container411_1'>
                    <h1>02</h1>



                    </div>
                    <div className='cs_container411_2'>
                    <div className={`cs_container411_21 ${heigth=="smm"?"true":''}`}>
                    <h1>Social Media Marketing</h1>
                        <p>Build a strong social media presence through targeted strategies, ensuring your brand reaches the right audience.</p>
                       
                        </div>
                        <div className='cs_container411_22'>
                        <div className={`cs_container411_22_2 ${heigth == "smm"?"true":""}`}><FaArrowAltCircleDown onClick={()=>handleHeight("smm")}/></div>
                        </div>
                    </div>
                </div>

                <div className='cs_container411'>
                    <div className='cs_container411_1'>
                    <h1>03</h1>


                    </div>
                    <div className='cs_container411_2'>
                    <div className={`cs_container411_21 ${heigth=="wm"?"true":''}`}>
                    <h1>WhatsApp & Mail Marketing</h1>
                        <p>Personalized communication to reach your potential customers through effective WhatsApp campaigns and professional email marketing strategies.</p>                     
                        </div>
                        <div className='cs_container411_22'>
                        <div className={`cs_container411_22_2 ${heigth == "wm"?"true":""}`}><FaArrowAltCircleDown onClick={()=>handleHeight("wm")}/></div>
                        </div>
                    </div>
                </div>

                <div className='cs_container411'>
                    <div className='cs_container411_1'>
                    <h1>04</h1>


                    </div>
                    <div className='cs_container411_2'>
                    <div className={`cs_container411_21 ${heigth=="im"?"true":''}`}>
                    <h1>Influencer Marketing</h1>
                        <p>Leverage influencers to increase brand credibility and reach niche audiences.</p>                       
                        </div>
                        <div className='cs_container411_22'>
                        <div className={`cs_container411_22_2 ${heigth == "im"?"true":""}`}><FaArrowAltCircleDown onClick={()=>handleHeight("im")}/></div>
                        </div>
                    </div>
                </div>

                <div className='cs_container411'>
                    <div className='cs_container411_1'>
                    <h1>05</h1>


                    </div>
                    <div className='cs_container411_2'>
                    <div className={`cs_container411_21 ${heigth=="lg"?"true":''}`}>
                    <h1>Lead Generation</h1>
                        <p> Identify and target potential customers with data-driven lead generation strategies.</p>                       
                        </div>
                        <div className='cs_container411_22'>
                        <div className={`cs_container411_22_2 ${heigth == "lg"?"true":""}`}><FaArrowAltCircleDown onClick={()=>handleHeight("lg")}/></div>
                        </div>
                    </div>
                </div>

                <div className='cs_container411'>
                    <div className='cs_container411_1'>

                    <h1>06</h1>

                    </div>
                    <div className='cs_container411_2'>
                    <div className={`cs_container411_21 ${heigth=="tg"?"true":''}`}>
                    <h1>Traffic Generation</h1>
                        <p>Implement content and digital ad strategies to drive targeted traffic to your site.</p>                       
                        </div>
                        <div className='cs_container411_22'>
                        <div className={`cs_container411_22_2 ${heigth == "tg"?"true":""}`}><FaArrowAltCircleDown onClick={()=>handleHeight("tg")}/></div>
                        </div>
                    </div>
                </div>

    

            </div>
          

            </div>

            
        </div>
      <div className='flex pl-[3rem] pb-[3rem] w-[100%] '>
      <div className='cs_container5' >
            <h1>Branding</h1>
            <p>We develop a cohesive brand identity that includes creating unique logos, memorable taglines, and consistent visual styles to effectively communicate your brand’s values. Our approach involves designing logos that reflect your business’s essence, crafting taglines that capture your brand message, and establishing a visual style with defined colors, fonts, and imagery. This ensures your brand resonates with your target audience and maintains a consistent look and feel across all platforms, making your business instantly recognizable and professional.</p>

            </div>

            <div className='cs_container5'  >
            <h1>Marketing Strategies</h1>
            <p>We design tailored marketing strategies specifically for start-up companies to establish their presence, build brand awareness, and drive growth from the ground up. Our approach begins with a deep understanding of your business objectives, target audience, and competitive landscape. We then create a multi-channel marketing plan that integrates digital advertising, social media campaigns, and content strategies to maximize your reach and engagement. By leveraging data-driven insights and agile marketing techniques, we ensure that each campaign is optimized for performance and cost-efficiency, helping you attract potential customers, generate leads, and achieve sustainable growth.</p>

            </div>
      </div>

        <Footer/>
    </div>
  )
}

export default CardServices