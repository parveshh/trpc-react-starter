import { Link } from 'react-router-dom';
import { Title } from '../title';

interface SignInProps {
  summary: React.ReactComponentElement<'p'>;
  href: string;
  hrefText: string;
  title: string;
}

export function SideInfo({ summary, href, hrefText, title }: SignInProps) {
  return (
    <div
      className='sm:flex
    flex-col gap-4
    hover:brightness-110
    justify-center items-center
    rounded-md
    bg-[url("./assets/stack.svg")]
    sm:w-[40%] w-0 hidden p-10 transition-all duration-500'
    >
      <Title variant='secondary' color='text-white'>
        {title}
      </Title>
      {summary}
      <Link
        to={href}
        className='border border-gray-300 p-2 m-2 w-full text-center rounded-md  text-white'
      >
        {hrefText}
      </Link>
    </div>
  );
}
