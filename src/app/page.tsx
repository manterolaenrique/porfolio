import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
