import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { TechStack } from './components/sections/TechStack';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <TechStack />
    </main>
  );
}
