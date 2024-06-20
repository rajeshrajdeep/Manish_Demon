import React from 'react';

export default function MenuPanel({ isActive }) {
  return (
    <section className={`transition-all bg-[#121212] -z-10 absolute md:py-20 py-10 top-16 w-full left-0 md:top-5 text-white duration-300 ${isActive ? 'block' : 'hidden'}`}>
      <div className='grid border border-neutral-50 md:grid-cols-2 text-center md:tracking-normal tracking-widest md:text-9xl'>
        <div className='border border-neutral-50'><a href="/"><h1 className='md:hover:text-black tshadow'>WORKS</h1></a></div>
        <div><a href="/"><h1 className='hover:text-black tshadow'>ARTISTS</h1></a></div>
        <div><a href="/"><h1 className='hover:text-black tshadow'>NEWS</h1></a></div>
        <div className='border border-neutral-50'><a href="/"><h1 className='hover:text-black tshadow'>ABOUT</h1></a></div>

        <div className='md:col-span-2 border border-neutral-50'><a href="/"><h1 className='hover:text-black tshadow'>GET TATTOO</h1></a></div>
        <div className='flex md:flex-row flex-col justify-center my-5 items-center gap-1'>
          <input className='bg-transparent text-xl md:w-1/2 w-44 rounded-lg border-b border-rose-500' type="email" name="email" id="email" placeholder='Your Email' />
          <button className='p-1 text-lg border rounded-lg border-rose-500' type="submit">SUBSCRIBE</button>
        </div>
        <div className='grid text-sm md:text-2xl my-5 grid-cols-2'>
          <div className='grid md:grid-cols-2'>
            <div><a className='hover:shadow-rose-400 shadow-md' target='_blank' href="https://www.instagram.com/manish_demon/">INSTAGRAM</a></div>
            <div><a className='hover:shadow-blue-400 shadow-md' href="https://www.facebook.com/manish.rajdeep.9">FACEBOOK</a></div>
          </div>
          <div className='grid md:grid-cols-2'>
            <div><a className='hover:shadow-blue-600 shadow-md' href="https://x.com/manishdemon3">X.COM</a></div>
            <div><a className='hover:shadow-red-600 shadow-md' href="/">YOUTUBE</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
