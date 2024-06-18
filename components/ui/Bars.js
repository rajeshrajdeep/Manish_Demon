"use client";
import { faBarsStaggered, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Bars({ isActive, setIsActive }) {
  return (
    <div className='z-50' onClick={() => setIsActive(!isActive)}>
      {isActive ? (
        <FontAwesomeIcon className='transition-all hover:rotate-[135deg] rotate-45' icon={faPlus} />
      ) : (
        <FontAwesomeIcon className='hover:rotate-180' icon={faBarsStaggered} />
      )}
    </div>
  );
}
