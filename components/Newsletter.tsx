import { FiSend } from 'react-icons/fi';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <div>
      <h1 className='text-lx font-semibold'>Stay up to date</h1>
      <form action=''>
        <div className='flex items-center w-[255px] h-[40px] bg-[#0000000d]rounded-lg gap-4 mt-6'>
          <Input
            type='email'
            placeholder='Your email address'
            className='  border-0 focus:ring-0 focus:outline-none '
          />
          <FiSend />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
