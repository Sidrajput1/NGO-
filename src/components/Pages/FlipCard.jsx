import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";
import './card.css'

function FlipCard({imageUrl,name,description}) {

     const [isFiliped,setIsFiliped] = useState(false);
    //const [isFiliped,setIsFiliped] = useState(true);


    // const handleClick = () => {
    //   setIsFiliped(!isFiliped)
      
    // }
    // const handleClick = () => {
    //   setIsFiliped(!isFiliped)
      
    // }
    const debounce = (func, delay) => {
      let timer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    };
  
    // Debounced mouse enter event handler
    const handleMouseEnter = debounce(() => {
      setIsFiliped(true);
    }, 200); // Adjust the delay as needed
  
    // Debounced mouse leave event handler
    const handleMouseLeave = debounce(() => {
      setIsFiliped(false);
    }, 200); // Adjust the delay as needed
  

    


  return (
    <div className='card1'>

      <ReactCardFlip
        isFlipped={isFiliped}
        flipDirection='vertical'
      >
        <div className='card-front' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{cursor:'pointer'}}>
            <img className='brightness-100 rounded-xl' src={imageUrl} alt={name} />

            {/* <h1 className='absolute text-4xl top-[40%] bg-blend-overlay left-[30%]'>{name}</h1> */}
          
        </div>

        <div className='card-back' onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
          <h2 className='text-4xl font-bold text-orange-400 underline md:py-4 py-2'>{name}</h2>
          <p className='md:text-lg text-sm text-justify md:font-semibold font-light brightness-100  '>{description}</p>

        </div>

      </ReactCardFlip>

    </div>
  )
}

export default FlipCard