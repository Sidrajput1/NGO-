import React from 'react'
import LetsHelp from './LetsHelp'
import LetsHelpFooter from './LetsHelpFooter'
import help1 from '../../assets/pics/helps/help1.jpg'
import help5 from '../../assets/pics/helps/help5.jpg'
import help3 from '../../assets/pics/helps/help3.jpg'
import help4 from '../../assets/pics/helps/help4.jpg'
import story2 from '../../assets/pics/story2.jpeg';
import story1 from '../../assets/pics/story1.jpeg';
import help6 from '../../assets/pics/helps/help6.jpeg';
import help7 from '../../assets/pics/helps/help7.jpeg';
import help8 from '../../assets/pics/helps/help8.jpeg';
import help9 from '../../assets/pics/helps/help9.jpeg';


function Asked() {
    return (
        <div>
            <div className="bg-black text-white flex flex-col items-center justify-center min-h-[80vh]">
                <div>
                    <div className="text-2xl text-orange-500 font-bold mb-4 text-center">
                    Lets do efforts to ensure the care and dignity of women,girls and children in need in India
                    </div>
                    <div className="text-lg text-center mb-4">
                      
                    </div>
                </div>
                <div className="md:flex  md:flex-row md:justify-center md:items-center  mb-4">
                    <img src={help1} alt="Elder Care 1" className="max-w-lg brightness-150 w-[22rem] h-[20rem] p-2" />
                    <img src={help3} alt="Elder Care 2" className="max-w-92 w-[22rem] h-[20rem] p-2" />
                    <img src={story1} alt="Elder Care 3" className="max-w-lg h-[20rem] w-[22rem]  p-2" />
                    <img src={story2} alt="Elder Care 4" className="max-w-lg h-[20rem] w-[22rem]  p-2" />
                </div>
                <div className="md:flex  md:flex-row md:justify-center md:items-center  mb-4">
                    <img src={help6} alt="Elder Care 1" className="max-w-lg object-cover brightness-150 w-[22rem] h-[20rem] p-2" />
                    <img src={help7} alt="Elder Care 2" className="max-w-92 object-cover w-[22rem] h-[20rem] p-2" />
                    <img src={help8} alt="Elder Care 3" className="max-w-lg h-[20rem] object-cover w-[22rem]  p-2" />
                    <img src={help9} alt="Elder Care 4" className="max-w-lg h-[20rem] object-fill w-[22rem]  p-2" />
                </div>
                <div className="flex justify-between w-full p-4">
                    <div className="text-lg">##मदद कर के तो देखो -2024</div>
                    <div className="text-lg">#TryHelpingOthers</div>
                </div>
            </div>
            <LetsHelp/>
            <LetsHelpFooter/>
        </div>
    )
}

export default Asked