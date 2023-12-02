import React from 'react'
import NavBar from './Components/NavBar'
import { Section1 } from './Components/Section1';
import { Section2 } from "./Components/Section2";
import { Section3 } from './Components/Section3';
import { FAQ } from './Components/FAQ';
import { Pricing } from './Components/Pricing';
import { Testimonial } from './Components/Testimonial';
import { Footer } from './Components/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <FAQ/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
export default App;