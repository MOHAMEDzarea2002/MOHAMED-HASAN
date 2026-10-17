import personal from '../assets/personal.jpeg';
import Container from './Container';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuDownload } from 'react-icons/lu';
import { motion } from 'motion/react';

export default function Hero() {
  const text = 'MOHAMED HAMDI HASAN';
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 1.2},
  },
};

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};
  return (
    <section
      id="hero"
      className="  h-screen  flex flex-col justify-center items-center py-10 dark:bg-primary/50"
    >
      <Container>
        <div className="flex flex-wrap flex-col sm:flex-row  justify-between items-center   gap-4 ">
          {/* Info */}
          <div>
            {/* Profile Info */}
            <div className="flex flex-col  ">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm mb-6 font-headline p-2 py-1 bg-Neutral/80 dark:bg-primary w-fit rounded-sm flex items-center gap-2 text-primary dark:text-Neutral "
              >
                <div className="bg-amber-200 dark:bg-amber-200/50 h-2 w-2 rounded-full animate-pulse"></div>
                SALES & BUSINESS DEVELOPMENT
              </motion.p>
              <motion.span
                className="text-primary dark:text-amber-200/50 text-lg"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Hello,I'm
              </motion.span>
              <motion.h1
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-label={text}
                className="text-2xl sm:text-5xl font-bold text-primary dark:text-neutral-50 tracking-[1px] font-headline line-clamp-3"
              >
                {text.split('').map((char, i) => (
                  <motion.span key={i} variants={letter} aria-hidden="true">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-headline   text-primary/70 dark:text-Neutral/50"
              >
                Sales Executive
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-md sm:text-xl text-muted-foreground dark:text-muted-foreground/80 font-headline sm:max-w-130 dark:text-Neutral mt-3.5"
              >
                Sales professional with experience in B2B and retail sales, customer relationship
                management, CRM systems, and data-driven strategies to drive revenue growth and
                improve customer satisfaction.
              </motion.p>
            </div>
            {/* Buttons */}
            <div className="flex space-x-1.5 mt-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="#experience"
                className="text-primary font-headline dark:text-Neutral border-2 px-2 py-1 rounded-sm hover:bg-primary hover:text-Neutral dark:hover:bg-Neutral dark:hover:text-primary transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2"
              >
                Experience <FaArrowRightLong className="text-amber-400" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="/public/MOHAMED.pdf"
                download="MR_MOHAMED.pdf"
                className="text-primary font-headline dark:text-Neutral border-2 px-2 py-1 rounded-sm hover:bg-primary hover:text-Neutral dark:hover:bg-Neutral dark:hover:text-primary transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2"
              >
                Download CV <LuDownload className="text-amber-400" />
              </motion.a>
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
              src={personal}
              alt="Profile"
              className="  h-full max-h-125 rounded-md dark:grayscale shadow-sm border-2 border-gray-100"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
