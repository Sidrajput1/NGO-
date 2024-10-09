import React, { useEffect, useState } from 'react'
import gallery7 from '../../assets/pics/gallery/gallery7.jpg'
import gallery6 from '../../assets/pics/gallery/gallery6.jpg'
import gallery8 from '../../assets/pics/gallery/gallery8.jpg'
import './shortyojna.css';
import { useNavigate } from 'react-router-dom';
import news from '../../assets/pics/news.jpg';
import campgrid from '../../assets/pics/relief/campgrid.png';

const slides = [
    {
        image:campgrid,
        imagestyle:{
            width:"85vw",
            height:"400px",
            // backgroundSize:"cover",
            // backgroundRepeat:"no-repeat",
            border:"none",
        },
        pic:{
            width:"100%",
            height:"100%",
            objectFit: "contain",
            border:"none"
        }

    },
    {
        image: gallery6,
        title: 'Serving the Masses',
        description:
            "Providing access to healthcare, education, work, and technological advancements to people across the country. ",
        buttonText: 'Donate',
    },
    {
        image:news,
        imagestyle:{
            width:"85vw",
            height:"400px",
            // backgroundSize:"cover",
            // backgroundRepeat:"no-repeat",
            border:"none",
        },
        pic:{
            width:"100%",
            height:"100%",
            objectFit: "contain",
            border:"none"
        }
    },
    {
        image: gallery7,
        title: 'Work During the Pandemic',
        description:
            'Charity brings to life again those who are spiritually dead. It illuminates the darkest corners of the soul, offering hope where despair once resided. Through acts of kindness and compassion, charity nurtures the heart, fostering a sense of belonging and purpose. ',
        buttonText: 'Learn More',
    },
    {
        image: 'https://i.pinimg.com/564x/61/19/33/61193324b96e1e87736220a58dfa63d5.jpg',
        title: 'Promote girl child education',
        description:
            'Education for girls is essential for the growth and prosperity of a nation. Help us provide education to every girl child.',
        buttonText: 'Support',
    },
];

function WorkSlider() {

    const navigate = useNavigate()

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 3 seconds
    
        return () => clearInterval(interval); // Clear interval on component unmount
      }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
    return (
        <main>
            <div className="flex justify-center items-center  md:h-[60vh] h-full ">
                <div className="relative  md:h-[60vh] h-auto w-full md:max-w-7xl max-w-full overflow-hidden">
                    <div
                        className="flex w-full py-10 transition-transform  duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="flex md:h-[50vh] h-auto items-center bg-white shadow-sm md:p-6 border-b-orange-500 border-t-sky-600 border-2 md:rounded-full rounded-3xl w-full flex-shrink-0">
                                <div className="relative w-1/3">
                                    <div style={slide.imagestyle} className="relative w-full md:h-80 h-52 pb-full rounded-full overflow-hidden">
                                        <img
                                            style={slide.pic}
                                            src={slide.image}
                                            alt={slide.title}
                                            className="absolute inset-0 w-full h-full md:object-contain object-cover"
                                        />
                                        <div className="centalg  absolute inset-0 rounded-full  opacity-100 border-orange-500 border-l-8 border-b-8"></div>
                                    </div>
                                </div>
                                <div className="w-2/3 ml-8">
                                    <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                                    <p className="text-gray-700 mb-6">{slide.description}</p>
                                    <button onClick={()=>navigate('/donate')} className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all ease-in-out  text-black p-2 rounded-full"
                    >
                        &#9664;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all ease-in-out  text-black p-2 rounded-full"
                    >
                        &#9654;
                    </button>
                </div>
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                        ></span>
                    ))}
                </div> */}
            </div>
        </main>
    )
}

export default WorkSlider