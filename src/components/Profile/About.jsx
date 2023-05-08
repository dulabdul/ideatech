import React from 'react';

export default function About() {
  return (
    <section className='w-full h-full overflow-hidden px-6 py-12 md:px-12 md:py-28'>
      <div className='mx-auto container'>
        <h1 className='text-light font-semibold text-2xl md:text-4xl text-center mt-16'>
          Mengenal Kami Membuat Anda Percaya
        </h1>
        <div className='w-full grid grid-cols-1 items-center justify-center md:grid-cols-2 py-12'>
          <div className='flex flex-col items-start gap-y-6 pb-8'>
            <h6 className='text-light font-semibold text-2xl md:text-3xl mt-6'>
              TechIdeationHub
            </h6>
            <p className='text-tersier font-light text-base'>
              Techideationhub adalah agensi digital yang menyediakan layanan
              pengembangan situs web dan pemasaran digital bagi bisnis kecil dan
              menengah di seluruh dunia. Kami berkomitmen untuk memberikan
              solusi digital yang inovatif dan efektif untuk klien kami, dengan
              pendekatan yang holistik dan teknologi terbaru.
            </p>
            <p className='text-tersier font-light text-base'>
              Kami memahami betapa pentingnya visibilitas online bagi bisnis
              saat ini, dan kami berusaha untuk membantu klien kami mencapai
              hasil yang optimal melalui layanan kami. Kami juga selalu berupaya
              untuk terus belajar dan berkembang sebagai agensi digital
              terdepan, agar bisa memberikan layanan terbaik bagi klien kami,
            </p>
            <p className='text-tersier font-light text-base'>
              Jadi, jika Anda mencari mitra digital yang dapat membantu bisnis
              Anda tumbuh dan berhasil secara online, Techideationhub adalah
              pilihan yang tepat. Hubungi kami untuk diskusi lebih lanjut!
            </p>
          </div>
          <div className='bg-tersier p-8 rounded-xl shadow-md '>
            <div className='flex flex-col items-start justify-start gap-y-4'>
              <h6 className='text-light font-semibold text-xl md:text-2xl'>
                Visi Perusahaan
              </h6>
              <p className='text-light font-light text-base'>
                Menjadi mitra digital terdepan bagi bisnis kecil dan menengah di
                seluruh dunia, dengan memberikan solusi digital inovatif dan
                efektif untuk membantu klien kami tumbuh dan sukses secara
                online.
              </p>
              <h6 className='text-light font-semibold text-xl md:text-2xl'>
                Misi Perusahaan
              </h6>
              <p className='text-light font-light text-base'>
                Memberikan layanan pengembangan situs web dan pemasaran digital
                berkualitas tinggi, dengan fokus pada hasil , serta memberikan
                pengalaman pelanggan yang unggul dan terpercaya. Kami bertujuan
                untuk selalu mengikuti perkembangan terbaru dalam teknologi dan
                strategi digital, dan memberikan layanan yang terbaik dan
                terdepan di industri kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
