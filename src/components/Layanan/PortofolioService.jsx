import React, { useState, useEffect, useMemo } from 'react';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';
import useData from '@/hooks';
import { CardPortfolio, Heading } from '..';

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
        <div className='grid grid-cols-1 md:grid-cols-2 md:flex-nowrap relative z-10 items-center justify-between pt-12'>
          <div className='portoflio_section flex items-center justify-start gap-y-4 md:gap-y-0 gap-x-4 overflow-x-auto'>
            <button
              type='button'
              value={type}
              className={`px-6 py-1 text-start text-light capitalize border border-primary ring-1 hover:bg-primary ${
                selectedCategory === type ? 'bg-primary' : ''
              }`}>
              {type}
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mt-8'>
          {selectedCategory === type
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
      </div>
    </section>
  );
}
