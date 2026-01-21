import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import SectionDivider from './components/SectionDivider';

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <main>
        <Hero />
        <SectionDivider />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
