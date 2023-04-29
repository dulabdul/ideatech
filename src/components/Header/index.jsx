import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import styles from './Header.module.css';
import CustomButton from '../Button';
export default function Header() {
  const menuList = [
    {
      name: 'Home',
      isDropdown: false,
      destination: {},
    },
    {
      name: 'Profile',
      isDropdown: false,
      destination: {},
    },
    {
      name: 'Layanan',
      isDropdown: true,
      dropdownContent: [
        {
          title: 'Website Development',
          destionation: {},
        },
        {
          title: 'Digital Marketing',
          destionation: {},
        },
      ],
      destination: {},
    },
    {
      name: 'Portofolio',
      isDropdown: false,

      destination: {},
    },
    {
      name: 'Kontak',
      isDropdown: false,
      destination: {},
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
          <Navbar.Brand
            href='/'
            className=''>
            <Image
              width={64}
              height={64}
              src='/example.png'
              alt='Abdul Rahman Logo'
            />
          </Navbar.Brand>
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
                  className='mt-2 text-tersier'>
                  <Dropdown
                    className='transition-all duration-400 '
                    inline={true}
                    label={item.name}>
                    {item.dropdownContent.map((dropdown, index) => (
                      <Dropdown.Item key={index}>
                        {dropdown.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </li>
              ) : (
                <li
                  key={index}
                  className='mt-2'>
                  <CustomButton
                    type='button'
                    className='text-tersier'>
                    {item.name}
                  </CustomButton>
                </li>
              )
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
