import { SiEbox } from 'react-icons/si';

export function Footer() {
  return (
    <footer
      className='flex flex-col justify-center items-center px-5  bg-cyan-600
    bottom-[-2] w-full min-h-20 mt-auto mb-0 shadow-inner shadow-black/25'
    >
      <h1 className='text-lg font-sans p-0 inline-flex self-start place-items-center gap-2 pr-2 m-0 text-white'>
        <SiEbox />
        Starterapp
      </h1>
    </footer>
  );
}
