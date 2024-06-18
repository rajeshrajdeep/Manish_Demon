import React from 'react';

export default function MenuPanel({ isActive }) {
  return (
    <section className={`transition-all bg-[#121212] border border-neutral-950 -z-10 md:top-5 top-16 md:container md:mx-auto fixed md:py-20 py-14 md:px-5 px-10 duration-300 ${isActive ? 'block' : 'hidden'}`}>
      <div className='grid border border-neutral-50 md:text-9xl text-7xl font-extrabold text-center p-1 md:grid-cols-2 grid-cols-1'>
        <div className='w-full border border-neutral-50'><a className='hover:text-black tracking-wider tshadow' href="/">HOME</a></div>
        <div className='w-full border border-neutral-50'><a className='hover:text-black tracking-wider tshadow' href="/">ABOUT</a></div>
        <div className='w-full border border-neutral-50'><a className='hover:text-black tracking-wider tshadow' href="/">ARTISTS</a></div>
        <div className='w-full border border-neutral-50'><a className='hover:text-black tracking-wider tshadow' href="/">WORKS</a></div>
        <div className='w-full border flex justify-center items-center border-neutral-50'>
          <form className='text-2xl p-2' action="" method="post">
            <input className='bg-transparent border-b m-2 md:pr-10' type="email" name="email" id="email" placeholder='Your Email' />
            <button className='border rounded-lg px-2'>Subscribe</button>
          </form>
        </div>
        <div className='w-full flex justify-center items-center gap-2 border border-neutral-50'>
          <a className='hover:text-black text-2xl ' href="/">INSTAGRAM</a>
          <a className='hover:text-black text-2xl ' href="/">FACEBOOK</a>
          <a className='hover:text-black text-2xl ' href="/">X</a>
          <a className='hover:text-black text-2xl ' href="/">YOUTUBE</a>
        </div>


      </div>
    </section>
  );
}
