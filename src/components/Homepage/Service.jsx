import React from 'react';
import dashed from '../../assets/images/design/dashed.png';
import Image from 'next/image';
import service1 from '../../assets/images/design/service-1.png';
import service2 from '../../assets/images/design/service-2.png';
import service3 from '../../assets/images/design/service-3.png';
import { CardService } from '..';
export default function Service() {
  const data = [
    {
      imageUrl: service1,
      title: 'Website Design & Development',
      description:
        'Pengembangan website menggunakan teknologi wordpress maupun custom sesuai kebutuhan bisnis Anda untuk sistem informasi, administrasi, serta promosi.',
      url: '/',
    },
    {
      imageUrl: service2,
      title: 'Branding, Design Promotion & Content Creation',
      description:
        'Pembuatan desain seperti Logo, Stationary, Marketing Kit Design Social Media Content Design, serta Photo & Videography untuk kebutuhan branding maupun promosi.',
      url: '/',
    },
    {
      imageUrl: service3,
      title: 'SEO, Digital Marketing & Advertising',
      description:
        'Layanan jasa pemasaran melalui media online seperti beriklan di Google, Facebook, Instagram, Tiktok, Marketplace, serta Optimasi peringkat Website di Google.',
      url: '/',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-6 py-16 md:px-12 md:py-12'>
      <div className='mx-auto container'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-light font-semibold text-2xl md:text-4xl'>
            Layanan Kami
          </h1>
          <Image
            src={dashed}
            width={204}
            height={8}
            alt='dashed text'
          />
          <h4 className='text-primary font-semibold text-3xl my-6 md:my-4'>
            Solusi Yang Ditawarkan{' '}
            <span className='text-light font-bold'>IdeaTech Digital</span> Untuk
            Bisnis Anda
          </h4>
          <p className='text-tersier font-light text-base'>
            Layanan Lengkap untuk menunjang transformasi bisnis Anda di Era
            Digital
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-12 md:gap-4 py-12'>
            {data.map((item, index) => (
              <CardService
                key={index}
                images={item.imageUrl}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
