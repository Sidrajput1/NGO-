import React, { useState } from 'react'
import navlogo from '/Applications/XAMPP/xamppfiles/htdocs/Shimmer Group/Ngo/src/assets/pics/ navlogo.jpg';

function LetsHelpFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://prabisvg.com//phpbox/sendingmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending the message.');
    }
}
  return (
    <div>
      <div className="bg-gray-200 text-black flex flex-col items-center justify-center min-h-[50vh] p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-10xl w-full text-center">
          <div className="mb-4">
            <img src={navlogo} alt="HelpAge India" className="mx-auto h-12 mb-4" />
            <h1 className="text-2xl font-bold">Become a part of the Our Organisation</h1>
            <p className="text-gray-700">For efforts to ensure the care and dignity of women,girls and children in need in india</p>
          </div>
          <form onSubmit={handleSubmit} >
          <div  className="flex flex-col md:flex-row justify-between items-center mb-4">
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              className="p-2 m-2 border border-gray-300 rounded w-full md:w-1/3"
            />
            <input
              type="text"
              name='mobile_no'
              value={formData.mobile_no}
              onChange={handleChange}
              placeholder="MOBILE NO."
              className="p-2 m-2 border border-gray-300 rounded w-full md:w-1/3"
            />
            <input
              type="text"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="YOUR EMAIL-ID"
              className="p-2 m-2 border border-gray-300 rounded w-full md:w-1/3"
            />
          </div>
          <button type='submit' className="bg-black text-white p-2 rounded-lg">Send Us</button>
          </form>
          <div className="mt-4 text-sm text-gray-600 flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <p>By sharing your details, you agree to receive tax receipts, stories, and updates from PBSKESS via mobile, WhatsApp, Landline, email, and post. If you'd like to change this, please send us an email at <a href="mailto:prabisvg@gmail.com" className="text-blue-600">prabisvg@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsHelpFooter