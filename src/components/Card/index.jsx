import React, { useState, useEffect, useMemo } from 'react';
Dropdown;
import PropTypes from 'prop-types';
import Image from 'next/image';
import { CustomButton } from '..';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsCheckLg } from 'react-icons/bs';
import Link from 'next/link';
import dashed from '../../assets/images/design/dashed.png';
import { Dropdown } from 'flowbite-react';
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
    <div className='bg-transparent lg:border lg:border-tersier lg:ring-1 md:px-12 md:py-8 mt-4 rounded-full'>
      <div className='flex flex-wrap items-start gap-y-4 gap-x-6 cursor-pointer'>
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

export function CardServiceReason({ tagline, taglineDescription, data }) {
  return (
    <section className='w-full h-full px-6 py-12 md:px-12 md:py-16 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-3 items-center justify-center '>
          <h1 className='text-light font-semibold text-xl md:text-3xl capitalize text-center'>
            Kenapa Memilih Kami?
          </h1>
          <h2 className='text-primary font-semibold text-2xl md:text-5xl text-center'>
            {tagline}
          </h2>
          <p className='text-tersier font-light text-base text-center'>
            {taglineDescription}
          </p>
        </div>
        <div className='grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-2 items-center justify-center mt-12 md:mt-16'>
          {data?.map((item, index) => (
            <>
              <div
                className={`${
                  index % 2 === 1
                    ? `md:col-start-2 md:col-end-2 ${
                        index === 0 ? 'md:row-start-2' : ''
                      }`
                    : `md:col-start-1 md:col-end-1 ${
                        index === 1 ? 'md:row-start-1' : ''
                      }`
                }`}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={600}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div
                className={`${
                  index % 2 === 1
                    ? ` md:col-start-1 md:col-end-1 ${
                        index === 1 ? 'md:row-start-2' : ''
                      } ${index === 3 ? 'md:row-start-4' : ''}`
                    : `md:col-start-2 md:col-end-2 ${
                        index === 0 ? 'md:row-start-1' : ''
                      }`
                }`}>
                <h3 className='text-light font-semibold text-xl md:text-3xl capitalize'>
                  {item.title}
                </h3>
                <p className='text-tersier  font-light text-base mt-8'>
                  {item.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardPrice({ type, data }) {
  const [selectedCategory, setSelectedCategory] = useState(
    'website company profile'
  );
  const [windowWidth, setWindoWidth] = useState(null);
  useEffect(() => {
    setWindoWidth(window.screen.width);
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function filteredServicePackage() {
    if (!selectedCategory) {
      return data;
    }
    return data?.filter((item) => item.title === selectedCategory);
  }
  let filterServiceList = useMemo(filteredServicePackage, [
    selectedCategory,
    data,
  ]);
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }
  console.log(data);
  return (
    <>
      <div className='flex flex-col gap-y-2'>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <h1 className='text-light font-normal text-xl md:text-2xl capitalize'>
            Harga Paket Kami
          </h1>
          <h2 className='text-primary font-bold text-center text-2xl md:text-4xl capitalize'>
            Paket Harga Jasa Pembuatan {type}
          </h2>

          <p className='text-tersier text-center font-light text-base'>
            Tentukan paket pembuatan {type} sesuai dengan kebutuhan Anda.
          </p>
          <Image
            src={dashed}
            width={204}
            height={8}
            alt='dashed text'
          />
        </div>
        <div className='flex items-start md:items-center justify-start md:justify-center mt-8'>
          <div className='portoflio_section flex flex-row md:items-center justify-start md:justify-center gap-y-4 md:gap-y-0 gap-x-4 overflow-x-auto'>
            {windowWidth < 576 ? (
              <Dropdown
                inline={true}
                className='text-light'
                label={selectedCategory}
                dismissOnClick={false}>
                {data?.map((item, index) => (
                  <Dropdown.Item
                    className='capitalize'
                    key={index}>
                    <button
                      type='button'
                      value={item.title}
                      className='capitalize'
                      onClick={handleCategoryChange}>
                      {item.title}
                    </button>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ) : (
              data?.map((item, index) => (
                <div key={index}>
                  <button
                    type='button'
                    value={item.title}
                    onClick={handleCategoryChange}
                    className={`px-6 py-1 text-start text-light capitalize border border-primary ring-1 hover:bg-primary ${
                      selectedCategory === item.title ? 'bg-primary' : ''
                    }`}>
                    {item.title}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6 py-8'>
          {selectedCategory === 'website company profile'
            ? filterServiceList?.map((item) => {
                return item.servicePackage.length === 0
                  ? 'No Data'
                  : item.servicePackage.map((item) => (
                      <div
                        key={item.id}
                        className='bg-tersier rounded-lg shadow-md p-5 md:px-8 md:py-12'>
                        <h3 className='text-slate-700 font-semibold text-xl md:text-2xl capitalize'>
                          {item.name}
                        </h3>
                        <h2 className='text-slate-900 font-bold text-4xl md:text-4xl capitalize tracking-wider my-2'>
                          IDR {item.price}K
                        </h2>
                        <CustomButton
                          type='link'
                          isExternal
                          href='https://whatsapp.com'
                          target='_blank'
                          isFlex
                          isPrimary
                          isRounded
                          className='items-center justify-center my-3 md:my-6 px-4 py-2 md:px-6 md:py-3 text-light hover:opacity-80 text-xl'>
                          Pilih Paket{' '}
                          <FiArrowRightCircle className='text-2xl ml-2' />{' '}
                        </CustomButton>
                        <div className='flex flex-col md:items-center mt-6'>
                          <ul>
                            {item.fiturList.map((fiturItem, index) => (
                              <li
                                key={index}
                                className='flex items-center gap-x-1 text-lg text-slate-800 capitalize'>
                                <BsCheckLg /> {fiturItem.fitur}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ));
              })
            : filterServiceList?.map((item) => {
                return item.servicePackage.length === 0
                  ? 'No Data'
                  : item.servicePackage.map((item, index) => (
                      <div
                        key={item.id}
                        className='bg-tersier rounded-lg shadow-md p-5 md:px-8 md:py-12'>
                        <h3 className='text-slate-700 font-semibold text-xl md:text-2xl capitalize'>
                          {item.name}
                        </h3>
                        <h2 className='text-slate-900 font-bold text-4xl md:text-4xl capitalize tracking-wider my-2'>
                          IDR {item.price}K
                        </h2>
                        <CustomButton
                          type='link'
                          isExternal
                          href='https://whatsapp.com'
                          target='_blank'
                          isFlex
                          isPrimary
                          isRounded
                          className='items-center justify-center my-3 md:my-6 px-4 py-2 md:px-6 md:py-3 text-light hover:opacity-80 text-xl'>
                          Pilih Paket{' '}
                          <FiArrowRightCircle className='text-2xl ml-2' />{' '}
                        </CustomButton>
                        <div className='flex flex-col md:items-center mt-6'>
                          <ul>
                            {item.fiturList.map((fiturItem, index) => (
                              <li
                                key={index}
                                className='flex items-center gap-x-1 text-lg text-slate-800 capitalize'>
                                <BsCheckLg /> {fiturItem.fitur}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ));
              })}
        </div>
      </div>
    </>
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
