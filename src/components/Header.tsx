import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="w-full max-w-md py-4 px-4 flex justify-between items-center border-b border-muted">
      <h1 className="text-3xl font-bold tracking-wide">Wordle</h1>
      <ThemeToggle />
    </header>
  );
};
