import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus saepe, consequatur doloremque omnis sint voluptates ipsa maxime dolore odit laboriosam, velit ea excepturi eius veritatis. Odit culpa, quaerat corporis, minima hic repudiandae reiciendis dolorem mollitia vitae sunt cupiditate voluptate?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eaque ipsam impedit optio eum quos consectetur sit, sequi id voluptatem aliquam deleniti reprehenderit ullam dolore vel hic placeat doloribus a excepturi obcaecati ut architecto saepe! Architecto velit incidunt soluta est consequuntur eveniet enim omnis officiis.</p>
          <b className='text-gray-800'>Our vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam, ab iusto voluptatum nesciunt officia pariatur placeat eum consequuntur, at obcaecati quia expedita est, unde suscipit ad natus earum amet?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access To A Network Of Trusted Healthcare Professionals In Your Area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
