import React from 'react';
import Header from '../../components/Header/Header';
import self from '../../images/self.jpeg';

const About = (props) => (
  <>
    <Header section="About" />
    <main
      className="about"
    >
      <div className="about__img--container">
        <img className="about__img" src={self} alt="Rise" />
      </div>
      <div className="about__text">
        <p>
          My name is Rise, and I studied sociology in college because I thought I didn&apos;t have
          the talent for engineering, science, or math. I found my way into education through
          teaching ESL in Japan, and discovered there that I really liked being in the classroom.
          Upon returning to the US, I made my first steps into the STEM career that I secretly
          always wanted when I decided to pursue a certification to teach high school math. As a
          teacher, my goal was to teach my students that their self-perceived weakness in math
          (or science, or tech) shouldn&apos;t hold them back from the careers they wanted.
        </p>
        <p>
          Through the opportunity to watch my students in online learning environments, I also
          cultivated a passion for online learning and earned an MS in Online Instructional design
          from Florida State University. This ultimately led to my desire to learn more about the
          code and technologies that power online learning tools and experiences. After completing
          a full-stack web development apprenticeship learning HTML, CSS, JavaScript, jQuery, React,
          Node, and Postgres, I am eager to be part of a team that helps to create solutions to 
          improve learning experiences and further eliminate the limits of what learners think they
          can do.
        </p>
        <p>
          If I won the lottery, I’d probably spend (some of) the money on learning something new.
          I love taking classes and learning new things, and some of my learning endeavors over 
          the years (aside from learning to code) have included math, Spanish, Japanese, and sewing.
        </p>
        <p>
          My other interests include fitness and nutrition, cooking, and cookie-decorating. As an 
          adult, I have called Hawaii, Oregon, Canada, Japan, Florida, and New Mexico home. I 
          currently live in beautiful Destin, Florida, where I am a proud military spouse and mom of
          two.
        </p>
        <p>
          Using the links below, you can view my work on GitHub, find me on LinkedIn, or email me.
        </p>
      </div>
    </main>
  </>
)

export default About;