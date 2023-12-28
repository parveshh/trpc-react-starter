export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex justify-center items-center h-16">
      {children}
    </header>
  );
}
