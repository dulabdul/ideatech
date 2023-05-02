import React, { useState, useMemo, useEffect } from 'react';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';
import useData from '@/hooks';
import { CardPortfolio, CustomButton } from '..';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Dropdown } from 'flowbite-react';
import gradientWhiteBG from '../../assets/images/design/g-white.png';
import gradient56 from '../../assets/images/design/rectangle-56.png';
import gradient60 from '../../assets/images/design/rectangle-60.png';
export default function Portfolio({ deviceType }) {
  const { data, isError, isLoading } = useData();
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('website');
  const [windowWidth, setWindoWidth] = useState(null);
  useEffect(() => {
    setWindoWidth(window.screen.width);
    setPortfolioData(data?.categories);
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [data]);
  function filteredProject() {
    if (!selectedCategory) {
      return portfolioData;
    }
    return portfolioData?.filter((item) => item.name === selectedCategory);
  }
  let filterList = useMemo(filteredProject, [selectedCategory, portfolioData]);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <section className='w-full h-full overflow-hidden px-6 py-12 md:px-12 md:py-16'>
      <div className='container mx-auto relative z-10 md:static'>
        <div className='flex relative z-10 md:static flex-col items-center justify-center'>
          <h1 className='text-light font-semibold text-2xl md:text-4xl'>
            Portofolio Kami
          </h1>
          <Image
            src={dashed}
            width={204}
            height={8}
            alt='dashed text'
          />
          <h3 className='text-primary font-normal text-xl md:text-3xl my-3'>
            Project Yang Pernah Dikerjakan{' '}
            <span className='text-light font-semibold'>IdeaTech</span>
          </h3>
          <p className='text-tersier font-light text-base'>
            Berikut beberapa hasil pekerjaan kami sebagai bahan pertimbangan
            Anda memilih jasa kami.
          </p>
          <Image
            src={gradient56}
            width={634}
            height={634}
            alt='gradient-one'
            className='absolute z-0'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:flex-nowrap relative z-10 items-center justify-between py-16 md:py-12'>
          <div className='portoflio_section flex items-center justify-start gap-y-4 md:gap-y-0 gap-x-4 overflow-x-auto'>
            {windowWidth < 576 ? (
              <Dropdown
                inline={true}
                className='text-light'
                label={selectedCategory}
                dismissOnClick={false}>
                {portfolioData?.map((item, index) => (
                  <Dropdown.Item
                    className='capitalize'
                    key={index}>
                    <button
                      type='button'
                      value={item.name}
                      className='capitalize'
                      onClick={handleCategoryChange}>
                      {item.name}
                    </button>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ) : (
              portfolioData?.map((item, index) => (
                <div key={index}>
                  <button
                    type='button'
                    value={item.name}
                    onClick={handleCategoryChange}
                    className={`px-6 py-1 text-start text-light capitalize border border-primary ring-1 hover:bg-primary ${
                      selectedCategory === item.name ? 'bg-primary' : ''
                    }`}>
                    {item.name}
                  </button>
                </div>
              ))
            )}
          </div>
          <CustomButton
            type='link'
            isExternal
            isFlex
            target='_blank'
            href='https://facebook.com'
            className='text-light underlinex md:justify-end hover:text-primary items-center mt-4 md:mt-0'>
            Lihat semua portofolio{' '}
            <FiArrowRightCircle className='ml-2 text-xl' />
          </CustomButton>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center'>
          {selectedCategory === 'website'
            ? filterList?.map((item) => {
                return item.projects.length === 0
                  ? 'No data'
                  : item.projects.slice(0, 4).map((project) => (
                      <CardPortfolio
                        key={project.id}
                        title={project.title}
                        image={project.imageUrl}
                        url={project.url}
                      />
                    ));
              })
            : filterList?.map((item) => {
                return item.projects.length === 0
                  ? 'No Data'
                  : item.projects.slice(0, 4).map((project) => (
                      <CardPortfolio
                        key={project.id}
                        title={project.title}
                        image={project.imageUrl}
                        url={project.url}
                      />
                    ));
              })}
        </div>
        <Image
          src={gradientWhiteBG}
          width={634}
          height={634}
          alt='gradient-one'
          className='absolute z-0'
        />
      </div>
    </section>
  );
}
