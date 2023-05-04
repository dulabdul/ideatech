import React from 'react';
import heroImg from '../../assets/images/design/testi.png';

import {
  Hero,
  Layout,
  PortofolioService,
  Price,
  CardTestimonialRounded,
} from '@/components';
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
