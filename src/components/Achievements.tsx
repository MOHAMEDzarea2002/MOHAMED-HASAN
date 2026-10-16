import { achievements } from '../Data/achievements';
import Container from './Container';
import SectionHeading from './SectionHeading';
import {motion} from  'motion/react'
export default function Achievements() {
  return (
    <section id="achievements" className="py-10">
      <SectionHeading
        title={'Key Achievements'}
        subTitle={
          'Verified milestones in enterprise sales acquisition, predictive accuracy, and long-term client loyalty.'
        }
        badge={'Distinctions & Milestones'}
      />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-2  sm:p-4  dark:bg-card/80 dark:text-Neutral bg-Neutral rounded-sm font-headline shadow-sm shadow-primary/10"
            >
              <achieve.icon className="text-amber-300 mb-2" />
              <p>{achieve.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
