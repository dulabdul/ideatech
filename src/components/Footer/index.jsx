import React from 'react';
import { CustomButton } from '..';
import {
  BsFillTelephoneFill,
  BsWhatsapp,
  BsFillPatchQuestionFill,
} from 'react-icons/bs';
import { FaMapMarker } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiDocumentText } from 'react-icons/hi';
import { AiFillInstagram } from 'react-icons/ai';
export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  const menuLink = [
    {
      title: 'informasi kontak',
      menu: [
        {
          name: 'Whatsapps',
          contain: '+628122323',
          url: '/',
          icons: <BsWhatsapp className='text-2xl' />,
        },
        {
          name: 'Location',
          contain: 'DKI Jakarta, Indonesia',
          url: '',
          icons: <FaMapMarker className='text-2xl' />,
        },
      ],
    },
    {
      title: 'sosial media',
      menu: [
        {
          name: 'instragam',
          contain: 'instragam',
          url: '/',
          icons: <AiFillInstagram className='text-2xl' />,
        },
      ],
    },
    {
      title: 'menu lainnya',
      menu: [
        {
          name: 'program reseller',
          contain: 'Program Reseller',
          url: '/',
          icons: <GiReceiveMoney className='text-2xl' />,
        },
        {
          name: 'Persyaratan Layanan',
          contain: 'Persyaratan Layanan',
          url: '/',
          icons: <HiDocumentText className='text-2xl' />,
        },
        {
          name: 'FAQ',
          contain: 'FAQ',
          url: '/',
          icons: <BsFillPatchQuestionFill className='text-2xl' />,
        },
      ],
    },
  ];
  return (
    <footer className='w-full h-full overflow-hidden px-6 pt-16 pb-8 md:px-12 md:pt-40'>
      <div className='mx-auto container'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-light font-semibold text-2xl md:text-5xl text-center leading-relaxed'>
            Giliran Anda Membuktikan <br /> Kualitas Jasa Kami
          </h1>
          <p className='text-tersier font-light text-base text-center leading-relaxed'>
            Konsultasikan kebutuhan digitalisasi bisnis anda kepada tim kami
            untuk <br /> mendapatkan penawaran harga yang sesuai anggaran
            belanja bisnis Anda.
          </p>
          <div>
            <CustomButton
              type='link'
              target='_blank'
              isExternal
              isFlex
              isPrimary
              isRounded
              className='text-light button h-12 md:h-[60px] text-xl whitespace-nowrap md:text-2xl hover:bg-transparent hover:border hover:border-primary items-center'>
              <BsFillTelephoneFill className='text-xl mr-2' /> Konsultasi Gratis
              Sekarang
            </CustomButton>
          </div>

          <hr className='w-full border-tersier my-16' />
        </div>
        <div className='w-full overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-2 justify-between'>
          <div>
            <h3 className='text-light font-semibold text-3xl'>IdeaTech</h3>
            <p className='text-tersier font-light text-sm mt-2 leading-relaxed'>
              Kodeight Digital adalah sebuah brand digital agency bagian dari
              PT. Inditama yang menyediakan layanan jasa pengembangan website
              aplikasi, branding, serta digital marketing.
            </p>
          </div>
          {menuLink.map((item, index) => (
            <div key={index}>
              <h3 className='text-light font-semibold text-3xl capitalize'>
                {item.title}
              </h3>
              <div className='flex flex-col items-start justify-center gap-y-4 gap-x-2 mt-4'>
                {item.menu.map((list, index) => (
                  <CustomButton
                    key={index}
                    type='link'
                    isExternal
                    target='_blank'
                    isFlex
                    href={list.url}
                    className='text-light font-normal text-base items-center gap-x-3 capitalize hover:text-primary hover:underline'>
                    {' '}
                    {list.icons} {list.contain}
                  </CustomButton>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className='w-full border-tersier mt-16' />
        <p className='text-tersier text-sm font-light text-center mt-8'>
          Copyright {year} © IdeaTech. All Right Reversed
        </p>
      </div>
    </footer>
  );
}
