import React, { useState, useEffect, useMemo } from 'react';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';
import useData from '@/hooks';
import { CardPortfolio } from '..';

export default function PortofolioService() {
  const { data, isError, isLoading } = useData();
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('website');

  useEffect(() => {
    setPortfolioData(data?.categories);
  }, [data?.categories]);
  function filteredProject() {
    if (!selectedCategory) {
      return portfolioData;
    }
    return portfolioData?.filter((item) => item.name === selectedCategory);
  }
  let filterList = useMemo(filteredProject, [selectedCategory, portfolioData]);

  return (
    <section className='w-full h-full overflow-hidden px-6 py-12 md:px-12 md:py-16'>
      <div className='flex flex-col items-center justify-center gap-y-2 text-center'>
        <h1 className='text-light font-normal text-xl md:text-2xl capitalize'>
          Portofolio Kami
        </h1>
        <h2 className='text-primary font-bold text-2xl md:text-4xl capitalize'>
          Paket Harga Jasa Pembuatan Website
        </h2>

        <p className='text-tersier font-light text-base'>
          Berikut beberapa hasil pekerjaan kami sebagai bahan pertimbangan Anda
          memilih jasa kami.
        </p>
        <Image
          src={dashed}
          width={204}
          height={8}
          alt='dashed text'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:flex-nowrap relative z-10 items-center justify-between pt-12'>
        <div className='portoflio_section flex items-center justify-start gap-y-4 md:gap-y-0 gap-x-4 overflow-x-auto'>
          <button
            type='button'
            value='website'
            className={`px-6 py-1 text-start text-light capitalize border border-primary ring-1 hover:bg-primary ${
              selectedCategory === 'website' ? 'bg-primary' : ''
            }`}>
            website
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mt-8'>
        {selectedCategory === 'website'
          ? filterList?.map((item) => {
              return item.projects.length === 0
                ? 'No data'
                : item.projects.map((project) => (
                    <CardPortfolio
                      key={project.id}
                      title={project.title}
                      image={project.imageUrl}
                      url={project.url}
                    />
                  ));
            })
          : ''}
      </div>
    </section>
  );
}
