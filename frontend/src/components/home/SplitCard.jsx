import React, { useState } from 'react'
import '../../styles/SplitCard.css'



function SplitCard() {
    const [hoverState, setHoverState] = useState("")
    function handleMouseIn(val) {
        setHoverState(val)
    }
    console.log(hoverState)
    return (
        <div className='sc_main'>
            <div className='sc_div1'>

            </div>
            <div className='sc_div2'>
                <div className={`sc_div2_1 ${hoverState == "one" ? "true" : ""}`} onMouseEnter={() => handleMouseIn("one")} onMouseLeave={() => setHoverState("")} >
                    <div className={`sc_div2_11 ${hoverState == "one" ? "true" : ""}`} >

                    </div>


                </div>
                <div style={{ alignItems: "end" }} className={`sc_div2_1 ${hoverState == "two" ? "true" : ""}`} onMouseEnter={() => handleMouseIn("two")} onMouseLeave={() => setHoverState("")} >
                    <div className={`sc_div2_11 ${hoverState == "two" ? "true" : ""}`} >

                    </div>
                </div>
                <div className={`sc_div2_1 ${hoverState == "three" ? "true" : ""}`} onMouseEnter={() => handleMouseIn("three")} onMouseLeave={() => setHoverState("")} >
                    <div className={`sc_div2_11 ${hoverState == "one" ? "true" : ""}`} >

                    </div>
                </div >
                <div style={{ alignItems: "end" }} className={`sc_div2_1 ${hoverState == "four" ? "true" : ""}`} onMouseEnter={() => handleMouseIn("four")} onMouseLeave={() => setHoverState("")} >
                    <div className={`sc_div2_11 ${hoverState == "one" ? "true" : ""}`} >

                    </div>
                </div>
                <div className={`sc_div2_1 ${hoverState == "five" ? "true" : ""}`} onMouseEnter={() => handleMouseIn("five")} onMouseLeave={() => setHoverState("")} >
                    <div className={`sc_div2_11 ${hoverState == "one" ? "true" : ""}`} >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplitCard