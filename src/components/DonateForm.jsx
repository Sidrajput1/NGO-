import React from 'react'
import './donate2.css'
import Payment from './Payment'

function DonateForm() {
    return (
        <div className='w-full md:min-h-[90vh] h-auto py-8 relative' id='donate-form'>
            <div className=''>
                <img className='w-full h-[90vh] blur-sm object-cover bg-no-repeat' src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>
            <div id='form-box' className='flex flex-row  justify-around h-auto '>
                <section className='md:w-[40%] w-full flex flex-col justify-around items-center px-6 text-white'>
                    <div className="font-[sans-serif] space-y-8 text-[#333] text-center max-w-xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 fill-gray-300 inline" viewBox="0 0 475.082 475.081">
                            <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000" />
                        </svg>
                        <p className="text-lg text-gray-300">It's not how much We give but how much love We put into giving.</p>
                        <div className="flex flex-wrap items-center justify-center">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSqyNJ1Wy9UKyTPJsQr0jfcgZEWBvRKHICJRz-7ruhw&s' className="w-9 h-9 rounded-full" />
                            <div className="ml-4 text-left">
                                <p className="text-sm font-semibold text-white">Mother Teresa</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="font-[sans-serif] space-y-8 text-[#333] text-center max-w-xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 fill-gray-300 inline" viewBox="0 0 475.082 475.081">
                            <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000" />
                        </svg>
                        <p className="text-lg text-gray-300">The Best way to find yourself in the service of others </p>
                        <div className="flex flex-wrap items-center justify-center">
                            <img src='https://images.news18.com/ibnlive/uploads/2021/10/mahatma-gandhi.jpg' className="w-9 h-9 rounded-full" />
                            <div className="ml-4 text-left">
                                <p className="text-sm font-semibold text-white">Mahatma Gandhi</p>
                               
                            </div>
                        </div>
                    </div>


                </section>
                <section className=' py-4 w-[50%] h-auto'>
                    <h2 className='md:text-6xl text-xl text-white font-sans m-0 text-center py-16 '>Donate Now</h2>
                    {/* <form className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif]">
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Name</label>
                            <input type="text" placeholder="Enter your name"
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Email</label>
                            <input type="email" placeholder="Enter your email"
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Phone No.</label>
                            <input type="number" placeholder="Enter your phone no"
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white w-36 text-sm">Donate Amount</label>
                            <input type="number" placeholder="Amount "
                                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-transparent text-white" />
                        </div>
                        <button type="button"
                            className="px-6 py-2 w-full bg-orange-400 text-sm text-white hover:bg-[#444] mx-auto block">Submit</button>
                    </form> */}
                    <Payment/>
                </section>

            </div>
        </div>
    )
}

export default DonateForm