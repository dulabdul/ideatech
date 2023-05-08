import React, { useState, useEffect, useMemo } from 'react';

import useData from '@/hooks';
import { CardPortfolio, Heading } from '..';
import Link from 'next/link';
import { FiArrowRightCircle } from 'react-icons/fi';
export default function PortofolioService({
  headTagline,
  tagline,
  taglineDescription,
  type,
}) {
  const { data, isError, isLoading } = useData();
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(type);

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
      <div className='mx-auto container'>
        <Heading
          tagline={headTagline}
          serviceTagline={tagline}
          description={taglineDescription}
        />

        <div className='portoflio_section mt-12 md:mt-16 flex items-center justify-between gap-y-4 md:gap-y-0 gap-x-4 overflow-x-auto'>
          <button
            type='button'
            value={type}
            className={`px-6 py-1 text-start text-light capitalize border border-primary ring-1 hover:bg-primary ${
              selectedCategory === type ? 'bg-primary' : ''
            }`}>
            {type}
          </button>
          <Link
            href='/portfolio'
            className='flex text-light underlinex md:justify-end hover:text-primary items-center mt-4 md:mt-0'>
            Lihat semua portofolio{' '}
            <FiArrowRightCircle className='ml-2 text-xl' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mt-8'>
          {selectedCategory === type
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
            : ''}
        </div>
      </div>
    </section>
  );
}
