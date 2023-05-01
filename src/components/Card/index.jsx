import React from 'react';

import PropTypes from 'prop-types';
import Image from 'next/image';
import { CustomButton } from '..';
import { FiArrowRightCircle } from 'react-icons/fi';

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
        <CustomButton
          type='link'
          isExternal
          isFlex
          target='_blank'
          href={url}
          className='text-light underline hover:text-primary items-center'>
          Lihat daftar harga <FiArrowRightCircle className='ml-2 text-xl' />
        </CustomButton>
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

export function CardTestimonial({ name, imageUrl, review }) {
  return (
    <div className='bg-[#3F3F3F] rounded-xl shadow-md flex items-center justify-start px-6 py-8'>
      <Image
        src={imageUrl}
        alt={name}
        width={72}
        height={72}
      />
      <div className='ml-4'>
        <h4 className='text-light font-normal text-2xl capitalize'>{name}</h4>
        <p className='text-tersier font-light text-sm'>{review}</p>
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
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  review: PropTypes.string,
};
