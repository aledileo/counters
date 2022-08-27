import { NextPage } from 'next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image'

dayjs.extend(relativeTime);

const BrokeProduction: NextPage = () => {
  const eventTime = dayjs('2022-07-01').fromNow(true);

  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen dark:bg-notion-dark">
      <p className="text-[24px] xl:text-5xl lg:text-2xl sm:text-[24px] leading-normal text-gray-700 dark:text-white text-center dark:opacity-80">
        {` It\'s been only ${eventTime} since I broke something on production `}
      <Image src='https://cultofthepartyparrot.com/parrots/hd/parrot.gif' alt='Party parrot' height='24px' width='24px' className='inline'/>
      </p>
  </main>
  );
}

export default BrokeProduction;
