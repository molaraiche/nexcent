import { updatesType } from '@/type';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const UpdatesCard = ({ imgURL, title }: updatesType) => {
  return (
    <div className='flex flex-col items-center justify-center relative w-full lg:my-0 md:my-10 sm:my-10 xsm:my-10'>
      <div className=''>
        <Image
          src={imgURL}
          alt={title}
          width={368}
          height={286}
          className='rounded-lg'
        />
      </div>
      <div className='bg-neutral-Silver p-4 w-[300px] h-[144px] absolute top-44 rounded-lg text-center flex flex-col items-center justify-center'>
        <p className='text-neutral-Grey text-xl font-semibold text-center w-[285px] h-[84px]'>
          {title}
        </p>
        <div className='flex items-center justify-center mt-4 text-primary font-semibold w-[269px] h-[28px]'>
          <a href='#' className='flex items-center justify-center gap-2'>
            <span>Read more</span>
            <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdatesCard;
