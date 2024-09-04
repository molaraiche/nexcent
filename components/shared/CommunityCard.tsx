import { communityType } from '@/type';
import Image from 'next/image';

const CommunityCard = ({ icon, title, content }: communityType) => {
  return (
    <div className='flex flex-col items-center justify-between text-center w-full'>
      <Image src={`/assets/${icon}.png`} alt={title} width={48} height={48} />
      <h1 className='text-neutral-D_Grey text-[28px] leading-9 font-bold w-60'>
        {title}
      </h1>
      <p className='text-sm text-neutral-Grey w-60'> {content} </p>
    </div>
  );
};

export default CommunityCard;
