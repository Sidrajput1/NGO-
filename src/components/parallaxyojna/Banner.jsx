import React from 'react'
import './banner.css';
import HappyDonor from '../sponsers/HappyDonor';

function Banner() {
  return (
    <main>
        <div className="parallax-container2">
                <div className="parallax-overlay">
                    <div className="parallax-text">
                        <h1
                            data-aos="zoom-in-up" data-aos-duration="2000"
                            className='text-primary brightness-100 contrast-150'
                        >
                            Join With us
                        </h1>
                        <p>
                        Register A Yojna Card
                        </p>
                        <a href="https://vaasta.org/" target='_blank'><div className='mt-8 py-4'>
                            <button onClick={()=>navigate('/contact')} data-aos="fade-right" className='btn bg-primary'>JOIN NOW</button>
                        </div></a>
                    </div>
                </div>
            </div>
            
    </main>
  )
}

export default Banner