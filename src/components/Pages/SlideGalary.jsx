import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import gallery1 from '../../assets/pics/gallery/gallery1.jpg'
import gallery3 from '../../assets/pics/gallery/gallery3.jpg'
import gallery4 from '../../assets/pics/gallery/gallery4.jpg'
import homepic from '../../assets/pics/homepic.jpg'
import vision2 from '../../assets/pics/vision2.jpg'
import ngo4 from '../../assets/pics/ngo4.png'

function SlideGalary() {

    const images = [
        ngo4,
        homepic,
        vision2,
        gallery3,
        "https://img.freepik.com/free-photo/portrait-adorable-indian-girl_23-2150913174.jpg?t=st=1716278671~exp=1716282271~hmac=a9e604f456ecce3397de453b81eea388ca0bf127bdf3ef67543caa1ec55c6ebb&w=1380"
        
    ];
    return (

        <div>
            <Zoom autoplay={2000} scale={1.4} indicators={true}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "100%"  }} className='md:h-[100vh] h-auto object-contain ' alt="Slide Image" src={each} />
                        <div>
                            <h1>Prabsvg Samaj kalyan</h1>
                        </div>
                    </div>
                    
                ))}
            </Zoom>

        </div>

    )
}

export default SlideGalary