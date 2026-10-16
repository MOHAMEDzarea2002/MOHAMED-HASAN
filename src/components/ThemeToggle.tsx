import { useEffect } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from "react-icons/ci";

type ThemeToggleProps = {
  theme: string;
  setTheme: (theme: string) => void;
};
export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="flex items-center justify-center  ">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="cursor-pointer text-2xl text-primary dark:text-neutral-50  hover:text-primary/80 dark:hover:text-neutral-50/80 transition-all duration-300 ease-in-out"
      >
        {theme === 'light' ? <CiDark  /> : <CiLight />}
      </button>
    </div>
  );
}
