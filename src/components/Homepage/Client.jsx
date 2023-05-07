import React from 'react';
import { CarouselSlider, Heading } from '..';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';

export default function Client({ headTagline, tagline, taglineDescription }) {
  return (
    <section className='w-full md:h-full overflow-hidden px-6 md:px-12 py-16 md:py-12'>
      <Heading
        tagline={headTagline}
        serviceTagline={tagline}
        description={taglineDescription}
      />
      <div className='w-full  h-full mx-auto container mt-8'>
        <CarouselSlider />
      </div>
    </section>
  );
}
