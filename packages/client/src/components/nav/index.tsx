import { SiEbox } from 'react-icons/si';
export const Nav = () => {
  return (
    <nav className='flex w-full shadow-md shadow-slate-600/2 px-10 mt-0 md:h-16 h-60'>
      <div className='md:flex-row flex flex-col md:w-full mx-auto gap-5 items-center md:justify-between'>
        <div className='md:flex-row flex flex-col gap-5 items-center'>
          <h1 className='text-lg font-sans p-0 inline-flex place-items-center gap-2 pr-2 m-0 text-cyan-600'>
            <SiEbox />
            Starterapp
          </h1>
          <a className='text-gray-600 text-sm' href='/'>
            Home
          </a>
          <a className='text-gray-600 text-sm' href='https://trpc.io'>
            About
          </a>
          <a className='text-gray-600 text-sm' href='https://trpc.io'>
            Contact
          </a>
        </div>
        <nav className='md:flex-row flex flex-col gap-5 items-center'>
          <a className='text-gray-600 text-sm' href='/sign-in'>
            Login
          </a>
          <a className='text-gray-600 text-sm' href='/signup'>
            Signup
          </a>
        </nav>
      </div>
    </nav>
  );
};
