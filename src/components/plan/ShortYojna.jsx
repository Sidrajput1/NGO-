import React, { useEffect } from 'react'
import './shortyojna.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ShortYojna() {

    useEffect(()=>{
        AOS.init({

        })

    },[]);
    return (
        <div className='w-full md:h-[100vh] h-auto flex md:flex-row flex-col justify-around items-center'>
            <div 
            className="card flex flex-col" 
            
            >
                <div className="img">
                    <img data-aos="fade-up-right" data-aos-delay="300" src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/tICdn73LGjdFxUc4KRbEBUG7wm3ixKiJdSkdcYY5ZzIHqYFG-4JaeYUrYwnUfj1b-Pjds2Sb_rhp3MTpdSelHmRoDgSeotHjVirohJ2HYyqQSa71J3e7W_5G_r4vAbLhpof6jsg" alt="" />
                </div>
                <div className="content">
                    <h3>शिक्षा योजना</h3>
                    <p>वास्ता शिक्षा योजना के माध्यम से उन बच्चो को लाभ मिलेगा जिन बच्चो को उनके माता पिता के आर्थिक तंगी के कारन पढाई छोड़ चुके है और वो पढ़ना चाहते है तो वैसे बच्चें को शिक्षा योजना के तहत उनके बेहतर भविष्य में यथासंभव मदद किया जायेगा. ' वास्ता  के द्वारा (निःशुल्क) बेटी पढाओ योजना की सुविधा वैसी बेटियों के लिए है जिनके माता-पिता आर्थिक तंगी के कारन उन्हें उच्य शिक्षा की पढाई करवाने में सक्षम नही है | </p>
                    <a href="/vaasta/yojna">
                        <button>Explore</button>
                    </a>
                </div>
            </div>
            <div className="card flex flex-col"  >
                <div className="img" data-aos="fade-down-right" data-aos-delay="500" data-aos-duration="1500">
                   <img className='h-[90%]' src="https://s3.envato.com/files/303566941/E39A2582.jpg" alt="" />
                </div>
                <div className="content">
                    <h3>रोजगार योजना</h3>
                    <p>वास्ता के रोजगार योजना के तहत 18 साल से ऊपर वैसे युवक-युवती जो गैर-सरकारी नौकरी करना चाहते है वैसे युवक-युवती को शिक्षा के माप-दंड के हिसाब से उनका “स्किल डेवलपमेंट” करवाने में यथासंभव मदद किया जायेगा जिससे उन्हें  गैर-सरकारी नौकरी लेने  में मदद मिल सके |</p>
                    <a href="/vaasta/yojna">
                        <button>Explore</button>
                    </a>
                </div>
            </div>
            <div className="card flex flex-col" >
                <div className="img" data-aos="fade-down-right" data-aos-delay="500" data-aos-duration="1500">
                    <img src="https://media.assettype.com/homegrown%2Fimport%2Fbook%2F13657-gursnpsgpl-1639472791.jpeg" alt="" />
                </div>
                <div className="content">
                    <h3>स्वयं रोजगार योजना (महिला)</h3>
                    <p>वास्ता के तहत स्व-रोजगार को प्रेरित करना तथा स्व-रोजगार के माध्यम से महिलाओ को प्रशिक्षण दे कर घर में ही उन महिलाओ स्व-रोजगार करवाना|  जैसे – पापड़ बनाना, आचार बनाना, दीप बनाना, सिलाई एवं कढाई करना इत्यादि| </p>
                    <a href="/vaasta/yojna">
                        <button>Explore</button>
                    </a>
                </div>
            </div>
            <div className="card flex flex-col" 
            
            >
                <div className="img">
                    <img data-aos="fade-up-left" data-aos-delay="300" src="https://w.ndtvimg.com/sites/3/2019/12/09144207/660235.jpg" alt="" />
                </div>
                <div className="content">
                    <h3>असहाय बच्चो का भरण पोषण योजना</h3>
                    <p>
                    वास्ता की ओर से असहाय बच्चों का भरण पोषण तथा शिक्षा की सुविधा केवल उन बच्चों के लिए है जिनके माता-पिता नहीं है वह अपनी भरण-पोसन भी नही कर सकते या वो परिवार के किसी और सदस्य पर निर्भर है, और वो जिनपे निर्भर है उनका आर्थिक स्थिति मजबूत नही है, वैसे बच्चों के हमारे इस योजना के तहत यथासंभव मदद की जाएगी |
                    </p>
                    <a href="/vaasta/yojna">
                        <button>Explore</button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default ShortYojna