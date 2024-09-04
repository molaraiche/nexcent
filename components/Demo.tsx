import { Button } from './ui/button';
import { BsArrowRight } from 'react-icons/bs';

const Demo = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[40vh]'>
      <h1 className='text-[64px] text-text-900 font-bold leading-[76px] text-center w-[887px]'>
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <Button className='cta gap-2 mt-8 font-normal'>
        <span>Get a Demo</span>
        <BsArrowRight className='w-4 h-4' />
      </Button>
    </div>
  );
};

export default Demo;
