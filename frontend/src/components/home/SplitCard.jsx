import React, { useState } from 'react'
import '../../styles/SplitCard.css'
import { useNavigate } from 'react-router-dom'


function SplitCard() {
    const navigate  = useNavigate()

    const [hoverState, setHoverState] = useState("")
    function handleMouseIn(val) {
        setHoverState(val)
    }

    const dataSet = [
        {
          id: 1,
          title: "Discover",
          content: "Website Development: We create customized websites that elevate your brand's online presence. From responsive design to secure, scalable solutions, our web development services ensure an engaging user experience that drives conversions and growth.",
          al:"start",
          flexd:"column"
        },
        {
          id: 2,
          title: "Design",
          content: "E-commerce Solutions: Build a powerful online store with our e-commerce services. We handle everything from product management and secure payment integration to optimizing the customer journey, helping you turn visitors into buyers.",
          al:"end",
          flexd:"column-reverse"

        },
        {
          id: 3,
          title: "develop",
          content: "Search Engine Optimization (SEO): Our SEO services help you rank higher on search engines, driving organic traffic to your website. By optimizing your content, structure, and performance, we ensure that your business gets the visibility it needs to succeed.",
          al:"start",
          flexd:"column"


        },
        {
          id: 4,
          title: "Deploy",
          content: "Social Media Marketing: Engage your audience where they spend the most time—social media. Our targeted social media marketing strategies grow your brand's presence, build customer loyalty, and increase engagement through creative and effective campaigns.",
          al:"end",
          flexd:"column-reverse"


        },
        {
          id: 5,
          title: "Deliver",
          content: "Data & AI Solutions: Transform your data into actionable insights with our Data & AI services. We offer advanced analytics, and AI-driven solutions to help you predict trends, optimize operations, and make data-backed decisions.",
          al:"start",
          flexd:"column"


        }
      ];
    return (
        <div className='sc_main'>
            <div className='sc_div1'>
                <h1>OUR SERVICES</h1>
                <button onClick={()=>navigate('/services')}>View</button>

            </div>
            <div className='sc_div2'>
                {dataSet.map((item)=>(
                    <div style={{alignItems:`${item.al}`}}   key={item.id} className={`sc_div2_1 ${hoverState == item.id ? "true" : ""}`} onMouseEnter={() => handleMouseIn(item.id)} onMouseLeave={() => setHoverState(" ")} >
                    <div style={{flexDirection:`${item.flexd}`}} className='sc_div2_1static'>
                      <div className='sc_div2_1static_1'>
                          <h1>{item.title}</h1>
                      </div>
                      <div className='sc_div2_1static_2 '>
                          <h2 className=''>0{item.id}</h2>
                      </div>
                    </div>
                      <div className={`sc_div2_11 ${hoverState == item.id ? "true" : ""}`} >
                        <div style={{flexDirection:`${item.flexd}`}} className={`sc_div2_11_1 ${hoverState == item.id ? "true" : ""}`} >
                        <div className='sc_div2_11_1_1'>
                        <h1 className='pb-5'>{item.title}</h1>
                        <p>{item.content}</p>
                        </div>
                      <div className='sc_div2_11_1_2'>
                      <h2>0{item.id}</h2>
                      </div>
                        </div>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default SplitCard