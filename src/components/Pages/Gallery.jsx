
import React, { useState, useEffect } from "react";
import gallery from '../../assets/pics/gallery/gallery.jpg'
import gallery1 from '../../assets/pics/gallery/gallery1.jpg'
import gallery2 from '../../assets/pics/gallery/gallery2.jpg'
import gallery3 from '../../assets/pics/gallery/gallery3.jpg'
import gallery4 from '../../assets/pics/gallery/gallery4.jpg'
import gallery5 from '../../assets/pics/gallery/gallery5.jpg'
import gallery6 from '../../assets/pics/gallery/gallery6.jpg'
import gallery7 from '../../assets/pics/gallery/gallery7.jpg'
import gallery8 from '../../assets/pics/gallery/gallery8.jpg'






const Gallery = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const elementPosition = document.getElementById("gallery").offsetTop;

            if (scrollPosition > elementPosition) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full min-h-[150vh]">
            <div id='gallery'
                style={{ background: `$black` }}
                className='h-32 md:w-[90%] w-[100%] text-center m-auto   '
            >
                <h1 className='text-6xl text-center py-9 font-semibold bg-orange-300 rounded-b-full tracking-wider '>Our Gallery</h1>


            </div>
            <div id="gallery" className="container mx-auto mt-24 py-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {isVisible && (
                        <>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery}
                                    alt="Gallery Image 1"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery1}
                                    alt="Gallery Image 2"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery4}
                                    alt="Gallery Image 4"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery3}
                                    alt="Gallery Image 3"
                                    className="w-full transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery2}
                                    alt="Gallery Image 2"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery5}
                                    alt="Gallery Image 5"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery6}
                                    alt="Gallery Image 5"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery7}
                                    alt="Gallery Image 5"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={gallery8}
                                    alt="Gallery Image 5"
                                    className="w-full h-80  transform transition-transform hover:scale-105"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
