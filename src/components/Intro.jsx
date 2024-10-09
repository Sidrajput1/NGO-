import React from 'react'

function Breadcrumb({ items }) {
    return (
      <nav className="text-white mb-4">
        <ol className="list-reset flex">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

function Intro({heading,image,breadcrumbItems}) {
  return (
    <div className='relative h-[40vh] bg-orange-900 overflow-hidden'>
    <img className='absolute h-full w-full inset-0 object-cover' src={image} alt="banner image" />
    <div className='absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-800 opacity-40'></div>
    <div className='relative p-10 lg:p-4 text-white'>
      
      <div className='text-left md:p-[7rem] pt-[4rem]'>
        <h2 className="text-4xl lg:text-6xl text-white z-50 font-extrabold tracking-wide mb-4">
          {heading}
        </h2>
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  </div>
  )
}

export default Intro