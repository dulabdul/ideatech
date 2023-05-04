import {
  CardServiceReason,
  Hero,
  Layout,
  PortofolioService,
  TestimonialPages,
  Price,
  CardTestimonialRounded,
} from '@/components';
import React from 'react';
import heroImg from '../../assets/images/design/hero.png';
import serviceReason1 from '../../assets/images/design/service-reason-1.png';
import serviceReason2 from '../../assets/images/design/service-reason-2.gif';
import serviceReason3 from '../../assets/images/design/service-reason-3.png';
import serviceReason4 from '../../assets/images/design/service-reason-4.png';
import serviceReason5 from '../../assets/images/design/service-reason-5.png';

export default function Website() {
  const heroData = {
    headline: 'Jasa Pembuatan <span>Website</span>',
    imageHero: heroImg,
    type: 'Jasa Website',
    description:
      'Kodeight Digital berkomitmen mengembangkan website aplikasi dengan kualitas terbaik untuk meningkatkan keuntungan serta nilai perusahaan Anda.',
    buttonCTA: true,
  };
  const taglineDataServiceReason = {
    headTagline: 'Kenapa Memilih Kami?',
    tagline: 'Website Berkualitas, Bisnis Anda Naik Kelas',
    taglineDescription:
      'Sederet fitur berkelas tersedia di tiap paket jasa pembuatan website.',
  };
  const taglineDataPortfolio = {
    headTagline: 'Portofolio Kami',
    tagline: 'Paket Harga Jasa Pembuatan Website',
    taglineDescription:
      'Berikut beberapa hasil pekerjaan kami sebagai bahan pertimbangan Anda memilih jasa kami.',
  };
  const serviceData = [
    {
      imageUrl: serviceReason1,
      title: 'hosting terbaik',
      description:
        ' Kami sediakan Server cepat dengan keamanan unggulan untuk website Anda. Dimana hal tersebut berpengaruh pada kenyamanan pengunjungketika mengakses website Anda, dan secara tidak langsung website bisa meningkatkan penjualan.',
    },
    {
      imageUrl: serviceReason2,
      title: 'mudah digunakan',
      description:
        'Kelola website lebih mudah dengan fitur drag & drop. Anda bisa dengan mudah untuk melakukan customisasi page di website meski Anda tidak memiliki keahlian di bidang coding sekalipun.',
    },
    {
      imageUrl: serviceReason3,
      title: 'Website Responsive',
      description:
        'Website tetap rapi saat diakses di komputer, tablet, maupun handphone. Responsive Web Design meminimalkan action user seperti Zoom In/Out & Scroll Kanan/Kiri dalam pembacaan konten.',
    },
    {
      imageUrl: serviceReason4,
      title: 'SEO Friendly',
      description:
        'Semua website yang kami buat sudah mengikuti kaidah SEO. Dimana website memiliki kesempatan untuk muncul di halaman satu Google. Memperbesar peluang website Anda dikunjungi oleh konsumen tertarget.',
    },
    {
      imageUrl: serviceReason5,
      title: 'Garansi Seumur Hidup',
      description:
        'Selama Anda masih menggunakan layanan di Kodeight kami pastikan website Anda selalu optimal dengan jaminan garansi dan maintenance.',
    },
  ];
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
        <CardServiceReason
          data={serviceData}
          headTagline={taglineDataServiceReason.headTagline}
          tagline={taglineDataServiceReason.tagline}
          taglineDescription={taglineDataServiceReason.taglineDescription}
        />
        <PortofolioService
          headTagline={taglineDataPortfolio.headTagline}
          tagline={taglineDataPortfolio.tagline}
          taglineDescription={taglineDataPortfolio.taglineDescription}
        />
        <Price />
        <CardTestimonialRounded
          headTagline={taglineDataCardProfile.headTagline}
          tagline={taglineDataCardProfile.tagline}
          taglineDescription={taglineDataCardProfile.taglineDescription}
        />
      </Layout>
    </>
  );
}
