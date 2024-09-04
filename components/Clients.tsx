import { clients } from '@/constants/clients';
import { clientsType } from '@/type';
import Image from 'next/image';

const Clients = () => {
  return (
    <div className=' flex flex-col justify-center my-10 h-[40vh]'>
      <div className='text-center'>
        <h1 className='title'>Our Clients</h1>
        <p className='paragraph'>
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
