import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bcaLogo from '../../assets/images/client/bca.png';
import wikaLogo from '../../assets/images/client/wika.png';
import muiLogo from '../../assets/images/client/mui.png';
import pmiLogo from '../../assets/images/client/pmi.png';
import century21Logo from '../../assets/images/client/century21.png';
import ypkpLogo from '../../assets/images/client/ypkp.png';
import bjsLogo from '../../assets/images/client/bjs.png';
import diramLogo from '../../assets/images/client/diram.png';
import styles from './carousel.module.css';

export default function CarouselSlider({ deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 30,
    },
  };
  const images = [
    {
      name: 'Logo BCA',
      src: bcaLogo,
    },
    {
      name: 'Logo Wika',
      src: wikaLogo,
    },
    {
      name: 'Logo MUI',
      src: muiLogo,
    },
    {
      name: 'Logo PMI',
      src: pmiLogo,
    },
    {
      name: 'Logo Century21',
      src: century21Logo,
    },
    {
      name: 'Logo YPKP',
      src: ypkpLogo,
    },
    {
      name: 'Logo BJS',
      src: bjsLogo,
    },
    {
      name: 'Logo Diram',
      src: diramLogo,
    },
  ];
  return (
    <>
      <Carousel
        infinite={true}
        ssr
        partialVisbile={false}
        deviceType={deviceType}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass={styles.imageItem}>
        {images.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.name}
            style={{ width: '100%', height: '100%', cursor: 'pointer' }}
            draggable={false}
          />
        ))}
      </Carousel>
    </>
  );
}
