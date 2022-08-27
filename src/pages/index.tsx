import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Counters</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={'/embeds/broke-production'}>
        Broke production counter
      </Link>
      <Link href={'/embeds/club-mate'}>
        Club mate
      </Link>
      <Link href={'/embeds/league-of-legends'}>
        League of Legends 
      </Link>
    </>
  );
};

export default Home;
