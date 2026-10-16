import Container from './Container';
import { Languages, MessageCircleHeart, BookOpen, ChessQueen } from 'lucide-react';
import { motion } from 'motion/react';
export default function Language() {
  return (
    <section id="Language" className="py-20 dark:bg-primary/50 ">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2  font-headline gap-10">
          {/* Language */}
          <div className="flex flex-col gap-10 dark:bg-card/80 bg-Neutral shadow-sm shadow-primary/10 px-2 sm:px-4 py-6 rounded-sm">
            {/* HeadTitle */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center dark:text-amber-300 gap-1.5  uppercase text-sm sm:text-lg"
              >
                <Languages className=" bg-primary/20 p-2 rounded-sm w-10 h-10 sm:w-10 sm:h-10" />
                Global Communication
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="dark:text-Neutral text-3xl mt-3"
              >
                Languages
              </motion.h2>
            </div>
            {/*  Language and level  */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg dark:text-Neutral "
                  >
                    Arabic:
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm dark:text-Neutral/20"
                  >
                    Native
                  </motion.span>
                </div>
                {/* Level Dot */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-1.5"
                >
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                </motion.div>
              </div>
              {/* Language and level */}
              <div className="flex justify-between items-center">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg dark:text-Neutral "
                  >
                    English
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="dark:text-Neutral/20"
                  >
                    Advanced C1
                  </motion.span>
                </div>
                {/* Level Dot */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-1.5"
                >
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                  <div className="h-3 w-3 bg-amber-300 rounded-full "></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="flex flex-col gap-10 dark:bg-card/80 bg-Neutral shadow-sm shadow-primary/10 px-2 sm:px-4 py-6 rounded-sm">
            {/* HeadTitle */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-1 dark:text-amber-300 uppercase text-sm sm:text-lg"
              >
                <MessageCircleHeart className="dark:text-amber-300 bg-primary/20 p-2 rounded-sm w-10 h-10 sm:w-10 sm:h-10" />
                Personal Pursuits
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="dark:text-Neutral text-3xl mt-3"
              >
                Hobbies
              </motion.h2>
            </div>
            <div className="flex flex-col gap-2">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-2.5 items-center bg-primary/40 p-4 rounded-sm"
              >
                <BookOpen className="text-amber-300" />
                <div className="text-lg  dark:text-Neutral ">Reading</div>
              </motion.div>
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-2.5 items-center bg-primary/40 p-4 rounded-sm"
              >
                <ChessQueen className="text-amber-300" />
                <div className="text-lg dark:text-Neutral">Chess</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
