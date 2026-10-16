import SectionHeading from './SectionHeading';
import Container from './Container';
import { FcSalesPerformance } from 'react-icons/fc';
import { CiDatabase } from 'react-icons/ci';
import { AiFillCustomerService } from 'react-icons/ai';
import type { PillarsData } from '../types/types';
import {motion} from 'motion/react'
export default function Summary() {



  const pillarsData: PillarsData[] = [
    {
      id: 'PILLAR I',
      icon: <FcSalesPerformance />,
      title: 'Sales & Business Development',
      description:
        'Driving revenue growth and expanding market share through proactive prospecting, strategic deal closing, and portfolio expansion.',
      tags: ['B2B & Retail Sales', 'Prospecting & Closing', 'Upselling & Cross-selling'],
    },
    {
      id: 'PILLAR II',
      icon: <CiDatabase />,
      title: 'Data, CRM & Performance',
      description:
        'Leveraging CRM platforms and sales data analytics to evaluate pipeline performance, identify growth trends, and optimize conversion rates.',
      tags: ['CRM Systems', 'Data Analysis', 'Performance Tracking'],
    },
    {
      id: 'PILLAR III',
      icon: <AiFillCustomerService />,
      title: 'Customer Experience',
      description:
        'Building long-term strategic relationships by delivering exceptional customer service, resolving complex inquiries, and maximizing client retention.',
      tags: ['Customer Service', 'Client Retention', 'Complaint Handling'],
    },
  ];

  return (
    <section id="summary" className="py-10">
      <SectionHeading
        title={'Professional Summary'}
        subTitle={
          'A professional overview of sales expertise, customer relationship management, and a results-driven approach to business growth.'
        }
        badge={'Executive Overview'}
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10  border-l-4 border-amber-200 rounded-lg dark:bg-card/80 bg-Neutral dark:text-Neutral font-headline shadow-sm"
        >
          <span>“</span>
          <p className="text-2xl sm:text-3xl ">
            Professional Sales Executive with expertise in B2B and retail sales, skilled in using
            CRM systems and data analytics to identify opportunities, forecast trends, and boost
            performance. Experienced in working with cross-functional teams to deliver tailored
            solutions, improve customer satisfaction, and drive consistent revenue growth.
          </p>
        </motion.div>
        {/* Pillars */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 font-headline">
          {pillarsData.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={card.id}
              className="p-4 flex flex-col gap-2.5 dark:bg-card/80 bg-Neutral dark:text-Neutral text-primary rounded-sm shadow-sm"
            >
              <div className="flex flex-col not-last:gap-1.5">
                <span className="p-2 bg-primary/15 flex w-fit rounded-sm text-2xl text-amber-400 ">
                  {card.icon}
                </span>
                <span className="text-sm ">{card.id} </span>
                <h3 className="sm:text-2xl ">{card.title}</h3>
                <p className="text-sm dark:text-Neutral/20 text-primary">{card.description}</p>
              </div>

              <div className="  flex items-center flex-wrap gap-1 sm:gap-2.5  ">
                {card.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-[11px] dark:text-amber-200 dark:bg-Neutral/10 bg-primary/10  w-fit px-2 py-1"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
