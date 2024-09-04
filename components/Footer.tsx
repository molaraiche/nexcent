import { company, support } from '@/constants/footer';
import { footerType } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className='flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center justify-between min-h-[200px] p-16'>
      <div className='flex flex-col gap-10'>
        <Image
          src='./assets/dark-logo.svg'
          alt='nexcent logo'
          width={100}
          height={100}
        />
        <div className='text-neutral-Silver text-sm flex flex-col gap-2'>
          <p> Copyright © 2020 Nexcent ltd. </p>
          <p>All rights reserved</p>
        </div>
        <div className='flex gap-4'>
          <a href='http://molaraiche.com/' target='_blank'>
            <Image
              src='/assets/ig.svg'
              alt='Instagram'
              width={32}
              height={32}
            />
          </a>
          <a href='http://molaraiche.com/' target='_blank'>
            <Image
              src='/assets/dribble.svg'
              alt='Dribbble'
              width={32}
              height={32}
            />
          </a>
          <a href='http://molaraiche.com/' target='_blank'>
            <Image src='/assets/x.svg' alt='Twitter/X' width={32} height={32} />
          </a>
          <a href='http://molaraiche.com/' target='_blank'>
            <Image src='/assets/yt.svg' alt='Youtube' width={32} height={32} />
          </a>
        </div>
      </div>
      <div className=' flex gap-[30px] text-neutral-Silver'>
        <div className=''>
          <h1 className='text-xl text-neutral-white font-semibold'>Company</h1>
          <div className='mt-6 flex flex-col gap-3'>
            {company.map((c: footerType) => (
              <Link href={c.path} key={c.id}>
                {c.label}
              </Link>
            ))}
          </div>
        </div>
        <div className=''>
          <h1 className='text-xl text-neutral-white font-semibold'>Support</h1>
          <div className='mt-6 flex flex-col gap-3'>
            {support.map((s: footerType) => (
              <Link href={s.path} key={s.id}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <div className=''>
          <Newsletter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
