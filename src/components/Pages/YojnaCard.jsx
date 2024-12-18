import React from "react";
import FlipCard from "./FlipCard";
import "./card.css";
import employment from "../../assets/pics/Yojna/employment.png";
import vaasta from "../../assets/pics/vaasta.jpeg";

const plans = [
  {
    imageUrl:
      "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/tICdn73LGjdFxUc4KRbEBUG7wm3ixKiJdSkdcYY5ZzIHqYFG-4JaeYUrYwnUfj1b-Pjds2Sb_rhp3MTpdSelHmRoDgSeotHjVirohJ2HYyqQSa71J3e7W_5G_r4vAbLhpof6jsg",
    name: "शिक्षा योजना",
    description:
      "वास्ता शिक्षा योजना के माध्यम से उन बच्चो को लाभ मिलेगा जिन बच्चो को उनके माता पिता के आर्थिक तंगी के कारन पढाई छोड़ चुके है और वो पढ़ना चाहते है तो वैसे बच्चें को शिक्षा योजना के तहत उनके बेहतर भविष्य में यथासंभव मदद किया जायेगा. ' वास्ता  के द्वारा (निःशुल्क) बेटी पढाओ योजना की सुविधा वैसी बेटियों के लिए है जिनके माता-पिता आर्थिक तंगी के कारन उन्हें उच्य शिक्षा की पढाई करवाने में सक्षम नही है | उन बेटियों को वास्ता के द्वारा उच्य शिक्षा के लिए पढाने में यथासंभव मदद किया जायेगा , इस योजना का लाभ उठाने हेतु बेटी का वास्ता योजना कार्ड में रजिस्ट्रेशन करवाए |  (अधिकतम आयु सीमा 20 वर्ष  )'",
  },

  {
    imageUrl: "https://s3.envato.com/files/303566941/E39A2582.jpg",
    name: "रोजगार योजना ",
    description:
      "वास्ता के रोजगार योजना के तहत 18 साल से ऊपर वैसे युवक-युवती जो गैर-सरकारी नौकरी करना चाहते है वैसे युवक-युवती को शिक्षा के माप-दंड के हिसाब से उनका “स्किल डेवलपमेंट” करवाने में यथासंभव मदद किया जायेगा जिससे उन्हें  गैर-सरकारी नौकरी लेने  में मदद मिल सके | ",
  },
  {
    imageUrl:
      "https://media.assettype.com/homegrown%2Fimport%2Fbook%2F13657-gursnpsgpl-1639472791.jpeg",
    name: "स्वयं रोजगार योजना (महिला) ",
    description:
      "वास्ता के तहत स्व-रोजगार को प्रेरित करना तथा स्व-रोजगार के माध्यम से महिलाओ को प्रशिक्षण दे कर घर में ही उन महिलाओ स्व-रोजगार करवाना|  जैसे – पापड़ बनाना, आचार बनाना, दीप बनाना, सिलाई एवं कढाई करना इत्यादि| ",
  },
  {
    imageUrl: "https://w.ndtvimg.com/sites/3/2019/12/09144207/660235.jpg",
    name: "असहाय बच्चो का भरण पोषण योजना ",
    description:
      "वास्ता की ओर से असहाय बच्चों का भरण पोषण तथा शिक्षा की सुविधा केवल उन बच्चों के लिए है जिनके माता-पिता नहीं है वह अपनी भरण-पोसन भी नही कर सकते या वो परिवार के किसी और सदस्य पर निर्भर है, और वो जिनपे निर्भर है उनका आर्थिक स्थिति मजबूत नही है, वैसे बच्चों के हमारे इस योजना के तहत यथासंभव मदद की जाएगी | ",
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
  {
    imageUrl:
      "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/hindi/media/media_files/b0sqygDpF8uB4NbEGuqP.png",
    name: "विधवा सहायता योजना ",
    description:
      "वास्ता के विधवा सहायता योजना के तहत जिस परिवार में कोई महिला विधवा हो जाती है और उनकी उम्र 18-45 है और उस परिस्थिति में उनके पास आय की कोई सुविधा नहीं है वैसी महिला वास्ता योजना कार्ड धारक   को वास्ता के तरफ से उन्हें आर्थिक रूप से सहायता करके स्वरोजगार करवा दिया जायेगा ताकी वह अपना जीवन आत्मनिर्भर हो कर गुजार सके | ",
  },
  {
    imageUrl:
      "https://cms.patrika.com/wp-content/uploads/2021/10/05/marriage.jpg",
    name: "कन्या विवाह सहायत योजना ",
    description:
      "वास्ता के द्वारा कन्या विवाह सहायता योजना के तहत आर्थिक रूप से कमजोर वर्ग की कन्या को सहायता मिलेगा, जब वो विवाह के यौग्य होगी तब उनके विवाह के समय हम वास्ता के माध्यम से यथासंभव मदद करेंगे जैसे:- (ड्रेसिंग टेबल, फैन, मिक्सर ग्राइंडर , ड्रम सेट इत्यादि) | (अधिकतम आयु सीमा 20 वर्ष  ) ",
  },

  {
    imageUrl:
      "https://img.freepik.com/premium-photo/casual-business-colleagues-with-donation-box-tablet_13339-157773.jpg?w=900",
    name: "वस्त्र दान योजना  ",
    description:
      "वास्ता के द्वारा वस्त्र दान योजना के तहत पुराने और नये कपड़े दोनों ही दी जाएगी जो भी जरुरत मंद लोग है जो अपने आर्थिक तंगी के कारण बहुत परेशान है और वस्त्र खरीदने में भी सक्षम नही है उन लोगो को हमारे संस्था के द्वारा ये सुबिधा उपलब्ध करायी जाएगी|  ",
  },
  {
    imageUrl:
      "https://navbharattimes.indiatimes.com/thumb/90535566/madhya-pradesh-divyang-pension-scheme-90535566.jpg?imgsize=35434&width=380&height=214&resizemode=75 ",
    name: "विक्लांग योजना ",
    description:
      "वास्ता के तहत विक्लांग योजना के द्वारा विक्लांग वास्ता योजना कार्ड धारक  को हर तरह का सहयोग दिया जायेगा जैसे – स्वरोजगार योजना के तहत आर्थिक मदद करके उनको स्वरोजगार करवाना, तथा व्हीलचेयर, वैशाकी दिलवाने में यथासंभव मदद करना | ",
  },
  {
    imageUrl:
      "https://images.businessnewsdaily.com/app/uploads/2022/04/04073215/customer-service_Chainarong-Prasertthai_getty.jpg",
    name: "सरकारी योजनाओं के बारे में जानकारी प्रदान करना ",
    description:
      "वास्ता के तहत इस योजना के अंतर्गत हमारा उद्देश्य अपने सदस्यों को समय-समय पर सरकारी योजनाओं के बारे में उचित जानकारी प्रदान करना है ताकि हमारे सदस्य सरकारी योजनाओं का लाभ उठा सकें। ",
  },
  {
    imageUrl: vaasta,
    name: "वास्ता का योजना कार्ड कैसे बनवाए  ",
    description:
      "वास्ता योजना कार्ड आप अपने  क्षेत्र में हमारे  वास्ता दिदी  के माध्यम से बनवाए | वास्ता योजना कार्ड  कार्ड शुल्क: मात्र Rs.35/-  (प्रति वर्ष)",
  },
];

function YojnaCard() {
  return (
    <div>
      <div className="app">
        <div className="plan-container">
          {plans.map((plan, index) => (
            <FlipCard
              key={index}
              imageUrl={plan.imageUrl}
              name={plan.name}
              description={plan.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YojnaCard;
