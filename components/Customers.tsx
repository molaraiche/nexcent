import { clients } from '@/constants/clients';
import { clientsType } from '@/type';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const Customers = () => {
  return (
    <div className='flex min-h-[40vh] items-center justify-center gap-[78px] mt-12 py-8'>
      <div className=''>
        <Image
          src='/assets/tesla.jpg'
          alt='tesla logo'
          width={326}
          height={326}
        />
      </div>
      <div className='w-[748px]'>
        <p className='text-neutral-Grey font-medium'>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <div className='mt-4'>
          <p className='text-xl text-primary font-semibold'>Tim Smith</p>
          <p>British Dragon Boat Racing Association</p>
          <div className='flex mt-8'>
            {clients.map((client: clientsType) => (
              <Image
                src={`/assets/${client.icon}.svg`}
                width={client.width}
                height={client.height}
                key={client.id}
                alt={client.icon}
              />
            ))}
            <div className='flex items-center justify-center ml-20'>
              <a
                href=''
                className='text-primary text-xl font-semibold flex items-center justify-center gap-2 w-[207px]'>
                Meet all customers
                <BsArrowRight className='w-[14.6px] h-[28px] font-bold' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
