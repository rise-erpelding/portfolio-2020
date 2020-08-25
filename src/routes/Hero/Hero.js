import React from 'react';
import Header from '../../components/Header/Header';
import self from '../../images/self.jpeg';

const Hero = (props) => (
  <>
    <Header section="Hi! I'm Rise." />
    <main className="hero">
      <div>
        <img className="hero__self" src={self} alt="Rise" />
      </div>
      <p>
        I am a full-stack JavaScript developer proficient in ES6, React, Node, and PostgreSQL with
        six years’ experience in STEM education. I am passionate about learning technologies and
        online learning.
      </p>
    </main>
  </>
)

export default Hero;