import Container from './Container';
import { motion } from 'motion/react';

type SectionProps = {
  title?:string
  subTitle?:string
  badge?:string
};
export default function SectionHeading({title,subTitle,badge}:SectionProps) {
  return (
    <div className="py-10 ">
      <Container>
        <div className="flex items-center justify-between flex-wrap ">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-headline text-primary dark:text-amber-200/50 "
            >
              {badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="  my-2 text-3xl sm:text-4xl text-primary dark:text-Neutral font-sans"
            >
              {title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-sm sm:text-lg dark:text-Neutral/30  max-w-md"
          >
            {subTitle}
          </motion.p>
        </div>
      </Container>
    </div>
  );
}
