import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Navigate, useNavigate } from "react-router-dom";
import "./donate.css";

function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    pan_no: "",
    amount: "",
  });

  const [paymentInfo, setPaymentInfo] = useState("");
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generatePaymentLink = async (e) => {
    e.preventDefault();
    const paymentLink = `upi://pay?pa=1000220618000049.9472670475@idbi&pn=PRABISVG SAMAJ KALYAN & SHIKSHAN SANSTHA&mc=8398&am=${formData.amount}`;
    setPaymentInfo(paymentLink);

    setTimeout(() => {
      setShowThankYou(true);
    }, 50000);

    try {
      const response = await fetch(
        "https://prabisvg.com//phpbox/sendingmail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending the message.");
    }
  };
  return (
    <div>
      <form
        onSubmit={generatePaymentLink}
        className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif]"
      >
        <div className="flex items-center">
          <label className="text-white w-36 text-sm">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white"
          />
        </div>
        <div className="flex items-center">
          <label className="text-white w-36 text-sm">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white"
          />
        </div>
        <div className="flex items-center">
          <label className="text-white w-36 text-sm">Phone No.</label>
          <input
            type="number"
            name="mobile_no"
            id="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            placeholder="Enter your phone no"
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white"
          />
        </div>
        <div className="flex items-center">
          <label className="text-white w-36 text-sm">Pan No.</label>
          <input
            type="text"
            name="pan_no"
            id="pan_no"
            value={formData.pan_no}
            onChange={handleChange}
            placeholder="Enter your Pan (optional) "
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white"
          />
        </div>
        <div className="flex items-center">
          <label className="text-white w-36 text-sm">Donate Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount "
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 w-full bg-orange-400 text-sm text-white hover:bg-[#444] mx-auto block"
        >
          Submit
        </button>

        {/* {paymentInfo && <QRCode value={paymentInfo} />} */}
        {paymentInfo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-6 bg-white text-center rounded-lg shadow-lg animate-fade-in">
              <QRCode value={paymentInfo} size={256} className="mx-auto" />
              <h2 className="text-2xl font-bold mt-4">
                Scan the QR Code to Complete Your Payment
              </h2>
              <p className="text-sm text-gray-600">
                Thank you for your donation!
              </p>
            </div>
          </div>
        )}
      </form>
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-orange-500 text-white text-center rounded-lg animate-fade-in">
            <h2 className="text-2xl font-bold">Thank You for Your Donation!</h2>
            <p className="text-sm">We appreciate your generosity.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
