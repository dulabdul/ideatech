import React from 'react';
import Image from 'next/image';
import dashed from '../../assets/images/design/dashed.png';
import { CardTestimonialProfile } from '..';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testi1 from '../../assets/images/design/testi-1.png';
import testi2 from '../../assets/images/design/testi-2.png';
import testi3 from '../../assets/images/design/testi-3.png';
export default function TestimonialProfile() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const testimonialList = [
    {
      name: 'Andrew Schultz',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      imageUrl: testi1,
      job: 'ceo fht group',
    },
    {
      name: 'Andrew Schultz',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      imageUrl: testi2,
      job: 'ceo fht group',
    },
    {
      name: 'Andrew Schultz',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      imageUrl: testi3,
      job: 'ceo fht group',
    },
  ];
  return (
    <section className='w-full h-full px-6 py-12 md:px-12 md:py-16 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-light font-semibold text-center text-2xl md:text-4xl'>
            Testimonial Mitra Bisnis Kami
          </h1>
          <Image
            src={dashed}
            width={204}
            height={8}
            alt='dashed text'
          />
          <p className='text-tersier font-light text-base md:text-center mt-5'>
            Pendapat klien kami yang puas dengan pelayanan yang diberikan oleh
            Kodeight Digital. <br /> Sekarang adalah giliran Anda untuk menjadi
            seperti mereka dengan menggunakan layanan yang kami tawarkan.
          </p>
        </div>
        <div className='mt-8'>
          <Carousel
            infinite={true}
            ssr
            partialVisbile={false}
            responsive={responsive}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            showDots={true}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'>
            {testimonialList.map((item, index) => (
              <CardTestimonialProfile
                key={index}
                imageUrl={item.imageUrl}
                name={item.name}
                review={item.review}
                job={item.job}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
