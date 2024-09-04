import { achievemntTypes } from '@/type';
import Image from 'next/image';

const AchievementsCard = ({ title, icon, details }: achievemntTypes) => {
  return (
    <div className='lg:w-[255px] lg:h-[60px] md:w-[255px] sm:w-full xsm:w-full lg:mt-10 md:mt-10 sm:mt-0 xsm:mt-0 flex items-center justify-center md:justify-center sm:justify-between xsm:justify-between lg:gap-4 '>
      <div className='flex items-center justify-center'>
        <Image src={`/assets/${icon}.png`} alt={title} width={48} height={48} />
      </div>
      <div className=''>
        <h3 className='text-[28px] font-bold leading-9 text-neutral-D_Grey'>
          {title}
        </h3>
        <p className='text-neutral-Grey'> {details} </p>
      </div>
    </div>
  );
};

export default AchievementsCard;
