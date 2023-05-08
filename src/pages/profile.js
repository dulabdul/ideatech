import { Layout, About, Client, CardTestimonialRounded } from '@/components';

export default function Profile() {
  const taglineDataCardProfile = {
    headTagline: 'Testimonial Mitra Bisnis Kami',
    tagline: '',
    taglineDescription:
      'Pendapat klien kami yang puas dengan pelayanan yang diberikan oleh Kodeight Digital. Sekarang adalah giliran Anda untuk menjadi seperti mereka dengan menggunakan layanan yang kami tawarkan.',
  };
  const taglineDataClient = {
    headTagline: 'Trusted By',
    tagline: '',
    taglineDescription:
      'Dipercaya oleh Ribuan Pebisnis, Instansi, dan Perusahaan Ternama',
  };
  return (
    <>
      <Layout>
        <About />
        <Client
          headTagline={taglineDataClient.headTagline}
          tagline={taglineDataClient.tagline}
          taglineDescription={taglineDataClient.taglineDescription}
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
