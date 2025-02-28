import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Citas seguras para ti y tu familia.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>ParaTi</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contactos</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>A un toque de ti</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>022012345</li>
            <li>tucita@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
