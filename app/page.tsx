import Clients from '@/components/Clients';
import Community from '@/components/Community';
import Hero from '@/components/Hero';
import MoreDetails from '@/components/shared/MoreDetails';
import NavBar from '@/components/NavBar';
import React from 'react';
import Achievements from '@/components/Achievements';
import Customers from '@/components/Customers';
import Updates from '@/components/Updates';

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
        <Community />
        <MoreDetails
          imgURL='./assets/phone-ill.svg'
          title='The unseen of spending three years at Pixelgrade'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
        />
      </div>
      <div className='bg-neutral-Silver'>
        <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
          <Achievements />
        </div>
      </div>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <MoreDetails
          imgURL='./assets/girl-ill.svg'
          title='How to design your site footer like we did'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
        />
      </div>
      <div className='bg-neutral-Silver'>
        <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
          <Customers />
        </div>
      </div>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <Updates />
      </div>
    </main>
  );
};

export default page;
