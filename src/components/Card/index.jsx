import React, { useState, useEffect, useMemo } from 'react';
Dropdown;
import PropTypes from 'prop-types';
import Image from 'next/image';
import { CustomButton, Heading } from '..';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsCheckLg, BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';

import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testi1 from '../../assets/images/design/testi-1.png';
import testi2 from '../../assets/images/design/testi-2.png';
import testi3 from '../../assets/images/design/testi-3.png';
import useData from '@/hooks';
import { Parallax } from 'react-scroll-parallax';

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
      <div className='flex flex-wrap items-start md:items-center md:justify-center gap-y-4 gap-x-6 cursor-pointer'>
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

export function CardServiceReason({
  headTagline,
  tagline,
  taglineDescription,
  data,
}) {
  return (
    <section className='w-full h-full px-6 py-12 md:px-12 md:py-16 overflow-hidden'>
      <div className='container mx-auto'>
        <Heading
          tagline={headTagline}
          serviceTagline={tagline}
          description={taglineDescription}
        />
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

export function CardPrice({ type, initalSelectCategory }) {
  const { data, isLoading, isError } = useData();
  const [selectedCategory, setSelectedCategory] = useState();
  const [typeOfService, setTypeOfService] = useState('');
  const [rawDataService, setRawDataService] = useState(null);
  const [windowWidth, setWindoWidth] = useState(null);
  useEffect(() => {
    setWindoWidth(window.screen.width);
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };
    setRawDataService(data?.service.map((items) => items));
    window.addEventListener('resize', handleWindowResize);
    setTypeOfService(type);
    setSelectedCategory(initalSelectCategory);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [data, type, initalSelectCategory]);
  function filteredServicePackage() {
    if (!selectedCategory) {
      return rawDataService;
    }
    return rawDataService?.map((items) =>
      items.serviceList.filter((item) => item.title === selectedCategory)
    );
  }
  let filterServiceList = useMemo(filteredServicePackage, [
    rawDataService,
    selectedCategory,
  ]);
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <>
      <div className='flex flex-col gap-y-2'>
        <Heading
          tagline={'Harga Paket Kami'}
          serviceTagline={`Paket Harga Jasa Pembuatan ${type}`}
          description={`Tentukan paket pembuatan ${type} sesuai dengan kebutuhan Anda.`}
        />
        <div className='flex items-start md:items-center justify-start md:justify-center mt-8'>
          <div className='portoflio_section flex flex-row md:items-center justify-start md:justify-center gap-y-4 md:gap-y-0 gap-x-4 overflow-x-auto'>
            {windowWidth < 576 ? (
              <Dropdown
                inline={true}
                className='text-light'
                label={selectedCategory}
                dismissOnClick={false}>
                {rawDataService?.map((items) => {
                  return items.typeService === typeOfService
                    ? items.serviceList.map((item) => (
                        <Dropdown.Item
                          className='capitalize'
                          key={item.id}>
                          <button
                            type='button'
                            value={item.title}
                            className='capitalize'
                            onClick={handleCategoryChange}>
                            {item.title}
                          </button>
                        </Dropdown.Item>
                      ))
                    : '';
                })}
              </Dropdown>
            ) : (
              rawDataService?.map((items) => {
                return items.typeService === typeOfService
                  ? items.serviceList.map((item) => (
                      <div key={item.id}>
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
                  : '';
              })
            )}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6 py-8'>
          {filterServiceList?.map((items) => {
            return items?.map((services) => {
              return services.servicePackage.map((service) => (
                <div
                  key={service.id}
                  className='bg-tersier rounded-lg shadow-md p-5 md:px-8 md:py-12'>
                  <h3 className='text-slate-700 font-semibold text-xl md:text-2xl capitalize'>
                    {service.name}
                  </h3>
                  <h2 className='text-slate-900 font-bold text-4xl md:text-4xl capitalize tracking-wider my-2'>
                    IDR {service.price}K
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
                    Pilih Paket <FiArrowRightCircle className='text-2xl ml-2' />{' '}
                  </CustomButton>
                  <div className='flex flex-col md:items-center mt-6'>
                    <ul>
                      {service.fiturList.map((fiturservice, index) => (
                        <li
                          key={index}
                          className='flex items-center gap-x-1 text-lg text-slate-800 capitalize'>
                          <BsCheckLg /> {fiturservice.fitur}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ));
            });
          })}
        </div>
      </div>
    </>
  );
}

export function CardTestimonialRounded({
  headTagline,
  tagline,
  taglineDescription,
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
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
        <Heading
          tagline={headTagline}
          serviceTagline={tagline}
          description={taglineDescription}
        />
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

export function CardServiceReasonTwo({ type, description, data }) {
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
  console.log(windowWidth);

  return (
    <section className='w-full h-full overflow-hidden px-6 py-12 md:px-12 md:py-16 relative z-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-center'>
          {windowWidth < 576 ? (
            <div>
              <CustomButton
                isFlex
                isGradient
                type='button'
                isRounded
                className='button text-light font-normal text-start text-xl capitalize'>
                {type}
              </CustomButton>
              <div className='flex flex-col mt-12 gap-y-6'>
                <h2 className='text-light font-semibold text-2xl md:text-5xl tracking-wider capitalize'>
                  Manfaat Memiliki
                  <br /> <span className='text-primary capitalize'>
                    {type}
                  </span>{' '}
                  <br /> Untuk Bisnis Anda
                </h2>
                <p className='text-tersier font-light text-base mb-6 md:mb-0'>
                  {description}
                </p>
              </div>
            </div>
          ) : (
            <Parallax translateY={[-150, 100]}>
              <div>
                <CustomButton
                  isFlex
                  isGradient
                  type='button'
                  isRounded
                  className='button text-light font-normal text-2xl capitalize'>
                  {type}
                </CustomButton>
                <div className='flex flex-col mt-12 gap-y-6'>
                  <h2 className='text-light font-semibold text-2xl md:text-5xl tracking-wider capitalize'>
                    Manfaat Memiliki
                    <br />{' '}
                    <span className='text-primary capitalize'>{type}</span>{' '}
                    <br /> Untuk Bisnis Anda
                  </h2>
                  <p className='text-tersier font-light text-base'>
                    {description}
                  </p>
                </div>
              </div>
            </Parallax>
          )}
          <div className='flex flex-col overflow-scroll'>
            {data.map((item, index) => (
              <div
                className='flex flex-row justify-start items-start'
                key={index}>
                <div>
                  <h1 className='text-light font-bold text-2xl md:text-6xl'>
                    {index + 1}
                  </h1>
                </div>
                <div className='ml-2'>
                  <h2 className='text-light font-semibold text-lg md:text-3xl capitalize'>
                    {item.heading}
                  </h2>
                  <p className='text-tersier font-light text-base leading-relaxed capitalize'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardServicePriority({ type, data }) {
  return (
    <section className='w-full h-full overflow-hidden px-6 py-12 md:px-12 md:py-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <CustomButton
            isFlex
            isGradient
            isRounded
            className='button text-light capitalize'>
            {type}
          </CustomButton>
          <h1 className='text-light font-semibold text-2xl md:text-4xl mt-4'>
            Layanan Lengkap
          </h1>
          <h1 className='text-primary font-semibold text-2xl md:text-4xl capitalize text-center'>
            {type}
          </h1>
          <h1 className='text-light font-semibold text-2xl md:text-4xl'>
            Untuk Bisnis Anda
          </h1>
        </div>
        <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-3 items-center justify-center'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex flex-wrap items-center px-3 py-4 md:px-6 md:py-3 bg-transparent group shadow-md border border-tersier rounded-lg hover:bg-primary hover:border-none transition-all duration-400'>
              <div className='bg-slate-200 transition-all flex items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16'>
                {item.icons}
              </div>
              <div className='ml-2 md:ml-4'>
                {' '}
                <h4 className='text-light font-semibold text-lg md:text-xl uppercase'>
                  {item.title}
                </h4>
                <p className='font-light text-tersier text-sm md:text-base group-hover:text-light capitalize'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardContact() {
  const contactData = [
    {
      icons: <BsFillTelephoneFill className='text-xl text-light' />,
      title: ' 0896 1990 23243',
      description: 'Hubungi via Whatsapp',
    },
    {
      icons: <BsWhatsapp className='text-xl text-light' />,
      title: ' 0896 1990 23243',
      description: 'Hubungi via Whatsapp',
    },
    {
      icons: <BsFillTelephoneFill className='text-xl text-light' />,
      title: ' 0896 1990 23243',
      description: 'Hubungi via Whatsapp',
    },
    {
      icons: <BsFillTelephoneFill className='text-xl text-light' />,
      title: ' 0896 1990 23243',
      description: 'Hubungi via Whatsapp',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-6 py-24 md:pt-36 md:px-16'>
      <Heading
        tagline={'IdeaTech Digital'}
        serviceTagline={'Kontak Kami'}
        description={
          'Konsultasikan kebutuhan Anda bersama kami, diskusi kapanpun dan dimanapun kami siap membantu Anda!'
        }
      />
      <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4 mt-6 md:mt-12'>
        {contactData.map((item, index) => (
          <CustomButton
            key={index}
            type='link'
            isExternal
            target='_blank'
            href='https://wwww.facebook.com'
            className='group transition-all'>
            <div className='bg-tersier px-6 py-3 rounded-lg shadow-md flex flex-col items-center justify-center'>
              <div className='rounded-full w-11 h-11 bg-primary flex items-center justify-center'>
                {item.icons}
              </div>
              <p className='text-slate-900 my-1 md:text-2xl text-xl font-semibold'>
                {item.title}
              </p>
              <p className='text-slate-800 font-light text-base group-hover:text-blue-800 transition-all'>
                {item.description}
              </p>
            </div>
          </CustomButton>
        ))}
      </div>
    </section>
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
