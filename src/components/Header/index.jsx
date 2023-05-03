import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import styles from './Header.module.css';
import CustomButton from '../Button';
import Link from 'next/link';
export default function Header() {
  const menuList = [
    {
      name: 'Home',
      isDropdown: false,
      destination: '/',
    },
    {
      name: 'Profile',
      isDropdown: false,
      destination: '/profile',
    },
    {
      name: 'Layanan',
      isDropdown: true,
      destination: '/layanan',
      dropdownContent: [
        {
          title: 'Website Development',
          destionation: '/layanan/website',
        },
        {
          title: 'Digital Marketing',
          destionation: '/layanan/digital-marketing',
        },
        {
          title: 'Branding & Content Creation',
          destionation: '/layanan/branding-content-creation',
        },
      ],
      destination: {},
    },
    {
      name: 'Portofolio',
      isDropdown: false,

      destination: '/portfolio',
    },
    {
      name: 'Kontak',
      isDropdown: false,
      destination: '/kontak',
    },
  ];
  const [scrolledNav, setScrolledNav] = useState(null);

  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setScrolledNav('scrolled') : setScrolledNav('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <header className={`w-full z-50 fixed ${scrolledNav}`}>
      <div className='container mx-auto'>
        <Navbar
          fluid={true}
          rounded={true}>
          <Link
            href='/'
            className='flex items-center'>
            <Image
              width={64}
              height={64}
              style={{ width: 'auto', height: 'auto' }}
              src='/example.png'
              alt='Tidea Logo'
            />
          </Link>
          <div className='flex md:order-2 gap-2'>
            <CustomButton
              href='#'
              type='link'
              isExternal
              target='_blank'
              isPrimary
              isRoundedFull
              isFlex
              className='button text-white items-center mr-2 md:mr-0 hover:bg-transparent drop-shadow-[0_10px_57px_rgba(157,255,179,0.35)] hover:border hover:border-primary'>
              <FiDownload className='mr-1 text-lg' /> Minta Penawaran
            </CustomButton>

            <Navbar.Toggle className={styles.toggle} />
          </div>

          <Navbar.Collapse className='px-5 py-1 ul'>
            {menuList.map((item, index) =>
              item.isDropdown ? (
                <li
                  key={index}
                  className='mt-2 text-tersier hover:text-primary transition-all'>
                  <Dropdown
                    className='transition-all duration-400'
                    inline={true}
                    label={item.name}>
                    {item.dropdownContent.map((dropdown, index) => (
                      <Dropdown.Item key={index}>
                        <Link href={dropdown.destionation}>
                          {dropdown.title}
                        </Link>
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </li>
              ) : (
                <li
                  key={index}
                  className='mt-2'>
                  <Link
                    type='link'
                    href={item.destination}
                    className='text-tersier hover:text-primary transition-all'>
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
