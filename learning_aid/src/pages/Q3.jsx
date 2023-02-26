import React, { Component } from "react";
import backArrow from '../assets/backarrow.png';
import homeIcon from'../assets/homeicon.png';
import next from '../assets/next.png';
import "./Question.css";

class Q3 extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="page-container">
        {/* Background Image */}
        <div className="bg-[url(./assets/quiz.jpg)] bg-cover bg-center min-h-screen"></div>

        {/*Text*/}
        <div className="box1">
          <h1 className='font-custom text-9xl text-center mt-8  whitespace-pre-wrap absolute left-60 top-40'>2 </h1>
        </div>

        {/* Camera */}
        <div className="box2">
          <video ref={this.videoRef} autoPlay></video>
        </div>

        {/* Back Arrow */}
        <div className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${backArrow})`,
            width: "5.5%",
            height: "10%",
          }}
        ></div>

        {/* Home Icon */}
        <div
          className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeIcon})`,
            width: '5.5%',
            height: '10%'
          }}
        ></div>

        {/* Next */}
        <div
          className="absolute w-12 h-12 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${next})`,
            width: "5.5%",
            height: "10%",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
    );
  }
}

export default Q3;
