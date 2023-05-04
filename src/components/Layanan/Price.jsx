import React, { useEffect, useState, useMemo } from 'react';
import { CardPrice } from '..';
import useData from '@/hooks';
import { Dropdown } from 'flowbite-react';

export default function Price({ type, initCategory }) {
  return (
    <section className='w-full h-full px-6 py-12 md:px-12 md:py-16 overflow-hidden'>
      <div className='mx-auto container'>
        <CardPrice
          type={type}
          initalSelectCategory={initCategory}
        />
      </div>
    </section>
  );
}
