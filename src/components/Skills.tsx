
import Container from './Container';
import SectionHeading from './SectionHeading';
import { skills } from '../Data/skils';
import { motion } from 'motion/react';
export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <SectionHeading title={'Core Competencies & Skills'} />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.3  }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
              className="bg-Neutral dark:bg-card/80 dark:text-Neutral p-4 shadow-sm  rounded-sm font-headline"
            >
              <span>
                <skill.icon className="my-2 " />
              </span>
              <h3 className="sm:text-lg text-sm ">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
