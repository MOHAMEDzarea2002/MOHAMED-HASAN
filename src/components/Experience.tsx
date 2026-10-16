import Container from './Container';
import SectionHeading from './SectionHeading';
import CardExperience from './CardExperience';
import { experiences } from '../Data/Job';

export default function Experience() {
  return (
    <section id="experience" className="main-h-screen py-10 ">
      <SectionHeading
        title={'Professional Experience'}
        subTitle={
          'A chronological overview of sales experience, client relationship management, and measurable commercial achievements across retail and customer-focused environments.'
        }
        badge={'Career History'}
      />
      <Container>
        <div className="flex flex-col gap-3">
          {experiences?.map((job, index) => (
            <CardExperience key={index} job={job} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
