import Image from 'next/image';
import { Button } from '../ui/button';

const MoreDetails = ({
  imgURL,
  title,
  details,
}: {
  imgURL: string;
  title: string;
  details: string;
}) => {
  return (
    <div className='flex items-center lg:justify-between md:justify-center sm:justify-center xsm:justify-center flex-wrap'>
      <div className='lg:w-[442px] md:w-full sm:w-full xsm:w-full flex items-center justify-center'>
        <Image src={imgURL} alt='phone ill' width={442} height={433} />
      </div>
      <div className='lg:w-[601px] md:w-full sm:w-full xsm:w-full'>
        <h1 className='title'>{title}</h1>
        <p className='paragraph mt-4'>{details}</p>
        <div className='lg:block md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center xsm:flex xsm:justify-center xsm:items-center'>
          <Button className='cta mt-8'> Learn More </Button>
        </div>{' '}
      </div>
    </div>
  );
};

export default MoreDetails;
