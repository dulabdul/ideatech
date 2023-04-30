import Image from 'next/image';
import React from 'react';
import dashed from '../../assets/images/design/dashed.png';
import { Card } from '..';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';

export default function WhyChoseUs() {
  const data = [
    {
      icons: <BsFillPersonFill className='text-xl text-light mr-2' />,
      title: 'Team Profesional',
      description:
        'Dikerjakan oleh Team Berpengalaman & Profesional dalam pembuatan website aplikasi serta digital marketing.',
    },
    {
      icons: <FaRegMoneyBillAlt className='text-xl text-light mr-2' />,
      title: 'Harga Terjangkau',
      description:
        'Kami pastikan biaya terjangkau yang Anda keluarkan adalah nilai investasi tepat untuk perkembangan bisnis Anda.',
    },
    {
      icons: <MdOutlineSecurity className='text-xl text-light mr-2' />,
      title: 'Keamanan Terjamin',
      description:
        'Keamanan data menjadi prioritas utama bagi kami demi menjaga kepercayaan yang diberikan pelanggan.',
    },
    {
      icons: <BiSupport className='text-xl text-light mr-2' />,
      title: 'Team Support 24/7',
      description:
        'Kami berkomitmen untuk memberikan ON-Time Support Fast Respon ketika Anda butuh bantuan.',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-6 py-16 md:py-12 md:px-12'>
      <div className='w-full h-full mx-auto container'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-light font-semibold text-2xl md:text-4xl'>
            Kenapa Memilih Kami
          </h1>
          <Image
            src={dashed}
            width={204}
            height={8}
            alt='dashed text'
          />
          <p className='text-tersier font-normal text-2xl mt-4'>
            Alasan ideatech Digital Mitra Bisnis Tepat untuk Anda
          </p>
          <div className='w-full h-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-12'>
            {data.map((item, index) => (
              <Card
                key={index}
                icons={item.icons}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
