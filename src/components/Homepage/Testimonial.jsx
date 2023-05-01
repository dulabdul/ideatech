import React from 'react';
import { CardTestimonial } from '..';
import testi1 from '../../assets/images/design/testi-1.png';
import testi2 from '../../assets/images/design/testi-2.png';
import testi3 from '../../assets/images/design/testi-3.png';
import Image from 'next/image';
import testiBg from '../../assets/images/design/testi.png';
import dashed from '../../assets/images/design/dashed.png';

export default function Testimonial() {
  const testimonialList = [
    {
      name: 'Andrew Schultz',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      imageUrl: testi1,
    },
    {
      name: 'Andrew Schultz',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      imageUrl: testi2,
    },
    {
      name: 'Andrew Schultz',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      imageUrl: testi3,
    },
  ];
  return (
    <section className='w-full overflow-hidden px-6 py-12 md:px-12 md:py-16'>
      <div className='container mx-auto'>
        <div className='flex justify-center flex-col items-center'>
          <h1 className='text-light font-semibold text-2xl md:text-4xl'>
            Ulasan Dari Client Kami
          </h1>
          <Image
            src={dashed}
            width={204}
            height={8}
            alt='dashed text'
          />
          <p className='text-tersier font-light text-base mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit
            delectus fugiat consectetur autem tempore.
          </p>
        </div>
        <div className='w-full grid justify-center items-center grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-4'>
            {testimonialList.map((item, index) => (
              <CardTestimonial
                key={index}
                review={item.review}
                imageUrl={item.imageUrl}
                name={item.name}
              />
            ))}
          </div>
          <Image
            src={testiBg}
            alt='TechIdea | Testimonial'
            width={610}
            height={610}
            className='object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
}
