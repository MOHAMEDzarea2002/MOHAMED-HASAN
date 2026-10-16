import Container from './Container';
import SectionHeading from './SectionHeading';
import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
export default function Education() {
  return (
    <section id="education" className="py-8">
      <SectionHeading title={'Education'} />
      <Container>
        <motion.div className="flex justify-between items-center flex-wrap gap-10 sm:gap-0 bg-Neutral dark:bg-card/80 px-4 py-6 shadow-sm shadow-primary/10">
          {/*  Education*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-2.5"
          >
            <GraduationCap className="dark:text-amber-300 bg-primary/20 p-2 rounded-sm w-10 h-10 sm:w-12 sm:h-12" />
            <div className="dark:text-Neutral font-headline">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm dark:text-Neutral/20"
              >
                Undergraduate Degree
              </motion.span>
              <motion.h2
                className="text-lg sm:text-2xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Bachelor’s Degree in Accounting
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Al Azhar University, Cairo
              </motion.span>
            </div>
          </motion.div>
          {/* Year of graduation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm bg-Neutral/20 dark:text-Neutral w-fit px-2 py-1 rounded-sm"
          >
            2018 – 2022
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
