"use client"
import React, { useState } from 'react';
import Bars from './ui/Bars';
import Logo from './ui/Logo';
import MenuPanel from './MenuPanel';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='md:py-5 py-3 md:px-10 px-5 md:fixed sticky w-full z-50 top-0 md:bg-transparent bg-neutral-50 flex justify-between text-3xl md:text-neutral-50'>
      <div>
        <Logo />
      </div>
      <div>
        <Bars isActive={isActive} setIsActive={setIsActive} />
      </div>
      <MenuPanel isActive={isActive} />
    </nav>
  );
}

export default Navbar;
