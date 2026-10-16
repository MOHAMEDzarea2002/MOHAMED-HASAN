import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Language from './components/Languages';
import Nave from './components/Nave';
import Skills from './components/Skills';
import Summary from './components/Summary';

function App() {


  return (
    <div className="dark:bg-primary  ">
      <Nave />
      <Hero/>
      <Summary/>
      <Experience/>
      <Achievements/>
      <Language/>
      <Education/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
