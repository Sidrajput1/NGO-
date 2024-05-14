import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import gallery1 from '../../assets/pics/gallery/gallery1.jpg'
import gallery3 from '../../assets/pics/gallery/gallery3.jpg'
import gallery4 from '../../assets/pics/gallery/gallery4.jpg'


function SlideGalary() {

    const images = [
        gallery1,
        gallery3,
        gallery4
    ];
    return (

        <div>
            <Zoom scale={1.4} indicators={true}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "100%" , height:"90vh" }} alt="Slide Image" src={each} />
                    </div>
                ))}
            </Zoom>

        </div>

    )
}

export default SlideGalary