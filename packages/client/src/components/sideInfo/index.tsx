import { Title } from '../title';

interface SignInProps {
  summary: React.ReactComponentElement<'p'>;
  href: string;
  hrefText: string;
  title: string;
}

export function SideInfo({ summary, href, hrefText, title }: SignInProps) {
  return (
    <div className='flex flex-col gap-2 place-content-center w-[40%] bg-cyan-600/10 p-10'>
      <Title variant='secondary'>{title}</Title>
      {summary}
      <a
        href={href}
        className='border border-gray-300 p-2 m-2 w-full text-center rounded-md bg-cyan-600 text-white'
      >
        {hrefText}
      </a>
    </div>
  );
}