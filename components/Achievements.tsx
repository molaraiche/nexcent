import { achievements } from '@/constants/achievements';
import { achievemntTypes } from '@/type';
import AchievementsCard from './shared/AchievementsCard';

const Achievements = () => {
  return (
    <div className='flex items-center justify-between min-h-[40vh] lg:flex-row md:flex-col sm:flex-col xsm:flex-col my-10'>
      <div className='lg:w-[540px] md:w-full sm:w-full xsm:w-full flex flex-col '>
        <h1 className='title lg:w-[408px]'>
          Helping a local
          <span className='text-primary'> business reinvent itself</span>
        </h1>
        <p className='text-text-900 leading-6 mt-2'>
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className='flex  flex-wrap lg:w-[540px] md:w-full sm:w-full xsm:w-full items-center '>
        {achievements.map((achievement: achievemntTypes) => (
          <AchievementsCard
            key={achievement.id}
            title={achievement.title}
            icon={achievement.icon}
            details={achievement.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
