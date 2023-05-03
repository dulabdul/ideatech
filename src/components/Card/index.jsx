import React from 'react';

import PropTypes from 'prop-types';
import Image from 'next/image';
import { CustomButton } from '..';
import { FiArrowRightCircle } from 'react-icons/fi';
import Link from 'next/link';

export function Card({ icons, title, description }) {
  return (
    <div className='bg-[#3F3F3F] shadow-md rounded-xl px-8 py-12'>
      <div className='flex flex-wrap items-center'>
        <h3 className='font-semibold text-2xl text-light'>
          <span className='inline-block'> {icons}</span>
          {title}
        </h3>
        <p className='text-tersier font-light mt-4'>{description}</p>
      </div>
    </div>
  );
}
export function CardService({ images, title, description, url }) {
  return (
    <div className='w-full h-auto overflow-hidden'>
      <div className='flex flex-wrap items-center'>
        <Image
          src={images}
          alt={title}
          style={{ width: 'auto', height: 'auto' }}
        />
        <h1 className='text-4xl font-semibold text-light mt-4'>{title}</h1>
        <p className='text-tersier font-light text-base my-3'>{description}</p>
        <Link
          href={url}
          className='flex z-10 relative text-light underline hover:text-primary items-center'>
          Lihat daftar harga <FiArrowRightCircle className='ml-2 text-xl' />
        </Link>
      </div>
    </div>
  );
}

export function CardPortfolio({ image, title, url }) {
  return (
    <div className='rounded-lg overflow-hidden'>
      <CustomButton
        type='link'
        isExternal
        target='_blank'
        href={url}>
        <Image
          alt={title}
          src={image}
          width={500}
          height={500}
          style={{ width: '100%', height: '100%' }}
          className='object-cover object-center hover:scale-110 transition-all duration-400 ease-in-out'
        />
      </CustomButton>
    </div>
  );
}

export function CardTestimonial({ name, imageUrl, review, job }) {
  return (
    <div className='bg-[#3F3F3F] animate-float rounded-xl shadow-md flex items-center flex-wrap md:flex-nowrap justify-start px-6 py-8 gap-y-4'>
      <Image
        src={imageUrl}
        alt={name}
        width={72}
        height={72}
      />
      <div className='md:ml-4'>
        <h4 className='text-light font-normal text-2xl capitalize'>{name}</h4>
        <p className='text-tersier font-light text-sm'>{review}</p>
        <h6 className='text-tersier font-semibold text-base uppercase mt-2'>
          {job}
        </h6>
      </div>
    </div>
  );
}
export function CardTestimonialProfile({ imageUrl, name, review, job }) {
  return (
    <div className='bg-transparent md:border md:border-tersier md:ring-1 md:px-12 md:py-8 mt-4 rounded-full'>
      <div className='flex flex-wrap items-start gap-y-4 gap-x-6'>
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className='w-[64px] h-[64px] md:w-[96px] md:h-[96px]'
        />
        <div className='flex flex-col'>
          <p className='text-light font-normal text-base break-all'>
            {`"${review}"`}
          </p>
          <div className='flex items-end flex-col gap-y-2 mt-5'>
            <h5 className='text-tersier font-semibold'>{name}</h5>
            <h6 className='text-slate-400 uppercase'>{job}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  icons: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};
CardService.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

CardPortfolio.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};
CardTestimonial.propTypes = {
  imageUrl: PropTypes.object,
  name: PropTypes.string,
  review: PropTypes.string,
};
