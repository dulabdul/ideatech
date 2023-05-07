import {
  Layout,
  Hero,
  Client,
  WhyChoseUs,
  Service,
  Portfolio,
  Testimonial,
} from '@/components';
import heroImg from '../assets/images/design/hero.png';
export default function Home() {
  const heroData = {
    headline:
      'Perusahaan <span>Jasa Website</span>,<span>Branding</span>, dan <span>Digital Marketing</span>',
    imageHero: heroImg,
    type: 'ideatech',
    description:
      'Tingkatkan nilai dan penjualan bisnis anda melalui digital marketing yang dikerjakan secara profesional.',
    buttonCTA: false,
  };
  const taglineClient = {
    headTagline: 'Trusted By',
    tagline: '',
    taglineDescription:
      'Dipercaya oleh Ribuan Pebisnis, Instansi, dan Perusahaan Ternama.',
  };
  return (
    <>
      <Layout>
        <Hero
          headline={heroData.headline}
          imageHero={heroImg}
          type={heroData.type}
          description={heroData.description}
          buttonCTA={heroData.buttonCTA}
        />
        <Client
          tagline={taglineClient.headTagline}
          taglineDescription={taglineClient.taglineDescription}
        />
        <WhyChoseUs />
        <Service />
        <Portfolio />
        <Testimonial />
      </Layout>
    </>
  );
}
