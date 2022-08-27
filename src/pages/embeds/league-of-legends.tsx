import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const LeagueOfLegends: NextPage = () => {
  const eventTime = dayjs('2012-10-07').fromNow(true);

  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen dark:bg-notion-dark">
      <div className='flex gap-2 items-center'>
        <p className="text-[24px] xl:text-5xl lg:text-2xl md:text-2xl sm:text-[24px] text-gray-700 dark:text-white text-center dark:opacity-80">
          {`I've had a League of Legends account for the last ${eventTime} `}
        </p>
        <Image src='/league-icon.png' alt='Party parrot' height='24px' width='24px' className='inline'/>
      </div>
  </main>
  );
}

export default LeagueOfLegends;
