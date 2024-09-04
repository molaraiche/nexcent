import { clients } from '@/constants/clients';
import { clientsType } from '@/type';
import { Component } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Clients = () => {
  return (
    <div className='my-10'>
      <div className='flex flex-col items-center justify-center md:text-center sm:text-center xsm:text-center '>
        <h1 className='text-4xl text-neutral-D_Grey font-semibold leading-[44px]'>
          Our Clients
        </h1>
        <p className='text-neutral-Grey leading-6'>
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className='flex justify-between items-center mt-4 flex-wrap'>
        {clients.map((client: clientsType) => (
          <Image
            key={client.id}
            src={`/assets/${client.icon}.svg`}
            alt={client.icon}
            width={client.width}
            height={client.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
