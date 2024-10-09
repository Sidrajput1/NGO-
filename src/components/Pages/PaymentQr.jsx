import QRCode from 'qrcode.react'
import React, { useState } from 'react'
import './payment.css';
import { useNavigate } from 'react-router-dom';

function PaymentQr() {
    const navigate = useNavigate()
    const [money, setMoney] = useState('');
    const handleButtonClick = (amount) => {
        setMoney(amount);
      };
    return (
        <section className=''>
            <div className='text-center mb-6 py-8'>
                <h2 className='text-3xl rounded-full py-4 border-4 border-orange-400 text-yellow-700 animate-bounce'>मदद कर के तो देखो</h2>
            </div>
            <div className='border-2 animated-gradient text-center w-full  '>

                <div className='px-0 '>
                    <div className=' bg-white rounded-xl mt-6 shadow-xl m-auto h-48 max-w-[28rem]'>
                        <div className='flex justify-around py-4'>
                            <button  onClick={() => handleButtonClick(200)} className=' px-6 py-2 rounded-2xl text-xl bg-blue-400'>200</button>
                            <button  onClick={() => handleButtonClick(500)} className='px-6 py-2 rounded-2xl text-xl bg-orange-400'>500</button>
                            <button  onClick={() => handleButtonClick(1000)} className='px-6 py-2 rounded-2xl text-xl bg-yellow-400'>1000</button>
                        </div>

                        <input
                            type="number"
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                            placeholder="Enter the amount"
                            className='p-4 mt-10 w-full rounded-full border-2'
                        />

                    </div>

                    <br />
                    <div className='text-center mx-auto md:ml-24 ml-6'>
                    <QRCode
                        // value={`upi://pay?pa=yourname@upi&pn=Your%20Name&tn=Payment%20for%20services&am=${money}`}
                       // value={`upi://pay?pa=1000220618000049.9472670475@idbi&pn=PRABISVG SAMAJ KALYAN & SHIKSHAN SANSTHA&mc=8398=${money}`}
                       value={`upi://pay?pa=1000220618000049.9472670475@idbi&pn=PRABISVG SAMAJ KALYAN & SHIKSHAN SANSTHA&mc=8398&am=${money}`}
                       size={300}
                        logoimage="https://i.postimg.cc/5tdHfkxF/118852864-1241633666213183-4722008391193475906-n.png"
                        logowidth={100}
                        logoheight={100}
                        logoopacity={0.6}
                    />
                    </div>

                </div>
                <p>Scan the code Using Any UPI</p>

            </div>
            <div className='m-auto text-center mt-4'>
            <button onClick={()=>navigate('/donate')} className='px-4 py-2 text-2xl rounded-2xl bg-orange-700 text-white hover:bg-transparent hover:text-black transition-all ease-in-out duration-300'>Contibute Now</button>
            </div>
        </section>
    )
}

export default PaymentQr