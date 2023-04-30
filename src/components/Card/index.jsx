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
          className='text-light underline hover:text-blue-500 items-center'>
          Lihat daftar harga <FiArrowRightCircle className='ml-2 text-xl' />
        </CustomButton>
      </div>
    </div>
  );
}

Card.propTypes = {
  icons: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};
