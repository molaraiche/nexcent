import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className='flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col lg:gap-[20rem] md:gap-20 sm:gap-20 xsm:gap-20 items-center  py-24'>
      <div className='lg:w-1/2 '>
        <h1 className='lg:text-[64px] md:text-5xl sm:text-5xl xsm:text-5xl font-semibold leading-[76px]'>
          Lessons and insights
          <span className=' text-primary'> from 8 years</span>
        </h1>
        <p className=' lg:text-base md:text-sm sm:text-sm xsm:text-xs leading-6 text-neutral-Grey mt-4'>
          Where to grow your business as a photographer: site or social media?
        </p>
        <div className='mt-8'>
          <Button className='cta'>Register</Button>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src='./assets/Illustration.svg'
          alt='Illustration'
          width={391}
          height={407}
        />
      </div>
    </section>
  );
};

export default Hero;
