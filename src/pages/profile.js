import { Layout, About, Client, TestimonialPages } from '@/components';

export default function Profile() {
  return (
    <>
      <Layout>
        <About />
        <Client />
        <TestimonialPages />
      </Layout>
    </>
  );
}
