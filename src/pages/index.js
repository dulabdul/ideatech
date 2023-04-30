import { Layout, Hero, Client, WhyChoseUs, Service } from '@/components';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Client />
        <WhyChoseUs />
        <Service />
      </Layout>
    </>
  );
}
