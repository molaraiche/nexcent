'use client';
import { useState } from 'react';
import { navLinks } from '@/constants/navLinks';
import { navType } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => setMenu(!menu);
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
      <nav
        className={`nav lg:translate-y-[0%] ${
          menu ? 'translate-y-0' : '-translate-y-[200%]'
        }`}>
        {navLinks.map((link: navType) => (
          <Link
            href={link.path}
            key={link.id}
            onClick={() => setMenu(false)}
            className='leading-6 text-text-900'>
            {link.label}
          </Link>
        ))}
      </nav>
      <div
        className={`authBtns lg:translate-y-[0%] ${
          menu ? 'translate-y-0' : '-translate-y-[2000%]'
        }`}>
        <Button
          onClick={() => setMenu(false)}
          className='text-primary bg-opacity-0 border-0 btnStyle'>
          Login
        </Button>
        <Button
          onClick={() => setMenu(false)}
          className='bg-primary text-neutral-white btnStyle '>
          Sign up
        </Button>
      </div>
      <div className='lg:hidden md:block sm:block xsm:block'>
        {menu ? (
          <IoMdClose className='w-[32px] h-[32px]' onClick={menuHandler} />
        ) : (
          <HiOutlineMenuAlt1
            className='w-[32px] h-[32px]'
            onClick={menuHandler}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
