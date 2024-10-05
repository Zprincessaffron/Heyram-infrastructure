import React, { useEffect, useState } from 'react'
import './Test.css'
import circletext from "../../images/circle-text.png";

function Test() {
    const [ballRotate, setBallRotate] = useState(0);
    const [stop, setStop] = useState(false); // State to handle animation class
    const [ballText, setBallText] = useState("plan");
    const [currentText, setCurrentText] = useState(""); // State to hold the current text

    const arr = [
        "plan",
        "design",
        "development",
        "test",
    ];
    let index = 0;

    useEffect(() => {
        if (!stop) {
            const interval = setInterval(() => {
                setBallRotate(ballRotate + 50);
            }, 3000); // 4 seconds interval

            return () => clearInterval(interval);
        }
    }, [ballRotate, stop]);

    useEffect(() => {
        if (!stop) {
            const interval = setInterval(() => {
                setCurrentText(arr[index]);
                index = (index + 1) % arr.length;
            }, 3000); // 4 seconds interval

            return () => clearInterval(interval);
        }
        // Cleanup on component unmount
    }, [stop]); //

    return (
        <div className='w-[100%]'>
            <div style={{ textAlign: "center" }} className="si_main_quates">

                Crafted with Talent, Perfected through Service
            </div>


            <div>
                <h1 className='t_con' >WEB DEVELOPMENT</h1>

            </div>

            <div className='t_mainn'>


                <div className={`t_main1 ${currentText=='plan'?"true":""}`}>
                    <div style={{ rotate: `${currentText == 'plan'?ballRotate:null}deg` }} className={`tmain2 ${currentText=='plan'?"true":""}`}>
                        <img src={circletext} alt="" />

                    </div>
                    <div className={`t_main3 ${currentText=='plan'?"true":""}`}>
                        Planning
                        

                    </div>
                    <div className={`line ${currentText == "design"?"true":""}`}>

                        </div>

                </div>

                <div  className={`t_main1 ${currentText=='design'?"true":""}`}>
                    <div style={{ rotate: `${currentText == 'design'?ballRotate:null}deg` }} className='tmain2'>
                        <img src={circletext} alt="" />

                    </div>
                    <div className={`t_main3 ${currentText=='design'?"true":""}`}>
                        Design

                    </div>
                    <div className={`line ${currentText == "development"?"true":""}`}>

</div>


                </div>

                <div className={`t_main1 ${currentText=='development'?"true":""}`}>
                    <div style={{ rotate: `${currentText == 'development'?ballRotate:null}deg` }} className={`tmain2 ${currentText=='development'?"true":""}`}>
                        <img src={circletext} alt="" />
                    </div>
                    <div className={`t_main3 ${currentText=='development'?"true":""}`}>
                        Development

                    </div>
                    <div className={`line ${currentText == "test"?"true":""}`}>

</div>

                </div>

                <div className={`t_main1 ${currentText=='test'?"true":""}`}>
                    <div style={{ rotate: `${currentText == 'test'?ballRotate:null}deg` }} className={`tmain2 ${currentText=='test'?"true":""}`}>
                        <img src={circletext} alt="" />

                    </div>
                    <div className={`t_main3 ${currentText=='test'?"true":""}`}>
                        Testing

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Test