import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/ServiceIntro.css";
import { BsChevronRight } from "react-icons/bs";

import circletext from "../../images/circle-text.png";
import SlideInSection from "./SlideInSection";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
function ServiceIntro() {
  const [ballRotate, setBallRotate] = useState(0);
  const [ballText, setBallText] = useState("planning & discovery");
  const {  isMobile }=useContext(AppContext)
  const arr = [
    "planning & discovery",
    "design",
    "development", 
    "testing & launch",
  ];
  const [currentText, setCurrentText] = useState(""); // State to hold the current text
  const [stop, setStop] = useState(false); // State to handle animation class
  const [navBtn, setnavBtn] = useState("dev");
  const [contentAnim, setContentAnim] = useState("dev");
  const navigate = useNavigate();
  const bottomDivRef = useRef(null);
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

  const handleScrollToBottom = () => {
    // Scroll to the bottom div with smooth behavior
    bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function handleSubServiceClick(settext) {
    setStop(true);
    setCurrentText(settext);
    setTimeout(() => {
      setStop(false);
    }, 5000);
  }
  function handleArrowClick() {
    if (navBtn == "data") {
      setnavBtn("dev");
      setContentAnim("");
      setTimeout(() => {
        setContentAnim("dev");
      }, 300);
    }
    if (navBtn == "digital") {
      setnavBtn("data");
      setContentAnim("");
      setTimeout(() => {
        setContentAnim("data");
      }, 300);
    }
    if (navBtn == "dev") {
      setnavBtn("digital");
      setContentAnim("");
      setTimeout(() => {
        setContentAnim("digital");
      }, 300);
    }
  }
  console.log(currentText);
  return (
    <div className="si_main">
      <SlideInSection delayy={0.2} durationn={0.4}>
        <div className="si_main_quates">
        
          Crafted with Talent, Perfected through Service{" "}
        </div>
      </SlideInSection>
      {/* <div className='si_selection'>
            <div onClick={handleDevelopment} >DEVELOPMENT</div>
            <div onClick={handleDigital}>DIGITAL MARKETING </div>
            <div onClick={handleData}> Data & Ai</div>
            <div className={`emptydivv ${navBtn}`}></div>
        </div> */}
      <div className="si_div1">
        <div className="si_div11">
          <div className="si_div11_0">
            <h1 className={`si_div11_01 ${contentAnim}`}>
              {contentAnim == "dev" && <> WEBSITE DEVELOPMENT</>}
              {contentAnim == "digital" && <> DIGITAL MARKETING</>}
              {contentAnim == "data" && <> DATA & AI</>}
            </h1>
          </div>
          <div className={`si_div11_1 ${contentAnim}`}>
            {contentAnim == "dev" && (
              <>
                At Heyram Infrastructure, we create modern, responsive websites
                tailored to your business needs. From design to development, our
                team ensures a seamless user experience, helping you stand out
                in the digital world.
              </>
            )}
            {contentAnim == "digital" && (
              <>
                {" "}
                At Heyram Infrastructure, our digital marketing services are
                designed to boost your online presence and drive growth. From
                SEO and social media to targeted campaigns, we help you connect
                with your audience and achieve measurable results.
              </>
            )}
            {contentAnim == "data" && (
              <>
                {" "}
                At Heyram Infrastructure, we leverage data and artificial
                intelligence to transform your business insights into actionable
                strategies. Our innovative solutions harness the power of data
                analytics and AI technologies to enhance decision-making,
                optimize operations, and drive growth.
              </>
            )}
          </div>
          <div className={`si_btn ${contentAnim}`}>
            {contentAnim == "dev" && (
              <button onClick={() => navigate("/web-development")}>
                View More
              </button>
            )}
            {contentAnim == "digital" && (
              <button onClick={() => navigate("/digital-marketing")}>
                View More
              </button>
            )}
            {contentAnim == "data" && (
              <button onClick={() => navigate("/data-ai")}>View More</button>
            )}{" "}
          </div>
        </div>
        <div className="si_div12">
          {contentAnim == "dev" && (
            <div
              onClick={handleScrollToBottom}
              style={{ width: "300px", marginLeft: "200px" }}
            >
              <div className="msl_main">
                <div className="msl_div1">
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "planning & discovery" ? "true" : ""
                      }`}
                      onClick={() =>
                        handleSubServiceClick("planning & discovery")
                      }
                    >
                      PLANNING AND DISCOVERY
                    </div>{" "}
                    <div className="ms_border"></div>
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "design" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("design")}
                    >
                      DESIGN
                    </div>
                    <div className="ms_border"></div>{" "}
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "development" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("development")}
                    >
                      DEVELOPMENT
                    </div>{" "}
                    <div className="ms_border"></div>{" "}
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "testing & launch" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("testing & launch")}
                    >
                      TESTING & LAUNCH
                    </div>{" "}
                    <div className="ms_border"></div>{" "}
                  </div>
                </div>
                <div className="msl_div2"></div>
              </div>
            </div>
          )}
          {contentAnim == "digital" && (
            <div
              onClick={handleScrollToBottom}
              style={{ width: "300px", marginLeft: "200px" }}
            >
              <div className="msl_main">
                <div className="msl_div1">
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "planning & discovery" ? "true" : ""
                      }`}
                      onClick={() =>
                        handleSubServiceClick("planning & discovery")
                      }
                    >
                      RESEARCH & STRATEGY
                    </div>{" "}
                    <div className="ms_border"></div>
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "design" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("design")}
                    >
                      PLANNING
                    </div>
                    <div className="ms_border"></div>{" "}
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "development" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("development")}
                    >
                      EXECUTION & CAMPAIGN
                    </div>{" "}
                    <div className="ms_border"></div>{" "}
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "testing & launch" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("testing & launch")}
                    >
                      ANALYSIS & OPTIMIZATION
                    </div>{" "}
                    <div className="ms_border"></div>{" "}
                  </div>
                </div>
                <div className="msl_div2"></div>
              </div>
            </div>
          )}
          {contentAnim == "data" && (
            <div
              onClick={handleScrollToBottom}
              style={{ width: "300px", marginLeft: "200px" }}
            >
              <div className="msl_main">
                <div className="msl_div1">
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "planning & discovery" ? "true" : ""
                      }`}
                      onClick={() =>
                        handleSubServiceClick("planning & discovery")
                      }
                    >
                      PROBLEM DEFINITION
                    </div>{" "}
                    <div className="ms_border"></div>
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "design" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("design")}
                    >
                      DATA COLLECTION
                    </div>
                    <div className="ms_border"></div>{" "}
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "development" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("development")}
                    >
                      DEVELOPMENT
                    </div>{" "}
                    <div className="ms_border"></div>{" "}
                  </div>
                  <div>
                    <div
                      className={`msl_servicename ${
                        currentText == "testing & launch" ? "true" : ""
                      }`}
                      onClick={() => handleSubServiceClick("testing & launch")}
                    >
                      DEPLOYMENT
                    </div>{" "}
                    <div className="ms_border"></div>{" "}
                  </div>
                </div>
                <div className="msl_div2"></div>
              </div>
            </div>
          )}
        </div>
        <div
          className="si_rightkey"
          onClick={handleArrowClick}
          style={{ width: "20px" }}
        >
          <div>
            <BsChevronRight size={20}/>
          </div>
        </div>
      </div>
      <div ref={bottomDivRef}>
        {navBtn == "dev" && (
          <div
            className="sifull_main"
            onMouseEnter={() => {
              setStop(true);
            }}
            onMouseLeave={() => {
              setStop(false);
            }}
          >
            <div className="sifull_div1">
              <div className="sifull_div1_1">
                <div className={`sifull_div1_2 ${stop ? "true" : ""}`}>
                  <h1
                    style={{
                      transform: `${
                        currentText == "planning & discovery"
                          ? isMobile?"translateX(20px)":"translateX(0px)"
                          : ""
                      }`,
                    }}
                  >
                    {currentText}
                  </h1>
                </div>
                <img
                  className="si_circleimg"
                  style={{ rotate: `${ballRotate}deg` }}
                  src={circletext}
                  alt=""
                />
              </div>
            </div>
            <div className="sifull_div2">
              <div className="sifull_div21">
                <h1 className={`currenttext`}>{currentText}</h1>
              </div>
              <div className="sifull_div21_p">
                {currentText == "planning & discovery" && (
                  <>
                    This is the foundational phase where we gather all the
                    information about your business goals, target audience, and
                    project requirements. We create a roadmap for your website,
                    including a content strategy, sitemap, and timeline, to
                    ensure a smooth development process.
                  </>
                )}

                {currentText == "design" && (
                  <>
                    In this phase, we focus on creating the visual layout of
                    your website. We design mockups and wireframes to show how
                    each page will look, choose color schemes, typography, and
                    ensure it aligns with your brand identity, providing a clear
                    preview of the final product.
                  </>
                )}

                {currentText == "development" && (
                  <>
                    Here, we transform the approved designs into a fully
                    functional website using coding and programming languages.
                    We implement features like navigation, forms, and
                    integrations, ensuring the site is responsive, fast, and
                    optimized for performance.
                  </>
                )}

                {currentText == "testing & launch" && (
                  <>
                    Before going live, we rigorously test the website for any
                    bugs, compatibility issues, and performance optimization.
                    Once everything is polished and approved, we launch the site
                    and make it publicly accessible. Post-launch, we monitor to
                    ensure smooth operation and provide ongoing support as
                    needed.
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        {navBtn == "digital" && (
          <div
            className="sifull_main"
            onMouseEnter={() => {
              setStop(true);
            }}
            onMouseLeave={() => {
              setStop(false);
            }}
          >
            <div className="sifull_div1">
              <div className="sifull_div1_1">
                <div className={`sifull_div1_2 ${stop ? "true" : ""}`}>
                  {currentText == "planning & discovery" && (
                    <h1 style={{ transform: `${isMobile?'translateX(20px)':"translateX(0px)"}` }}>
                      research & strategy
                    </h1>
                  )}
                  {currentText == "design" && <h1>planning </h1>}
                  {currentText == "development" && (
                    <h1 style={{ transform: `${isMobile?'translateX(20px)':"translateX(0px)"}` }}>
                      execution & campaign{" "}
                    </h1>
                  )}
                  {currentText == "testing & launch" && (
                    <h1 style={{ transform: `${isMobile?'translateX(20px)':"translateX(40px)"}` }}>
                      analysis & optimization{" "}
                    </h1>
                  )}
                </div>
                <img
                  className="si_circleimg"
                  style={{ rotate: `${ballRotate}deg` }}
                  src={circletext}
                  alt=""
                />
              </div>
            </div>
            <div className="sifull_div2">
              <div className="sifull_div21">
                <h1 className={`currenttext`}>
                  {currentText == "planning & discovery" && (
                    <>research & strategy</>
                  )}
                  {currentText == "design" && <>planning</>}
                  {currentText == "development" && <>execution & campaign</>}
                  {currentText == "testing & launch" && (
                    <>analysis & optimization</>
                  )}
                </h1>
              </div>
              <div className="sifull_div21_p">
                {currentText == "planning & discovery" && (
                  <>
                    {" "}
                    This phase involves understanding the market, audience, and
                    competition. Through tools like surveys and analytics, we
                    gather data to identify customer preferences and behaviors,
                    helping to shape a strategic approach tailored to your
                    target demographic.
                  </>
                )}

                {currentText == "design" && (
                  <>
                    Based on insights from the research phase, we create a
                    comprehensive digital marketing strategy. This includes
                    defining objectives, selecting appropriate channels (such as
                    social media, email, or content marketing), and outlining
                    tactics to engage your audience effectively and achieve your
                    business goals.
                  </>
                )}

                {currentText == "development" && (
                  <>
                    In this phase, the strategies are put into action. This
                    involves creating and launching campaigns, producing
                    content, and utilizing various digital platforms to reach
                    your audience. Continuous monitoring is crucial during this
                    phase to ensure that everything is functioning as intended.
                  </>
                )}

                {currentText == "testing & launch" && (
                  <>
                    After implementation, we continuously track performance
                    metrics to assess the effectiveness of the campaigns. Using
                    analytics tools, we analyze data to identify areas for
                    improvement, allowing us to optimize strategies and tactics
                    in real-time for better results and ROI
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {navBtn == "data" && (
          <div
            className="sifull_main"
            onMouseEnter={() => {
              setStop(true);
            }}
            onMouseLeave={() => {
              setStop(false);
            }}
          >
            <div className="sifull_div1">
              <div className="sifull_div1_1">
                <div className={`sifull_div1_2 ${stop ? "true" : ""}`}>
                  {currentText == "planning & discovery" && (
                    <h1>
                      problem <br /> definition{" "}
                    </h1>
                  )}
                  {currentText == "design" && <h1>data collection </h1>}
                  {currentText == "development" && <h1>development </h1>}
                  {currentText == "testing & launch" && <h1>deployment </h1>}
                </div>
                <img
                  className="si_circleimg"
                  style={{ rotate: `${ballRotate}deg` }}
                  src={circletext}
                  alt=""
                />
              </div>
            </div>
            <div className="sifull_div2">
              <div className="sifull_div21">
                <h1 className={`currenttext`}>
                  {currentText == "planning & discovery" && (
                    <>problem definition</>
                  )}
                  {currentText == "design" && <>data collection</>}
                  {currentText == "development" && <>development</>}
                  {currentText == "testing & launch" && <>deployment</>}
                </h1>
              </div>
              <div className="sifull_div21_p">
                {currentText == "planning & discovery" && (
                  <>
                    This phase involves identifying the specific business
                    challenge or opportunity that the AI module will address.
                    Clear objectives are set to define what success looks like,
                    and the scope of the project is established to manage
                    resources and expectations effectively.
                  </>
                )}

                {currentText == "design" && (
                  <>
                    In this phase, relevant data is gathered from various
                    sources, including databases and APIs. The data is then
                    cleaned to eliminate errors and inconsistencies, and
                    transformed into a format suitable for analysis, ensuring
                    its quality and relevance for model training.
                  </>
                )}

                {currentText == "development" && (
                  <>
                    Here, appropriate algorithms are selected based on the
                    problem type. The model is developed and trained using the
                    prepared dataset, with adjustments made to its parameters to
                    minimize errors. This may involve hyperparameter tuning to
                    enhance the model's performance.
                  </>
                )}

                {currentText == "testing & launch" && (
                  <>
                    The final phase involves testing the trained model on a
                    separate dataset to assess its accuracy and performance
                    against predefined metrics. If the model meets the
                    objectives, it is deployed in a real-world environment,
                    where its effectiveness is monitored and refined as needed.
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceIntro;
