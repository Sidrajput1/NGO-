
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
import homepic from '../../assets/pics/homepic.jpg'
import vision2 from '../../assets/pics/vision2.jpg'
import group from '../../assets/pics/gallery/group.png'
import help1 from '../../assets/pics/helps/help1.jpg'
import help5 from '../../assets/pics/helps/help5.jpg'
import help3 from '../../assets/pics/helps/help3.jpg'
import help4 from '../../assets/pics/helps/help4.jpg'
import story1 from '../../assets/pics/story1.jpeg';
import story2 from '../../assets/pics/story2.jpeg';
import story3 from '../../assets/pics/story3.jpeg';
import story5 from '../../assets/pics/story5.jpeg';
import story6 from '../../assets/pics/story6.jpeg';
import story8 from '../../assets/pics/story8.jpeg';
import story9 from '../../assets/pics/story9.jpeg';
import story10 from '../../assets/pics/story10.jpeg';
import camp1 from '../../assets/pics/relief/camp1.jpg';
import camp2 from '../../assets/pics/relief/camp2.jpg';
import camp3 from '../../assets/pics/relief/camp3.jpg';
import camp4 from '../../assets/pics/relief/camp4.jpg';
import camp5 from '../../assets/pics/relief/camp5.jpg';
import camp6 from '../../assets/pics/relief/camp6.jpg';
import camp7 from '../../assets/pics/relief/camp7.jpg';
import vaastagrid2 from '../../assets/pics/vaastagrid2.png';
import Intro from "../Intro";











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
            {/* <div id='gallery'
                style={{ background: `$black` }}
                className='h-32 md:w-[90%] w-[100%] text-center m-auto   '
            >
                <h1 className='text-6xl text-center py-9 font-semibold bg-orange-300 rounded-b-full tracking-wider '>Our Gallery</h1>


            </div> */}
             <Intro
                heading='Our Gallery'
                image={vaastagrid2}
                breadcrumbItems={[
                    {label:'Home',href:'/'},
                    {label:'Education',href:'/education'},
                    {label:'Contact Us',href:'/contact'}
                  ]}
            />
            <div id="gallery" className="container mx-auto mt-24 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {isVisible && (
                        <>
                            <div className="overflow-hidden">
                                <img
                                    src={help1}
                                    alt="Gallery Image 1"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={help3}
                                    alt="Gallery Image 2"
                                    className="w-full h-80 border-4 border-blue-600  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={help4}
                                    alt="Gallery Image 3"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />

                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={help5}
                                    alt="Gallery Image 4"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>

                            <div className="overflow-hidden">
                                <img
                                    src={story1}
                                    alt="Gallery Image 5"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story2}
                                    alt="Gallery Image 6"
                                    className="w-full h-80 border-4 border-blue-600  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story3}
                                    alt="Gallery Image 7"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story5}
                                    alt="Gallery Image 8"
                                    className="w-full border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story6}
                                    alt="Gallery Image 9"
                                    className="w-full h-80 border-4 border-blue-600  transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story8}
                                    alt="Gallery Image 10"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story9}
                                    alt="Gallery Image 11"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={story10}
                                    alt="Gallery Image 12"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            
                            <div className="overflow-hidden">
                                <img
                                    src={camp1}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={camp2}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={camp3}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={camp4}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={camp5}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={camp6}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={camp7}
                                    alt="Gallery Image 13"
                                    className="w-full h-80 border-4 border-blue-600 transform transition-transform hover:scale-105"
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
