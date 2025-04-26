import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Games from '../components/sections/Games';
import Values from '../components/sections/Values';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Games />
      <Values />
      <Team />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default Home;