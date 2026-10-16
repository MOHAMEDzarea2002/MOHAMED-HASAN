import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Container from './Container';
import {motion} from 'motion/react'
export default function Nave() {
  const links = ['Summary', 'Experience','Achievements', 'Education', 'Skills' ];
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
const [activeLink,setActiveLink] = useState<string>(String)

const DURATION = 4.5;
const times = [0, 0.2, 0.3, 0.45, 0.6, 0.75, 0.88, 1];

const loop = {
  duration: DURATION,
  times,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};
  return (
    <div className=" dark:bg-card bg-Neutral sticky top-0 z-50  py-5  ">
      <Container>
        <nav className="flex justify-between items-center space-x-2.5 ">
          <div
            className="flex items-end text-3xl font-bold text-primary dark:text-neutral-50 font-sans select-none "
            aria-label="MH"
            role="img"
          >
            {/* حرف M: */}
            <motion.span
              aria-hidden="true"
              className="inline-block origin-bottom-left"
              animate={{
                x: [-60, 0, -4, 0, 0, 0, 0, -60],
                rotate: [0, 0, -4, 3, -2, 0, 90, 0],
                y: [0, 0, 0, 0, 0, 0, 6, 0],
                opacity: [0, 1, 1, 1, 1, 1, 1, 0],
              }}
              transition={loop}
            >
              M
            </motion.span>

            {/* حرف H:   */}
            <motion.span
              aria-hidden="true"
              className="inline-block origin-bottom-right"
              animate={{
                x: [60, 0, 4, 0, 0, 0, 0, 60],
                rotate: [0, 0, 4, -3, 2, 0, -90, 0],
                y: [0, 0, 0, 0, 0, 0, 6, 0],
                opacity: [0, 1, 1, 1, 1, 1, 1, 0],
              }}
              transition={loop}
            >
              H
            </motion.span>
          </div>

          <ul
            className="flex items-center space-x-2.5 justify-center  max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:right-0 max-sm:bg-Neutral max-sm:dark:bg-primary   max-sm:py-3.5  max-sm:space-x-1.5 max-sm:shadow-xl max-sm:dark:shadow-Neutral/70 max-sm:shadow-primary  transition-all duration-300 ease-in-out  z-50
          "
          >
            {links.map((link) => (
              <li
                key={link}
                onClick={() => setActiveLink(link)}
                className={`text-sm sm:text-lg text-primary dark:text-neutral-50  hover:text-primary/80 dark:hover:text-neutral-50/80 transition-all duration-300 ease-in-out list-none font-medium font-headline ${activeLink == link ? 'underline mb-1' : ''} cursor-pointer  max-sm:py-2.5 `}
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>
      </Container>
    </div>
  );
}
