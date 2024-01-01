interface TitleProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Title({ children, variant }: TitleProps) {
  const className =
    variant === 'primary'
      ? 'text-5xl  w-full text-center text-cyan-500'
      : 'text-2xl  w-full text-center text-gray-500';
  return <h1 className={className}>{children}</h1>;
}
