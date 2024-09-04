import Clients from '@/components/Clients';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import React from 'react';

const page = () => {
  return (
    <main>
      <section className='bg-neutral-Silver'>
        <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
          <NavBar />
          <Hero />
        </div>
      </section>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <Clients />
      </div>
    </main>
  );
};

export default page;
