import { updates } from '@/constants/updates';
import UpdatesCard from './shared/UpdatesCard';
import { updatesType } from '@/type';

const Updates = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[40vh]  my-10'>
      <div className='text-center'>
        <h1 className='title'>Caring is the new marketing</h1>
        <p className='paragraph mt-2'>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.​
        </p>
      </div>
      <div className='mt-4 flex justify-between gap-10 items-center lg:flex-nowrap md:flex-wrap sm:flex-wrap xsm:flex-wrap  w-full'>
        {updates.map((update: updatesType) => (
          <UpdatesCard
            imgURL={update.imgURL}
            key={update.id}
            title={update.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Updates;
