export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
