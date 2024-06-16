"use client";
import { faBarsStaggered, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Bars() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className='z-50' onClick={() => setIsActive(!isActive)} // Toggle isActive on click
    >
      {isActive ? (
        <FontAwesomeIcon className='transition-all hover:rotate-[135deg] rotate-45' icon={faPlus} />
      ) : (
        <FontAwesomeIcon className='hover:rotate-180' icon={faBarsStaggered} />
      )}
    </div>
  );
}
