import React, { useState } from 'react'


const faqData = [
    {
      question: 'What Do Interns Do?',
      answer:
        'Our interns gain practical skills through experiential learning. Engaging in fieldwork allows them to grasp the hurdles encountered by underprivileged communities and devise creative strategies to alleviate poverty. Our focus areas include supporting women and children, and addressing issues in healthcare and environmental conservation. Pick the domain that ignites your passion to begin your journey.',
       
    },
    {
        question: 'How Long is the Internship?',
        answer:
          'Our internship opportunities vary in duration, spanning from 1 to 3 months, contingent upon the project of your choice.',
    },
    {
        question:'Who can Apply?',
        answer:'We welcome students from all over India, representing a wide array of academic disciplines, to intern with us.'
    },
    {
        question:"How Can You Apply?",
        answer:'Explore our website to familiarize yourself with our mission and projects, then refine your interests accordingly. Send your resume and a personalized Letter of Intent via the provided form.'
    },
    {
        question:"What is the Selection process?",
        answer:'If you are near Patna, we will meet in person. Otherwise, we will chat on Skype. Once you are in, we will need a certificate from your Collage/institution.',

    },
    {
        question:'I am not a student.can I volunteer',
        answer:'We welcome self-starters who are eager to join our transformative journey as volunteers. Follow the same application process outlined above, and mention your interest in volunteering in your letter.',

    },
    {
        question:'When will be here back from you',
        answer:'We will get back to you within 10 days after you submit your application. If you have any questions, feel free to call us at 0612-2352234 or email us at prabisvg@gmail.com'
    }
    // Add more FAQ items here
  ];
function Faq() {

    const [openIndex,setOpenIndex] = useState(null)
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
  return (
    <div>
         <div className="font-[sans-serif] space-y-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-orange-400 mb-8 py-6">FAQS</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="rounded-lg hover:bg-blue-50 transition-all ease-in-out duration-300">
          <button
            type="button"
            className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center transition-all ease-in-out duration-300"
            onClick={() => toggleAnswer(index)}
          >
            <span className="mr-4">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 fill-current ml-auto shrink-0 ${
                openIndex === index ? 'rotate-180' : '-rotate-90'
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className={`pb-5 px-6 ${openIndex === index ? '' : 'hidden'}`}>
            <p className="text-lg text-[#333]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
       
    </div>
  )
}

export default Faq