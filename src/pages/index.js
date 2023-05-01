import {
  Layout,
  Hero,
  Client,
  WhyChoseUs,
  Service,
  Portfolio,
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
      </Layout>
    </>
  );
}
