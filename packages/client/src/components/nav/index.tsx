import { SiEbox } from 'react-icons/si';
import { Link } from 'react-router-dom';
export const Nav = () => {
  return (
    <nav className='flex w-full shadow-md shadow-slate-600/2 px-10 mt-0 md:h-16 h-60'>
      <div className='md:flex-row flex flex-col md:w-full mx-auto gap-5 items-center md:justify-between'>
        <div className='md:flex-row flex flex-col gap-5 items-center'>
          <h1 className='text-lg font-sans p-0 inline-flex place-items-center gap-2 pr-2 m-0 text-cyan-600'>
            <SiEbox />
            Starterapp
          </h1>
          <Link to={'/'} className='text-gray-600 text-sm'>
            Home
          </Link>
          <Link className='text-gray-600 text-sm' to='https://trpc.io'>
            About
          </Link>
          <Link className='text-gray-600 text-sm' to='https://trpc.io'>
            Contact
          </Link>
        </div>
        <nav className='md:flex-row flex flex-col gap-5 items-center'>
          <Link className='text-gray-600 text-sm' to='/sign-in'>
            Login
          </Link>
          <Link className='text-gray-600 text-sm' to='/signup'>
            Signup
          </Link>
        </nav>
      </div>
    </nav>
  );
};
