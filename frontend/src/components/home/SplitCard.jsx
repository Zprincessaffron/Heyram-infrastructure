import React, { useState } from 'react'
import '../../styles/SplitCard.css'



function SplitCard() {
    const [hoverState, setHoverState] = useState("")
    function handleMouseIn(val) {
        setHoverState(val)
    }

    const dataSet = [
        {
          id: 1,
          title: "Shoot & Studio",
          content: "JavaScript is a versatile programming language used.",
          al:"start",
          flexd:"column"
        },
        {
          id: 2,
          title: "Setup",
          content: "CSS is used to style and layout web pages. ",
          al:"end",
          flexd:"column-reverse"

        },
        {
          id: 3,
          title: "Show",
          content: "HTML is the standard language for creating web pages",
          al:"start",
          flexd:"column"


        },
        {
          id: 4,
          title: "Sky",
          content: "React is a JavaScript library for building user interfaces",
          al:"end",
          flexd:"column-reverse"


        },
        {
          id: 5,
          title: "Suggest",
          content: "Node.js is a runtime environment that allows JavaScript",
          al:"start",
          flexd:"column"


        }
      ];
    return (
        <div className='sc_main'>
            <div className='sc_div1'>
                <h1>OUR SERVICES</h1>
                <button>View</button>

            </div>
            <div className='sc_div2'>
                {dataSet.map((item)=>(
                    <div style={{alignItems:`${item.al}`}}   key={item.id} className={`sc_div2_1 ${hoverState == item.id ? "true" : ""}`} onMouseEnter={() => handleMouseIn(item.id)} onMouseLeave={() => setHoverState(" ")} >
                    <div style={{flexDirection:`${item.flexd}`}} className='sc_div2_1static'>
                      <div className='sc_div2_1static_1'>
                          <h1>{item.title}</h1>
                      </div>
                      <div className='sc_div2_1static_2'>
                          <h2>0{item.id}</h2>
                      </div>
                    </div>
                      <div className={`sc_div2_11 ${hoverState == item.id ? "true" : ""}`} >
                        <div style={{flexDirection:`${item.flexd}`}} className={`sc_div2_11_1 ${hoverState == item.id ? "true" : ""}`} >
                        <div className='sc_div2_11_1_1'>
                        <h1>{item.title}</h1>
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