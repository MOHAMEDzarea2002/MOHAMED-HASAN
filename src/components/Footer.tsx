import Container from './Container';
import { Link2, Mail, ArrowUp } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function Footer() {
  return (
    <section className="py-30 bg-Neutral dark:bg-primary shadow-sm shadow-primary dark:shadow-Neutral/40">
      <Container>
        <div className="flex justify-between flex-col  sm:flex-row sm:items-center  gap-5 ">
          {/* name & Job */}
          <div>
            <div className="flex  items-center  gap-2.5">
              <h2 className="sm:text-lg dark:text-Neutral font-semibold">MOHAMED HAMDI HASAN</h2>
              <div className="h-1 w-1 rounded-full bg-amber-300 animate-ping text-sm"></div>
              <span className=" text-amber-500 dark:text-amber-200 text-sm">Sales Executive</span>
            </div>
            <p className="dark:text-Neutral/60 mt-1 ms:mt-5">
              Sales Executive | B2B & Retail Sales
            </p>
          </div>
          <nav>
            <ul className="flex items-center gap-5 dark:text-Neutral">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-zarea-/?isSelfProfile=true"
                  className="flex items-center gap-1 cursor-pointer"
                  rel="noopener noreferrer"
                  target="_top"
                >
                  <Link2 size={22} />
                  Linkedin
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1 cursor-pointer">
                  <Mail size={22} />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201500156969"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <IoLogoWhatsapp size={22} />
                </a>
              </li>
              <li>
                <a href="#hero" className="flex items-center gap-1 cursor-pointer">
                  <ArrowUp size={22} />
                  Back To Top
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
