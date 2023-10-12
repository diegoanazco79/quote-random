'use client';

import Badge from './components/Badge';
import CopyBtn from './components/CopyBtn';

import useQuote from './hooks/useQuote';

import { IoRefreshOutline } from 'react-icons/io5';

export default function Home () {
  const { currentQuote, loadingQuote, getQuote, copyToClipboard } = useQuote();

  return (
    <main className='flex-col min-h-screen bg-[#111629] flex items-center justify-center px-10'>
      <div className='p-10 border-transparent bg-[#20293A] rounded-xl max-w-screen-sm w-full'>
        {loadingQuote
          ? (
            <h4 className='text-white text-center font-semibold text-xl'>
              Loading Quote...
            </h4>
          )
          : (
            <>
              <h4 className='text-white text-center font-semibold text-xl'>
                {currentQuote?.author}
              </h4>
              <div className='mt-4 flex justify-center items-center'>
                {currentQuote?.tags?.map((tag, index) => (
                  <Badge
                    key={index}
                    label={tag}
                    className={index !== currentQuote.length - 1 ? 'mr-2' : ''}
                  />
                ))}
              </div>
              <h1 className='text-xl md:text-2xl text-center text-[#97a3b6] mt-4'>
                "{currentQuote?.content}"
              </h1>
            </>
          )}
      </div>
      <div className='flex mt-4'>
        <button
          className='text-[#3e4b62] transition duration-300 ease-in-out py-2 px-3 border rounded border-[#3e4b62] hover:text-[#647086] hover:border-[#647086] border-r-0 rounded-r-none'
          onClick={getQuote}
        >
          <IoRefreshOutline className='w-[25px] h-[25px]' />
        </button>
        <CopyBtn copyToClipboard={copyToClipboard} text={`"${currentQuote?.content}" - ${currentQuote?.author}`} />
      </div>
    </main>
  );
}
