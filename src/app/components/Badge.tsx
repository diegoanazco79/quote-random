import React from 'react';

interface Props {
  className?: string
  label: string
}

const Badge = ({ className = '', label }: Props) => {
  return (
    <span className={`${className} w-fit border border-[#6466E9] text-sm text-[#6466E9] font-light py-1 px-3 rounded-full`}>
      {label}
    </span>
  );
};

export default Badge;
