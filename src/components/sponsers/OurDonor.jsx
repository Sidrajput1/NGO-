import React from "react";
import Intro from "../Intro";

function OurDonor() {
  return (
    <div>
      <Intro
        heading="Our Donor"
        image={
          "https://i.pinimg.com/736x/22/8e/84/228e843eb2f374e08785c3c80991d258.jpg"
        }
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/aboutus" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <div className="bg-gray-50 mt-8 text-gray-900 py-12 text-center">
        <h1 className="text-5xl text-orange-600 font-bold uppercase tracking-wide">
          Meet Our Donors
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Every contribution matters. Our donors and sponsors are the backbone
          of our mission, helping us bring hope and change to countless lives.
          Join us in making a difference.
        </p>
      </div>
      <div className="min-h-[80vh]">

      </div>
      <div className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Want to Join the Cause?</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Your support can make a significant difference. Become a donor or
          partner with us to create a brighter future.
        </p>
        <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white py-2 px-6 rounded-full">
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default OurDonor;
