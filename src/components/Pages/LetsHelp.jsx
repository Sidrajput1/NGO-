import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import PaymentQr from "./PaymentQr";

function LetsHelp() {
  return (
    <main className="min-h-screen w-full bg-white text-black flex md:flex-row flex-col items-center justify-around">
      <div className="text-black md:w-[60%] w-full p-4  ">
        <section className="py-4">
          <h1 className="text-3xl font-bold tracking-wide">
            #मदद कर के तो देखो -2024 –{" "}
            <span className="text-orange-500">PRABISVG</span> donation campaigns
            for care and dignity of women,girls and children in need in India
          </h1>
        </section>
        <section className="flex space-x-2">
          <strong className="text-2xl font-serif">Share On</strong>
          <div className=" flex text-3xl space-x-3 ">
            <FaFacebookSquare className="text-blue-500" />
            <FaSquareXTwitter className="text-black" />
            <a href="https://www.instagram.com/prabisvg/" target="_blank">
              <FaInstagramSquare className="text-red-600" />
            </a>
          </div>
        </section>
        <section className="py-4">
          {/* <iframe md:width="848" width="350" md:height="500" height="300" src="https://www.youtube.com/embed/lNxStwUSsS4" title="#PoochhaHaiKabhi - #HaveYouEverAsked?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <img
            className="w-full border-2 rounded-lg"
            src="https://img.freepik.com/free-photo/international-day-education-illustration_23-2151101756.jpg?t=st=1719299752~exp=1719303352~hmac=1094e6eae787bfe5561bc321bd9931e86a112cb800bd6586c1f942096ea52ab6&w=900"
            alt=""
          />
        </section>
        <section className="py-4">
          <p className="text-lg md:max-w-5xl max-w-full md:line-clamp-10 line-clamp-none text-justify ">
            This year, to mark the importance of education for all, PRABISVG's
            theme is ‘Creating an Inclusive Education Ecosystem: Catalysing
            Partnerships’, which focuses on the inclusion of children, women,
            and girls across all spheres, whether it be access to quality
            education, economic empowerment, digital literacy, decision making,
            etc. What roles do various stakeholders play in ensuring children,
            women, and girls live empowered lives with good quality education,
            whether it be the private sector, government, community,
            institutions, or family? Our focus is on – what do children, women,
            and girls want? When was the last time they were asked what they
            need to lead a healthy, happy, and dignified life with access to
            education? Their voices and choices? Therefore, this year’s campaign
            is #madadkarketodekho (#tryhelpingothers) - a question for you and
            for each one of us.
          </p>
        </section>
      </div>
      <hr />
      <div className="md:w-[35%] w-full">
        <PaymentQr />
      </div>
    </main>
  );
}

export default LetsHelp;
