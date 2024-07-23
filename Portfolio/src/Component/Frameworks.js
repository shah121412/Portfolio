import React from "react";
import NodeJS from '../Animation/NodeJS - 1721651313623 (1).json'
import Reactjs from '../Animation/React.json'
import Express from '../Animation/Express.json'
import CSS from '../Animation/CSS.json'
import Laravel from '../Animation/Laravel.json'
import js from '../Animation/Javascript.json'
import HTML from '../Animation/HTML.json'
import { motion } from "framer-motion";
import Lottie from "lottie-react";
const Frameworks = () => {
  return (
    <>
      <div className="container">
         <h2  style={{color:"#706fd3"}} className="text-uppercase fs-2 opacity-50 mt-5 text-center ">Technologies</h2>
        <div className="row mt-5 text-center">
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "15rem", backgroundColor: "#151724" }}
            >
             
              <div className="card-body  ">
                <h2 className="fontcolor">BootStrap</h2>
                <Lottie animationData={NodeJS} className="mx-5" style={{width:"50%",marginRight:"10px"}} loop={true} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "16rem", backgroundColor: "#151724" }}
            >
              
              <div className="card-body text-light   ">
              <h2 className="fontcolor">React</h2>
              <Lottie className="mx-5" animationData={Express} style={{width:"50%",marginRight:"10px"}} loop={true} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "16rem", backgroundColor: "#151724" }}
            >
             
              <div className="card-body text-light">
              <h2 className="fontcolor">Node js</h2>
              <Lottie className="mx-5" animationData={NodeJS} style={{width:"50%",marginRight:"10px"}} loop={true} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "15rem", backgroundColor: "#151724" }}
            >
              
              <div className="card-body text-light">
              <h2 className="fontcolor">Express</h2>
              <Lottie className="mx-5" animationData={Express} style={{width:"50%",marginRight:"10px"}} loop={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "15rem", backgroundColor: "#151724" }}
            >
             
              <div className="card-body  ">
                <h2 className="fontcolor">HTML</h2>
                <Lottie  animationData={HTML} className="mx-5" style={{width:"50%",marginRight:"10px",backgroundColor:"#151724"}} loop={true} />
              </div>
            </div>
          </div>
        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "15rem", backgroundColor: "#151724" }}
            >
             
              <div className="card-body  ">
                <h2 className="fontcolor">CSS</h2>
                <Lottie animationData={CSS} className="mx-5" style={{width:"50%",marginRight:"10px"}} loop={true} />
              </div>
            </div>
          </div>
        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div
              className="card text-light"
              style={{ width: "15rem", backgroundColor: "#151724" }}
            >
             
              <div className="card-body  ">
                <h2 className="fontcolor">Javacript</h2>
                <Lottie animationData={js} className="mx-5" style={{width:"50%",marginRight:"10px"}} loop={true} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
  <div className="card text-light" style={{ width: "15rem", backgroundColor: "#151724" }}>
    <div className="card-body text-center">
      <h2 className="fontcolor">Laravel</h2>
      <Lottie animationData={Laravel} className="mx-5" style={{ width: "50%"}} loop={true} />
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Frameworks;
