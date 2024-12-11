import React, { useEffect } from 'react'
import './shortyojna.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function ShortYojna() {

    const navigate = useNavigate();
    const plans = [
        {
          imageUrl: "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/tICdn73LGjdFxUc4KRbEBUG7wm3ixKiJdSkdcYY5ZzIHqYFG-4JaeYUrYwnUfj1b-Pjds2Sb_rhp3MTpdSelHmRoDgSeotHjVirohJ2HYyqQSa71J3e7W_5G_r4vAbLhpof6jsg",
          name: "शिक्षा योजना",
          description:
            "वास्ता शिक्षा योजना के माध्यम से उन बच्चो को लाभ मिलेगा जिन बच्चो को उनके माता पिता के आर्थिक तंगी के कारन पढाई छोड़ चुके है और वो पढ़ना चाहते है तो वैसे बच्चें को शिक्षा योजना के तहत उनके बेहतर भविष्य में यथासंभव मदद किया जायेगा. ' वास्ता  के द्वारा (निःशुल्क) बेटी पढाओ योजना की सुविधा वैसी बेटियों के लिए है जिनके माता-पिता आर्थिक तंगी के कारन उन्हें उच्य शिक्षा की पढाई करवाने में सक्षम नही है | उन बेटियों को वास्ता के द्वारा उच्य शिक्षा के लिए पढाने में यथासंभव मदद किया जायेगा , इस योजना का लाभ उठाने हेतु बेटी का वास्ता योजना कार्ड में रजिस्ट्रेशन करवाए |  (अधिकतम आयु सीमा 20 वर्ष  )",
        },
        {
          imageUrl: "https://s3.envato.com/files/303566941/E39A2582.jpg",
          name: "रोजगार योजना ",
          description:
            "वास्ता के रोजगार योजना के तहत 18 साल से ऊपर वैसे युवक-युवती जो गैर-सरकारी नौकरी करना चाहते है वैसे युवक-युवती को शिक्षा के माप-दंड के हिसाब से उनका “स्किल डेवलपमेंट” करवाने में यथासंभव मदद किया जायेगा जिससे उन्हें  गैर-सरकारी नौकरी लेने  में मदद मिल सके |",
        },
        {
          imageUrl: "https://media.assettype.com/homegrown%2Fimport%2Fbook%2F13657-gursnpsgpl-1639472791.jpeg",
          name: "स्वयं रोजगार योजना (महिला) ",
          description:
            "वास्ता के तहत स्व-रोजगार को प्रेरित करना तथा स्व-रोजगार के माध्यम से महिलाओ को प्रशिक्षण दे कर घर में ही उन महिलाओ स्व-रोजगार करवाना|  जैसे – पापड़ बनाना, आचार बनाना, दीप बनाना, सिलाई एवं कढाई करना इत्यादि|",
        },
        {
          imageUrl: "https://w.ndtvimg.com/sites/3/2019/12/09144207/660235.jpg",
          name: "असहाय बच्चो का भरण पोषण योजना ",
          description:
            "वास्ता की ओर से असहाय बच्चों का भरण पोषण तथा शिक्षा की सुविधा केवल उन बच्चों के लिए है जिनके माता-पिता नहीं है वह अपनी भरण-पोसन भी नही कर सकते या वो परिवार के किसी और सदस्य पर निर्भर है, और वो जिनपे निर्भर है उनका आर्थिक स्थिति मजबूत नही है, वैसे बच्चों के हमारे इस योजना के तहत यथासंभव मदद की जाएगी |",
        },
        {
            imageUrl:
              "https://img.naidunia.com/naidunia/ndnimg/01122022/01_12_2022-gambhirbimarisahayatayojana.jpg",
            name: "गंभीर चिकित्सा योजना ",
            description:
              "वास्ता की ओर से गंभीर चिकित्सा योजना की सुविधा दिया जा रहा है जैसे:- कैंसर, किडनी प्रत्यारोपण जैसी गंभीर बीमारी, उस परस्थिति में वास्ता  सदस्य को यथासंभव राशी से सहयोग किया जायेगा। साथ ही साथ उनके उचित इलाज के लिए मार्गदर्शन भी किया जायेगा | ",
          },
          {
            imageUrl: "https://pmmodiyojana.in/wp-content/uploads/2022/12/image-3.png",
            name: "गर्भवती महिला योजना",
            description:
              "वास्ता योजना कार्ड  धारक  गर्भवती महिला सदस्य जिनकी आर्थिक स्थिति सही नहीं है तो उन्हें  प्रसव के समय यथासंभव आर्थिक रूप से सहायता किया जायेगा तथा साथ ही साथ उन्हें उचित मार्ग दर्शन भी दिया जायेगा |  नोट:- इस योजना का लाभ  सिर्फ पहला और दुसरे बच्चे के प्रसव के दौरान ही दिया जायेगा अन्य पर ये लागु नही हैं| ",
          },
      ];

    // useEffect(()=>{
    //     AOS.init({

    //     })

    // },[]);
    return (
        // <div className='w-full md:h-[100vh] h-auto flex md:flex-row flex-col justify-around items-center'>
        //     <div 
        //     className="card flex flex-col" 
            
        //     >
        //         <div className="img">
        //             <img data-aos="fade-up-right" data-aos-delay="300" src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/tICdn73LGjdFxUc4KRbEBUG7wm3ixKiJdSkdcYY5ZzIHqYFG-4JaeYUrYwnUfj1b-Pjds2Sb_rhp3MTpdSelHmRoDgSeotHjVirohJ2HYyqQSa71J3e7W_5G_r4vAbLhpof6jsg" alt="" />
        //         </div>
        //         <div className="content">
        //             <h3>शिक्षा योजना</h3>
        //             <p>वास्ता शिक्षा योजना के माध्यम से उन बच्चो को लाभ मिलेगा जिन बच्चो को उनके माता पिता के आर्थिक तंगी के कारन पढाई छोड़ चुके है और वो पढ़ना चाहते है तो वैसे बच्चें को शिक्षा योजना के तहत उनके बेहतर भविष्य में यथासंभव मदद किया जायेगा. ' वास्ता  के द्वारा (निःशुल्क) बेटी पढाओ योजना की सुविधा वैसी बेटियों के लिए है जिनके माता-पिता आर्थिक तंगी के कारन उन्हें उच्य शिक्षा की पढाई करवाने में सक्षम नही है | </p>
        //             <a href="/vaasta/yojna">
        //                 <button>Explore</button>
        //             </a>
        //         </div>
        //     </div>
        //     <div className="card flex flex-col"  >
        //         <div className="img" data-aos="fade-down-right" data-aos-delay="500" data-aos-duration="1500">
        //            <img className='h-[90%]' src="https://s3.envato.com/files/303566941/E39A2582.jpg" alt="" />
        //         </div>
        //         <div className="content">
        //             <h3>रोजगार योजना</h3>
        //             <p>वास्ता के रोजगार योजना के तहत 18 साल से ऊपर वैसे युवक-युवती जो गैर-सरकारी नौकरी करना चाहते है वैसे युवक-युवती को शिक्षा के माप-दंड के हिसाब से उनका “स्किल डेवलपमेंट” करवाने में यथासंभव मदद किया जायेगा जिससे उन्हें  गैर-सरकारी नौकरी लेने  में मदद मिल सके |</p>
        //             <a href="/vaasta/yojna">
        //                 <button>Explore</button>
        //             </a>
        //         </div>
        //     </div>
        //     <div className="card flex flex-col" >
        //         <div className="img" data-aos="fade-down-right" data-aos-delay="500" data-aos-duration="1500">
        //             <img src="https://media.assettype.com/homegrown%2Fimport%2Fbook%2F13657-gursnpsgpl-1639472791.jpeg" alt="" />
        //         </div>
        //         <div className="content">
        //             <h3>स्वयं रोजगार योजना (महिला)</h3>
        //             <p>वास्ता के तहत स्व-रोजगार को प्रेरित करना तथा स्व-रोजगार के माध्यम से महिलाओ को प्रशिक्षण दे कर घर में ही उन महिलाओ स्व-रोजगार करवाना|  जैसे – पापड़ बनाना, आचार बनाना, दीप बनाना, सिलाई एवं कढाई करना इत्यादि| </p>
        //             <a href="/vaasta/yojna">
        //                 <button>Explore</button>
        //             </a>
        //         </div>
        //     </div>
        //     <div className="card flex flex-col" 
            
        //     >
        //         <div className="img">
        //             <img data-aos="fade-up-left" data-aos-delay="300" src="https://w.ndtvimg.com/sites/3/2019/12/09144207/660235.jpg" alt="" />
        //         </div>
        //         <div className="content">
        //             <h3>असहाय बच्चो का भरण पोषण योजना</h3>
        //             <p>
        //             वास्ता की ओर से असहाय बच्चों का भरण पोषण तथा शिक्षा की सुविधा केवल उन बच्चों के लिए है जिनके माता-पिता नहीं है वह अपनी भरण-पोसन भी नही कर सकते या वो परिवार के किसी और सदस्य पर निर्भर है, और वो जिनपे निर्भर है उनका आर्थिक स्थिति मजबूत नही है, वैसे बच्चों के हमारे इस योजना के तहत यथासंभव मदद की जाएगी |
        //             </p>
        //             <a href="/vaasta/yojna">
        //                 <button>Explore</button>
        //             </a>
        //         </div>
        //     </div>
            
        // </div>

        <div className="bg-gray-100 min-h-screen py-10">
             <p onClick={()=>navigate('/donate')} className='text-center font-bold mb-4 cursor-pointer text-orange-600 hover:text-orange-800 underline underline-offset-4'>Help Us Now</p>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        वास्ता योजनाएं
      </h1>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={plan.imageUrl}
              alt={plan.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h2>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default ShortYojna