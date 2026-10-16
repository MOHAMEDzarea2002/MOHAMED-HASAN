import { IoIosArrowForward } from 'react-icons/io';
import type { Experience } from '../types/types';
import {motion} from 'motion/react'
export default function CardExperience({ job, index }: { job: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-1.5 dark:bg-card/80 bg-Neutral shadow-sm shadow-primary/10 dark:text-Neutral p-2 sm:p-4 rounded-sm font-headline"
    >
      {/* job Title & Date */}
      <div className="flex flex-wrap  justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold w-2xs max-w-2xs">{job.title}</h3>
          {/* Location */}
          <div className="flex sm:flex-row flex-col gap-2.5 sm:items-center  text-sm">
            <span className="dark:text-amber-200 ">{job.company}</span>
            <span className="dark:text-Neutral/40">
              <span className="dark:text-Neutral/40 text-amber-300 animate-pulse text-2xl mr-1">
                •
              </span>
              {job.location}
            </span>
          </div>
        </div>
        {/* Date */}
        <div className="bg-white/20 px-2 py-1 rounded-sm text-sm sm:text-md">
          {job.startDate} – {job.endDate}
        </div>
      </div>
      {/* Skills */}
      <div className=" flex items-center gap-1.5 text-sm mt-3 ">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="dark:text-amber-200 px-2  py-1 dark:bg-Neutral/10 bg-primary/10 rounded-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* Description */}
      <div className="flex flex-col gap-3">
        {job.responsibilities.map((respons) => (
          <div className="flex gap-1">
            <IoIosArrowForward className="text-2xl text-amber-300  " />
            <p className="shrink-4">{respons}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
