import React from 'react'
import Bars from './ui/Bars'
import Logo from './ui/Logo'

function Navbar() {
  return (
    <nav className='md:py-5 py-3 md:px-10 px-5 md:fixed sticky w-full z-50 top-0 md:bg-transparent bg-neutral-50 flex justify-between text-3xl md:text-neutral-50'>
      <div>
        <Logo />
      </div>
      <div>
        <Bars />
      </div>
    </nav>
  )
}

export default Navbar