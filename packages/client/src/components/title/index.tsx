interface TitleProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  color?: string;
}

export function Title({ children, variant, color }: TitleProps) {
  const className =
    variant === 'primary'
      ? 'text-4xl  w-full text-center text-cyan-500'
      : 'text-2xl  w-full text-center text-gray-500';
  return <h1 className={`${className} ${color}`}>{children}</h1>;
}
