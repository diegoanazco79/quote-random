import React, { useState } from 'react';

import { GoCopy } from 'react-icons/go';

interface Props {
  copyToClipboard: (text: string) => Promise<void>;
  text: string;
}

const CopyBtn = ({ copyToClipboard, text }: Props) => {
  const [showPopup, setShowPopup] = useState(false);

  /**
   * Copy the text to the clipboard
   */
  const handleClick = async () => {
    await copyToClipboard(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className='relative inline-block'>
      <button
        onClick={handleClick}
        className='text-[#3e4b62] transition duration-300 ease-in-out py-2 px-3 border rounded border-[#3e4b62] hover:text-[#647086] hover:border-[#647086] rounded-l-none'
      >
        <GoCopy className='w-[25px] h-[25px]' />
      </button>
      {showPopup && (
        <div className='absolute left-0 w-[200px] top-full mt-2 py-2 px-4 bg-transparent rounded shadow-sm text-white opacity-60 font-extralight border border-[#6466E9]'>
          Copied to the clipboard
        </div>
      )}
    </div>
  );
};

export default CopyBtn;
