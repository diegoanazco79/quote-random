import Badge from './components/Badge';

import { IoRefreshOutline } from 'react-icons/io5';

export default function Home () {
  return (
    <main className='flex-col min-h-screen bg-[#111629] flex items-center justify-center'>
      <div className='p-10 border-transparent bg-[#20293A] rounded-xl max-w-screen-sm w-full'>
        <h4 className='text-white text-center font-semibold text-xl'>
          George Bernand Shaw
        </h4>
        <div className='mt-4 flex justify-center items-center'>
          <Badge className='mr-2' label='Famous Quotes' />
          <Badge label='Inspirational' />
        </div>
        <h1 className='text-2xl text-center text-[#97a3b6] mt-4'>
          "Learn from yesterday, live for today, hope for tomorrow."
        </h1>
      </div>
      <button className='text-[#3e4b62] p-2 border rounded border-[#3e4b62] hover:text-[#647086] hover:border-[#647086] mt-4'>
        <IoRefreshOutline className='w-[25px] h-[25px]' />
      </button>
    </main>
  );
}
