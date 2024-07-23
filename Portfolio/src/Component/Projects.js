import React from "react";
import Lottie from "lottie-react";
import Project from "../Animation/Project.json";
import { Link } from 'react-router-dom'
export const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="row text-light">
            <div className="col-lg-6 col-sm-6">
                <h2 style={{color:"#706fd3"}} className=" text-uppercase fs-2 opacity-50 mt-5 text-center">Projects</h2>
            </div>
            <div className="col-lg-6 col-sm-6 ">
                <Lottie className="mx-5" animationData={Project} style={{ width: "45%" }} loop={true} />
            </div>
        </div>
        <div className="row text-light">
            <div className="col-lg-6 col-sm-6  ">
                <h3 className="text-warning display-5 text-center ">Ghazi Fabrics</h3>
                <p className="text-center ">Ghazi Fabrics is a leading provider of fabrics for various commercial and residential projects across Pakistan.</p>
                <ul  type="circle"
                ><li>Project technologies</li>
                        <ol  type="i">
                                <li>FrontEnd
                                    <ol type="A" >
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>Javascript</li>
                                        <li>Boostrap</li>
                                        <li className="fw-bold">Framework</li>
                                        <ul type="disc">
                                        <li className="text-warning">React.js</li>
                                        </ul>
                                    </ol>
                                </li>
                                <li>Backend
                                    <ol type="i"> 
                                        <li>PHP</li>
                                        <li>Laravel</li>
                                            <li>Database</li>
                                        <ul type="disc">
                                        <li>MySQL</li>
                                        </ul>
                                    </ol>
                                </li>
                        </ol>
                </ul>
                <a className="text-decoration-none" target="blank" href='https://github.com/SHAH7766/ReactLaravelCrud'>Project Link</a>
            </div>
            <div className="col-lg-6 col-sm-6 mt-2  ">
                <h3 className="text-primary display-5 text-center  ">Ghazi Sons</h3>
                <p className="text-center "> 
                    Ghazi Sons is a leading provider of home decor and interior design services across Pakistan.
                </p>
                
                <ul  type="circle"
                ><li>Project technologies</li>
                        <ol type="i">
                                <li>FrontEnd
                                    <ol type="A" >
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>Javascript</li>
                                        <li>Boostrap</li>
                                        <li className="fw-bold">Framework</li>
                                        <ul type="disc">
                                        <li className="text-warning">React.js</li>
                                        </ul>
                                    </ol>
                                </li>
                                <li>Backend
                                    <ol type="i"> 
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                            <li>Database</li>
                                        <ul type="disc">
                                        <li>MongoDB</li>
                                        </ul>
                                    </ol>
                                </li>
                        </ol>
                </ul>
                <a className="text-decoration-none" target="blank" href='https://github.com/SHAH7766/MERNCrud'>Project Link</a>
                </div>
        </div>
      </div>
    </>
  );
};
