import React from 'react';
import CustomButton from '../Button';
import heroImg from '../../assets/images/design/hero.png';
import gradientWhiteBG from '../../assets/images/design/g-white.png';
import gradient59 from '../../assets/images/design/rectangle-59.png';
import gradient56 from '../../assets/images/design/rectangle-56.png';
import gradient54 from '../../assets/images/design/rectangle-54.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from 'next/image';
export default function Hero() {
  return (
    <section className='w-full md:h-full overflow-hidden'>
      <Image
        src={gradient59}
        width={634}
        height={634}
        alt='gradient-one'
        className='absolute z-0'
      />
      <div className='md:h-[100vh] flex flex-col justify-center'>
        <div
          className={`w-full container relative mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-16 justify-center rounded-2xl`}>
          <div className='flex  md:row-start-auto flex-col pt-16 gap-y-2 justify-start text-center md:text-start md:justify-center md:gap-y-6 w-full'>
            <Image
              src={gradient54}
              width={634}
              height={634}
              alt=''
              className='absolute z-0'
            />
            <CustomButton
              isSecondary
              isRoundedFull
              className='button w-[50%] md:w-[25%] font-bold hidden md:block'>
              <span className='bg-gradient-primary bg-clip-text text-transparent z-10'>
                IdeaTech
              </span>
            </CustomButton>
            <h1 className='text-4xl md:text-5xl text-light leading-snug tracking-wider md:tracking-widest z-10'>
              Perusahaan Jasa <span className='text-primary'>Website</span>,
              <span className='text-primary'>Branding</span>, dan{' '}
              <span className='text-primary'>Digital Marketing</span>
            </h1>
            <p className='text-sm text-tersier font-light z-10'>
              Tingkatkan nilai dan penjualan bisnis anda melalui digital
              marketing yang dikerjakan secara profesional.
            </p>
            <div className='flex flex-wrap md:flex-nowrap md:gap-y-0 mt-4 md:mt-0 justify-center md:justify-start z-10'>
              <CustomButton
                isFlex
                isGradient
                isRoundedFull
                href='#'
                type='link'
                isExternal
                className='md:py-3 text-light items-center text-xl hover:opacity-80 button'>
                Konsultasi Ide Anda{' '}
                <BsFillArrowRightCircleFill className='ml-2' />
              </CustomButton>
            </div>
          </div>

          <div className='w-full h-full hidden md:flex justify-center '>
            <Image
              src={heroImg}
              width={420}
              height={420}
              style={{
                width: '100%',
                height: 'auto',
              }}
              className='object-cover object-center z-30'
              alt='TechIdeationHub | Hero'
            />
            <Image
              src={gradientWhiteBG}
              width={634}
              height={634}
              alt='gradient-two'
              className='absolute z-10'
            />
          </div>
          <Image
            src={gradient56}
            width={634}
            height={634}
            alt='gradient-three'
            className='absolute z-10'
          />
        </div>
      </div>
    </section>
  );
}
