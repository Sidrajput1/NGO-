import React, { useEffect } from 'react'
import vasta1 from '../../assets/pics/vasta1.jpg'
import hand2 from '../../assets/pics/hand2.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from '../Intro';

function Vaasta() {
    useEffect(() => {
        AOS.init({

        })
    }, [])
    return (
        <div className='w-full min-h-[200vh]'>

            {/* <div className='w-full bg-gradient-to-b  '>
                <img src="https://img.freepik.com/premium-photo/closeup-hands-handshake-showing-meeting-success-team-support-manager-welcoming-promoting-agreeing-with-colleague-hand-gesture-two-people-symbolizing-unity-power-strength-together_590464-77742.jpg" alt="NGO Education Image" className='w-full h-[85vh]  transform scale-[1]   object-cover object-center  ' />
            </div> */}
             <Intro
                heading='Vaasta'
                image='https://img.freepik.com/premium-photo/closeup-hands-handshake-showing-meeting-success-team-support-manager-welcoming-promoting-agreeing-with-colleague-hand-gesture-two-people-symbolizing-unity-power-strength-together_590464-77742.jpg'
                breadcrumbItems={[
                    {label:'Home',href:'/'},
                    {label:'Vaasta',href:'/vaasta'},
                    {label:'Contact Us',href:'/contact'}
                  ]}
            />
            <div id='vaasta'
                style={{ background: `$black` }}
                data-aos="flip-left"
                data-aos-delay="100"
                data-aos-duration="1500"
                className='h-32 md:w-[90%] w-[100%] text-center m-auto py-4   '
            >
                <h1 className='text-6xl text-center py-9 font-semibold bg-orange-300 rounded-b-full tracking-wider '>Vaasta</h1>


            </div>
            <div className='w-full flex flex-col justify-around gap-0 items-center md:h-[95vh] h-auto '>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="300"
                    
                >
                    <h2 className='text-center md:text-9xl text-7xl md:py-0 py-8 mt-8 text-orange-500 font-bold'>हम क्या हैं!</h2>
                    <img className=' h-24 w-[45rem] object-cover object-center transform scale-[1.1] pt-8 md:mt-3 mt-0' src="https://t4.ftcdn.net/jpg/04/13/47/65/360_F_413476567_bfwm2jfsnGZnzZzPymSLvETacYSHFpig.jpg" alt="" />
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <p className='max-w-2xl line-clamp-7 text-xl font-light text-justify'>
                        <span className='text-orange-600 text-4xl font-semibold'>वास्ता </span>
                        एक ऐसी सोच है, जो समाज के उन लोगो के लिए बनाई गई है जो अपनी आर्थिक तंगी के कारन बहुत सारी परेसानियो से जूझ रहे है, जैसे- बच्चो की पढाई में परेशानी होना, घर के सदस्य को कोई गंभीर बिमारी हो जाये तो उस परेशानी को झेलना, रोजगार की समस्या, वैसे बच्चे जिनके माता पिता इस दुनिया में नही है, विक्लांगता के कारण समस्या को झेलना, कन्या विवाह के समय आर्थिक समस्या, विधवा हो जाने पर आर्थिक परेशानीयों को झेलना, इत्यादि|

                        समाज की इन्ही सारी समस्यायों को देखते हुए प्राविशवग समाज कल्याण एवं शिक्षण संस्था के द्वारा  वास्ता की शुरुआत की गई है जिसके तहत वास्ता  अपने योजना कार्ड  के माध्यम से यथासंभव मदद करेगा साथ ही साथ  वास्ता के द्वारा एक ऐसा समुदाय का निर्माण हो रहा है  जहाँ  वास्ता योजना कार्ड के सदस्य एक दुसरे को मदद कर सके अपनी कौशलता की ज्ञान एक दुसरे से साझा कर  सके   जिससे एक मजबूत समाज का निर्माण हो सके  | 
                            
                            
                            जिसका लाभ आप वास्ता योजना कार्ड  ले कर  उठा सकते है |


                    </p>
                </div>
                <a className='px-5 py-4 border-2 rounded-xl bg-orange-400' href="https://vaasta.org/" target='_blank'>Join Us</a>

            </div>

        </div>
        //         <div className='w-full '>
        //     <div className='w-full bg-gradient-to-b  '>
        //         <img src="https://prabisvg.com/vasta1.jpg" alt="NGO Education Image" className='w-full object-cover rounded-b-[15rem]' style={{ filter: 'blur(2px)' }}  />
        //         <div className="absolute top-[7.5rem] left-[rem] w-full border-2 h-[90vh]  from-blue-600 via-blue-300 to-blue-600 ">
        //             <h1 className='text-6xl text-black text-center w-full h-52 bg-orange-300 font-semibold rounded-full py-9 px-4 tracking-wider'>
        //                 Vaasta
        //                 <br />
        //                 Ham Kya hai
        //             </h1>


        //         </div>
        //     </div>
        //     <div id='gallery' style={{ background: `$black` }} className='h-32 md:w-[90%] w-[100%] text-center m-auto'>
        //         <h2 className='text-black'>Your gallery content goes here...</h2>
        //     </div>
        // </div>





    )
}

export default Vaasta