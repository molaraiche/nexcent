import { navLinks } from '@/constants/navLinks';
import { navType } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { FaUserPlus } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {
  return (
    <header className='flex h-[10vh] items-center justify-between'>
      <div className=''>
        <Image
          src='./assets/logo.svg'
          alt='nexcent logo'
          width={154}
          height={24}
          className='lg:w-[154px] md:w-[120px] sm:w-[110px] xsm:w-[90px]'
        />
      </div>
      <nav className='flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col lg:static md:absolute sm:absolute xsm:absolute top-[10vh] right-0 lg:w-fit md:w-full sm:w-full xsm:w-full items-center lg:bg-opacity-0 md:bg-tint-5 sm:bg-tint-5 xsm:bg-tint-5 lg:text-base md:text-2xl sm:text-4xl xsm:text-4xl gap-[50px] py-4'>
        {navLinks.map((link: navType) => (
          <Link
            href={link.path}
            key={link.id}
            className='leading-6 text-text-900'>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className='flex gap-[14px] lg:static md:absolute sm:absolute xsm:absolute top-[58vh] right-0 justify-center lg:w-fit md:w-full sm:w-full xsm:w-full lg:bg-opacity-0 md:bg-tint-5 sm:bg-tint-5 xsm:bg-tint-5 py-8 '>
        <Button className='text-primary bg-opacity-0 border-0 btnStyle'>
          Login
        </Button>
        <Button className='bg-primary text-neutral-white btnStyle '>
          Sign up
        </Button>
      </div>
      <div className='lg:hidden md:block sm:block xsm:block'>
        <HiOutlineMenuAlt1 className='w-[32px] h-[32px]' />
      </div>
    </header>
  );
};

export default NavBar;
