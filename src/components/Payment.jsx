import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { Navigate, useNavigate } from 'react-router-dom';

function Payment() {

        const navigate = useNavigate();

        const [formData,setFormData] = useState({
            name:'',
            email:'',
            phone:'',
            amount:'',
        })

        const [paymentInfo,setPaymentInfo] = useState('')
        const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

        const handleChange = ((e) =>{
            e.preventDefault();
            const {name,value} = e.target;
            setFormData({ ...formData,[name]:value})
            
        })

        const generatePaymentLink = (()=> {
            // const PaypaPaymentLink = `https://www.paypal.com/paypalme/example?amount=${formData.amount}&note=Donation%20from%20${formData.name}`
            // setPaymentInfo(PaypaPaymentLink)
            if (selectedPaymentMethod === 'phonepe') {
                // Generate PhonePe UPI QR code
                const phonePeQRCode = `upi://pay?pa=merchant@upi&pn=Merchant&am=${formData.amount}&cu=INR`;
                setPaymentInfo(phonePeQRCode);
              } else if (selectedPaymentMethod === 'paytm') {
                // Generate Paytm QR code
                const paytmQRCode = `https://paytm.com/pay?6201274925@paytm=${formData.merchantID}&amount=${formData.amount}&currency=INR`;
                setPaymentInfo(paytmQRCode);
              }
        })
  return (
    <div>
         <form className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif]">
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Name</label>
                            <input type="text" name='name'id='name' value={formData.name} onChange={handleChange} placeholder="Enter your name"
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Email</label>
                            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder="Enter your email"
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Phone No.</label>
                            <input type="number" name='phone' id='number' value={formData.phone} onChange={handleChange} placeholder="Enter your phone no"
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Donate Amount</label>
                            <input type="number" id='amount' name='amount' value={formData.amount} onChange={handleChange} placeholder="Amount "
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div>
          <label className="text-white text-sm">Select Payment Method:</label>
          <select value={selectedPaymentMethod} onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white">
            <option value="">Select</option>
            <option value="phonepe">PhonePe</option>
            <option value="paytm">Paytm</option>
            {/* Add more payment methods as needed */}
          </select>
        </div>
                        <button type="button" onClick={()=>navigate('/checkout')}
                            className="px-6 py-2 w-full bg-orange-400 text-sm text-white hover:bg-[#444] mx-auto block">Submit</button>
                    </form>
                    {paymentInfo && <QRCode value={paymentInfo}/>}
                    
    </div>
  )
}

export default Payment