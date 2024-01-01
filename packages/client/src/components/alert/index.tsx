import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
interface AlertProps {
  variant: 'success' | 'error';
  message: string;
}

export function Alert({ variant, message }: AlertProps) {
  const [show, setShow] = useState(true);

  const common =
    'flex w-[90%] flex-row justify-between text-sm items-center px-3 my-2 shadow-md shadow-black/20 rounded-md text-white';
  const className = variant === 'success' ? 'bg-green-500' : 'bg-red-500';
  return (
    show && (
      <div className={`${common} ${className}`}>
        <span>{message}</span>
        <button
          type='button'
          className='h-10  flex justify-center rounded-full  cursor-pointer'
          onClick={() => setShow(false)}
        >
          <RxCross1 className='text-white font-bold h-10' />
        </button>
      </div>
    )
  );
}
