import React from 'react';
import { News } from './components/News/News';
import {  Bureaus } from './components/Bureaus/Bureaus';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { AboutETS} from './components/AboutETS/About';
import { Clubs } from './components/Clubs/Clubs';
import { WebTeam } from './components/WebTeam/WebTeam';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutETS/>
      <Bureaus />
      <Clubs/>
      <WebTeam/>
      <News />
      <Footer />
    </>
  );
};
