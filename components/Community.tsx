import { community } from '@/constants/community';
import { communityType } from '@/type';
import CommunityCard from './shared/CommunityCard';

const Community = () => {
  return (
    <div className='my-10 min-h-[40vh] flex flex-col justify-center'>
      <div className='text-center'>
        <h1 className='title'>
          Manage your entire community in a single system
        </h1>
        <p className='paragraph'>Who is Nextcent suitable for?</p>
      </div>
      <div className='flex items-center justify-center lg:flex-nowrap md:flex-nowrap sm:flex-wrap xsm:flex-wrap mt-4'>
        {community.map((comm: communityType) => (
          <CommunityCard
            key={comm.id}
            icon={comm.icon}
            title={comm.title}
            content={comm.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
