import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>Nosotros <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Bienvenido a tu centro médico, su socio de confianza para gestionar sus necesidades de atención médica de manera conveniente y eficiente. En Prescripto, entendemos los desafíos que enfrentan las personas cuando se trata de programar citas médicas y administrar sus registros médicos.</p>
          <p>Estamos comprometido con la excelencia en la tecnología sanitaria. Nos esforzamos continuamente por mejorar nuestra plataforma, integrando los últimos avances para mejorar la experiencia del usuario y brindar un servicio superior. Ya sea que esté programando su primera cita o administrando la atención continua, estamos aquí para ayudarlo en cada paso del camino.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Nuestra visión es crear una experiencia de atención médica perfecta para cada usuario. Nuestro objetivo es cerrar la brecha entre los pacientes y los proveedores de atención médica, facilitándole el acceso a la atención que necesita, cuando la necesita.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Porqué  <span className='text-gray-700 font-semibold'>ELEGIRNOS</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFICIENCIA:</b>
          <p>Programación de citas optimizada que se adapta a su ajetreado estilo de vida.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCIA: </b>
          <p>Acceso a una red de profesionales sanitarios de confianza en su zona.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZACION:</b>
          <p >Recomendaciones y recordatorios personalizados para ayudarle a mantenerse al tanto de su salud.</p>
        </div>
      </div>

    </div>
  )
}

export default About
