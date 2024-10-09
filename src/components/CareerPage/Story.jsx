import React, { useState } from 'react'
import StoryCard from './StoryCard';

function Story() {

    
    
    const stories = [
        {
            title: "Empowering Women in Rural Areas",
            image: "https://i.pinimg.com/564x/33/5a/6a/335a6a01cd8654657b24a998a4188471.jpg",
            summary: "This is the story of how we empowered women in rural areas to start their own businesses. This is the story of how we empowered women in rural ",
            
        },
        {
            title: "Education for Every Child",
            image: "https://source.unsplash.com/featured/?education,child",
            summary: "Our NGO has been working tirelessly to ensure every child gets access to quality education...",
            
        },
        {
            title: "Healthcare for the Underprivileged",
            image: "https://source.unsplash.com/featured/?healthcare",
            summary: "We provide healthcare facilities to those who cannot afford it... yes hjvdjdjf jhfjdjcbd jhbfjbd",
            
        },
        // Add more stories here
    ];

    return (
        <div className='w-full'>
            <div className='relative h-[40vh] bg-gray-900 overflow-hidden'>
                <img className='absolute h-full w-full inset-0 object-fill' src="https://i.pinimg.com/564x/d9/8c/a3/d98ca3e511adb66ec6253e6214bb0715.jpg" alt="" />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-300 to-gray-900 opacity-50'></div>
                <div className='relative p-10 lg:p-4 text-white  '>
                    <div className='text-center md:p-[7rem] pt-[4re'>
                        <h2 className="text-4xl  lg:text-6xl text-white z-50 font-extrabold tracking-wide mb-4">
                            Field Stories
                        </h2>

                    </div>


                </div>
            </div>

            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto py-12">
                    <h1 className="text-4xl font-bold uppercase underline underline-offset-8 decoration-yellow-800 text-orange-300 text-center mb-8">Stories</h1>
                    <p className="text-lg text-center text-gray-600 mb-12">
                        Read the inspiring stories of those we have helped through our initiatives.
                    </p>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {stories.map((story, index) => (
                            <StoryCard
                                key={index}
                                title={story.title}
                                image={story.image}
                                summary={story.summary}
                                
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Story