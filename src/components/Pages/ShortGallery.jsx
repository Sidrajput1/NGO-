import React, { useEffect } from 'react'
import './sgallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import help1 from '../../assets/pics/helps/help1.jpg'
import help5 from '../../assets/pics/helps/help5.jpg'
import help3 from '../../assets/pics/helps/help3.jpg'
import help4 from '../../assets/pics/helps/help4.jpg'
import story1 from '../../assets/pics/story1.jpeg';
import story2 from '../../assets/pics/story2.jpeg';
import story3 from '../../assets/pics/story3.jpeg';
import story8 from '../../assets/pics/story8.jpeg';
import { useNavigate } from 'react-router-dom';

function ShortGallery() {
    const navigate = useNavigate()
    const images = [
        { src: help1, alt: 'Image 1', text: '' },
        { src: help3, alt: 'Image 2', text: '' },
        { src: help4, alt: 'Image 3', text: '' },
        { src: help5, alt: 'Image 4', text: '' },
        { src: story1, alt: 'Image 5', text: '' },
        { src: story2, alt: 'Image 6', text: '' },
        { src: story3, alt: 'Image 7', text: '' },
        { src: story8, alt: 'Image 8', text: '' },
    ];
    useEffect(() => {
        AOS.init({

        })
    }, [])
    return (
        <div>
            <div
                className='text-center m-auto mt-[-20px] py-4 font-bold font-serif text-xl'
                data-aos="zoom-in"
            >
                <h2>
                    #मदद कर के तो देखो -2024 – <span className='text-orange-600'>Donation Camp</span>  for care and dignity of women,girls and children in need in India
                </h2>
            </div>
            <div
                className='gallery'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                {images.map((image, index) => (
                    <div className='gallery-item' key={index}>
                        <img src={image.src} alt={image.alt} className='gallery-image' data-aos="fade-up-right" />
                        <div className='overlay'>
                            <div className='text'>{image.text}</div>
                            <button onClick={() => navigate('/workstory')} className='btn'>Show More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShortGallery