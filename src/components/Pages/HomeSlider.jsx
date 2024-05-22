import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';
import './slide_animation.css';


import ngo5 from '../../assets/pics/ngo5.jpeg';
import ngo6 from '../../assets/pics/ngo6.png';
import ngo7 from '../../assets/pics/ngo7.png';
import handshake from '../../assets/pics/handshake.jpeg'
import agirl from '../../assets/pics/agirl.png'
import { useNavigate } from 'react-router-dom';

const content = [
  {
    title: "PRABISVG SAMAJ KALYAN ",
    description:
      "EVUM SHIKSHAN SANSTHA",
    button: "Read More",
    image: agirl,
    descriptionStyle: { color: "skyblue",fontWeight:"500" },
    mobileStyle:{
      fontSize:"30px",
      marginTop:'50px',
      paddingTop:"10px",
      paddingRight:"30px",
     
    },
    mobileDescStyle:{
      fontSize:"15px",
      paddingBottom:"5px",
      color:"skyblue",
      fontWeight:""
    },
  },
  {
    title: "Join us in building a brighter future for all.",
    description:
      "",
    button: "Know More",
    image: ngo6,
    style: { color: "#e8e1df" },
    mobileStyle:{
      fontSize:"30px",
      color:"#e8e1df",
      marginRight:"22px",
      paddingTop:"30px"
    }

  },
  {
    title: "A strong woman stands up for herself. A stronger woman stands up for others",
    description:
      "",
    button: "Know More",
    image: ngo5,
    //   descriptionStyle: {color:"white",position:"absolute",top:"-150px",left:"300px"},
    buttonStyle: { display: "none" },
    style: {
      color: "#e8e1df", fontWeight: "300", textAlign: "left", width: "500px", position: "absolute", right: "-250px", fontSize: "35px", shadow: "5px 5px 10px 15px white", filter: "brightness(1.75)",
    },
    mobileStyle:{
       textAlign:"justify",
       width:"90vw",
       position:"none",
       fontSize:"20px",
       color:"#e8e1df"
    }
  },
  {
    title: "An Independent Women is one Who can takecare of herself, both emotionally and financially ",
    description: "",
    button: "Know More",
    image: ngo7,
    style: { color: "#fcf8f7", fontSize: "30px",paddingRight:"20px" },
    mobileStyle:{
      fontSize:"20px",
      color:"#e8e1df",
      marginRight:"30px",
      paddingTop:"25px"
    }

  },
  {
    title:'Unity is strength, division is weakness.',
    button:"Know More",
    image:handshake,
    style:{color:"white"},
    mobileStyle:{color:"white",paddingRight:"35px",paddingTop:"25px",fontSize:"28px"}
  }
];

function HomeSlider() {

  const navigate = useNavigate()

  function isMobileDevice() {
    return window.innerWidth <= 640; 
  }
  return (
    <div>
      <Slider autoplay={3000} className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1 style={isMobileDevice()?item.mobileStyle:item.style}>{item.title}</h1>
              <p style={isMobileDevice()?item.mobileDescStyle:item.descriptionStyle}>{item.description}</p>
              <button onClick={()=>navigate('/vaasta/yojna')} style={item.buttonStyle} >{item.button}</button>
            </div>
            {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
          </div>
        ))}
      </Slider>

    </div>
  )
}

export default HomeSlider