import { NextPage } from 'next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ClubMate: NextPage = () => {
  const eventTime = dayjs('2020-08-01').fromNow(true);

  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen dark:bg-notion-dark">
      <p className="text-[24px] xl:text-5xl lg:text-2xl md:text-2xl sm:text-[24px] leading-normal text-gray-700 dark:text-white text-center dark:opacity-80">
        {` There has been a bottle of Club Mate on my desk for the past ${eventTime} `}
      </p>
  </main>
  );
}

export default ClubMate;
