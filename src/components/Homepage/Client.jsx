import React from 'react';
import dashed from '../../assets/images/design/dashed.png';
import { CarouselSlider } from '..';
import Image from 'next/image';

export default function Client() {
  return (
    <section className='w-full md:h-full overflow-hidden px-6 md:px-12 py-16 md:py-12'>
      <div className='mx-auto  container flex flex-col items-center justify-center'>
        <h1 className='text-light font-semibold text-2xl md:text-4xl'>
          Trusted By
        </h1>
        <Image
          src={dashed}
          width={204}
          height={8}
          alt='dashed text'
        />
        <p className='text-tersier font-normal text-base mt-4'>
          Dipercaya oleh Ribuan Pebisnis, Instansi, dan Perusahaan Ternama
        </p>
      </div>
      <div className='w-full  h-full mx-auto container mt-8'>
        <CarouselSlider />
      </div>
    </section>
  );
}

Client.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};
