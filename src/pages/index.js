import {
  Layout,
  Hero,
  Client,
  WhyChoseUs,
  Service,
  Portfolio,
  Testimonial,
} from '@/components';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Client />
        <WhyChoseUs />
        <Service />
        <Portfolio />
        <Testimonial />
      </Layout>
    </>
  );
}
