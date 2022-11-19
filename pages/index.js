import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { MicrophoneIcon, SearchIcon } from '../components/Icons';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault()

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Google clone</title>
        <meta name="description" content="Google browser clone used for learning purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex flex-1 justify-center items-center flex-col w-full'>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google logo"
          width={400}
          height={400}
          className="w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3"
        />

        <form className="w-full flex justify-center my-10" onSubmit={search}>
          <p className='flex justify-center items-center relative w-3/4 md:w-1/2'>
            <MicrophoneIcon className="cursor-pointer absolute left-0 p-2 text-gray-800" />
            <input ref={searchInputRef} type="text" className="border border-gray-800 rounded-2xl w-full h-8 leading-8 px-10 py-4" />
            <SearchIcon className="cursor-pointer absolute right-0 p-2 text-gray-800" onClick={search} />
          </p>
        </form>

        <div className='flex justify-center'>
          <button className='green-btn m-2'>Google Search</button>
          <button className='green-btn m-2'>I&apos;m Feeling Lucky</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
