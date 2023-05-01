import React, { useState, useMemo, useEffect } from 'react';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';
import useData from '@/hooks';
import { CardPortfolio, CustomButton } from '..';
import { FiArrowRightCircle } from 'react-icons/fi';
export default function Portfolio() {
  const { data, isError, isLoading } = useData();
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('website');
  useEffect(() => {
    setPortfolioData(data?.categories);
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
  console.log(selectedCategory);
  return (
    <section className='w-full h-full overflow-hidden px-6 py-12 md:px-12 md:py-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
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
        </div>
        <div className='flex flex-row items-center justify-between py-16 md:py-12'>
          <div className='flex gap-x-4'>
            {portfolioData?.map((item, index) => (
              <button
                key={index}
                type='button'
                value={item.name}
                onClick={handleCategoryChange}
                className={`button text-light capitalize border border-primary ring-1 hover:bg-primary ${
                  selectedCategory === item.name ? 'bg-primary' : ''
                }`}>
                {item.name}
              </button>
            ))}
          </div>
          <CustomButton
            type='link'
            isExternal
            isFlex
            target='_blank'
            href='https://facebook.com'
            className='text-light underline hover:text-blue-500 items-center'>
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
      </div>
    </section>
  );
}
