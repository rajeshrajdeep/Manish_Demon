import { faD, faM } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <div className='hidden md:block font-extrabold tracking-tighter'>
            Manish Demon
        </div>
        <div className='md:hidden font-extrabold'>
            <FontAwesomeIcon icon={faM} /> <FontAwesomeIcon icon={faD} />
        </div>
    </div>
  )
}
