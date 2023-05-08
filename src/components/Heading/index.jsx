import React from 'react';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';

export default function Heading({ tagline, serviceTagline, description }) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-2'>
      <h1 className='text-light font-normal text-xl md:text-2xl capitalize'>
        {tagline}
      </h1>
      {serviceTagline === '' ? (
        <Image
          src={dashed}
          width={204}
          height={8}
          alt='dashed text'
        />
      ) : (
        <h2 className='text-primary font-bold text-center text-2xl md:text-4xl capitalize'>
          {serviceTagline}
        </h2>
      )}

      <p className='text-tersier text-center font-light text-base'>
        {description}
      </p>
      {serviceTagline !== '' ? (
        <Image
          src={dashed}
          width={204}
          height={8}
          alt='dashed text'
        />
      ) : (
        ''
      )}
    </div>
  );
}
