import React from 'react';
import heroImg from '../../assets/images/design/testi.png';
import { AiOutlineSolution } from 'react-icons/ai';
import {
  Hero,
  Layout,
  PortofolioService,
  Price,
  CardTestimonialRounded,
  CardServicePriority,
} from '@/components';
import { CardServiceReasonTwo } from '@/components/Card';
export default function DigitalMarketing() {
  const heroData = {
    headline:
      'Jasa Digital <span>Marketing Handal</span> Dengan Tim Profesional',
    imageHero: heroImg,
    type: 'Digital Marketing',
    description:
      'Membantu Anda mendapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda.',
    buttonCTA: true,
  };
  const type = {
    typeTagline: 'digital marketing',
    typeDescription:
      'Digital marketing dapat memberikan manfaat yang signifikan untuk bisnis Anda',
  };
  const taglineDataPortfolio = {
    headTagline: 'Portofolio Kami',
    tagline: 'Project Yang Pernah Dikerjakan IdeaTech Digital',
    taglineDescription:
      'Berikut beberapa hasil pekerjaan kami sebagai bahan pertimbangan Anda memilih jasa kami.',
  };
  const taglineDataCardProfile = {
    headTagline: 'Testimonial Mitra Bisnis Kami',
    tagline: '',
    taglineDescription:
      'Pendapat klien kami yang puas dengan pelayanan yang diberikan oleh Kodeight Digital. Sekarang adalah giliran Anda untuk menjadi seperti mereka dengan menggunakan layanan yang kami tawarkan.',
  };
  const dataReasonTwo = [
    {
      heading: 'Bisa Terhubung dengan Konsumen',
      description:
        'Mayoritas orang zaman sekarang mengandalkan internet untuk berbagai keperluan, praktis nyaris seharian berada di dunia maya. Pebisnis yang melakukan promosi online akan lebih mudah terhubung ke konsumen. Sebab pemasaran dilakukan lewat internet, entah itu dengan sosial media maupun dengan website.',
    },
    {
      heading: 'Bisa Terhubung dengan Konsumen',
      description:
        'Mayoritas orang zaman sekarang mengandalkan internet untuk berbagai keperluan, praktis nyaris seharian berada di dunia maya. Pebisnis yang melakukan promosi online akan lebih mudah terhubung ke konsumen. Sebab pemasaran dilakukan lewat internet, entah itu dengan sosial media maupun dengan website.',
    },
    {
      heading: 'Bisa Terhubung dengan Konsumen',
      description:
        'Mayoritas orang zaman sekarang mengandalkan internet untuk berbagai keperluan, praktis nyaris seharian berada di dunia maya. Pebisnis yang melakukan promosi online akan lebih mudah terhubung ke konsumen. Sebab pemasaran dilakukan lewat internet, entah itu dengan sosial media maupun dengan website.',
    },
    {
      heading: 'Bisa Terhubung dengan Konsumen',
      description:
        'Mayoritas orang zaman sekarang mengandalkan internet untuk berbagai keperluan, praktis nyaris seharian berada di dunia maya. Pebisnis yang melakukan promosi online akan lebih mudah terhubung ke konsumen. Sebab pemasaran dilakukan lewat internet, entah itu dengan sosial media maupun dengan website.',
    },
    {
      heading: 'Bisa Terhubung dengan Konsumen',
      description:
        'Mayoritas orang zaman sekarang mengandalkan internet untuk berbagai keperluan, praktis nyaris seharian berada di dunia maya. Pebisnis yang melakukan promosi online akan lebih mudah terhubung ke konsumen. Sebab pemasaran dilakukan lewat internet, entah itu dengan sosial media maupun dengan website.',
    },
    {
      heading: 'Bisa Terhubung dengan Konsumen',
      description:
        'Mayoritas orang zaman sekarang mengandalkan internet untuk berbagai keperluan, praktis nyaris seharian berada di dunia maya. Pebisnis yang melakukan promosi online akan lebih mudah terhubung ke konsumen. Sebab pemasaran dilakukan lewat internet, entah itu dengan sosial media maupun dengan website.',
    },
  ];
  const dataServicePriority = [
    {
      icons: <AiOutlineSolution className='text-2xl md:text-4xl text-black' />,
      title: 'SEO',
      description: 'Meningkatkan peringkat',
    },
    {
      icons: <AiOutlineSolution className='text-2xl md:text-4xl text-black' />,
      title: 'PPC (Pay-Per-Click)',
      description: 'Iklan terarah',
    },
    {
      icons: <AiOutlineSolution className='text-2xl md:text-4xl text-black' />,
      title: 'Social Media Marketing ',
      description: 'Meningkatkan engagement',
    },
    {
      icons: <AiOutlineSolution className='text-2xl md:text-4xl text-black' />,
      title: 'Email Marketing',
      description: 'Meningkatkan konversi',
    },
    {
      icons: <AiOutlineSolution className='text-2xl md:text-4xl text-black' />,
      title: 'content marketing',
      description: 'Konten berkualitas',
    },
    {
      icons: <AiOutlineSolution className='text-2xl md:text-4xl text-black' />,
      title: 'Design Ekslusif',
      description: 'Desain lebih profesional.',
    },
  ];
  return (
    <>
      <Layout>
        <Hero
          headline={heroData.headline}
          imageHero={heroData.imageHero}
          type={heroData.type}
          description={heroData.description}
          buttonCTA={heroData.buttonCTA}
        />
        <CardServiceReasonTwo
          data={dataReasonTwo}
          type={type.typeTagline}
          description={type.typeDescription}
        />
        <CardServicePriority
          data={dataServicePriority}
          type={type.typeTagline}
        />
        <PortofolioService
          type={'digital marketing'}
          headTagline={taglineDataPortfolio.headTagline}
          tagline={taglineDataPortfolio.tagline}
          taglineDescription={taglineDataPortfolio.taglineDescription}
        />
        <Price
          type={'digital marketing'}
          initCategory={'google ads'}
        />
        <CardTestimonialRounded
          headTagline={taglineDataCardProfile.headTagline}
          tagline={taglineDataCardProfile.tagline}
          taglineDescription={taglineDataCardProfile.taglineDescription}
        />
      </Layout>
    </>
  );
}
