import React from 'react';
import Header from '../../components/Header/Header';
import { ResHeading, ResSectionHeading, ResSectionHeadingWithLink, SectionHeading } from '../../utils/headings';

const Resume = () => (
  <>
    <Header section="Resume" />
    <main className="resume">
      <div className="resume__left">
        <section className="resume__section">
          <SectionHeading heading="Rise Erpelding" />
          <ResHeading heading="Web Developer" />
          <address className="resume__contact-info">
            <p className="u-margin-none">linkedin.com/in/riseerpelding</p>
            <p className="u-margin-none">codepen.io/riseerpelding</p>
          </address>
        </section>
        <section className="resume__section resume__summary">
          <ResHeading heading="Summary" />
          <p>Full-stack JavaScript developer proficient in ES6, React, Node, and PostgreSQL with six years’ experience in education. Passionate about using the web to create opportunities for everyone.</p>
        </section>
        <section className="resume__section resume__skills">
          <ResHeading header="Skills" />
          <ul className="resume__skills-list u-margin-none u-padding-none u-list-style-none">
            <li className="resume__skill">HTML</li>
            <li className="resume__skill">CSS</li>
            <li className="resume__skill">Sass</li>
            <li className="resume__skill">JavaScript</li>
            <li className="resume__skill">React</li>
            <li className="resume__skill">jQuery</li>
            <li className="resume__skill">PostgreSQL</li>
            <li className="resume__skill">Jest</li>
            <li className="resume__skill">Git</li>
          </ul>
        </section>
        <section className="resume__section resume__education">
          <ResHeading heading="Education" />
          <ResSectionHeading heading="Florida State University" />
          <p className="u-margin-none">M.S., Instructional Systems and Learning Technology (Major in Online & Distance Learning)</p>
          <p className="u-margin-none">GPA: 3.98</p>
          <ResSectionHeading heading="University of Portland" />
          <p className="u-margin-none">B.A., Sociology</p>
          <p className="u-margin-none">GPA: 3.6</p>
        </section>

      </div>
      <div className="resume__right">
        <section className="resume__section resume__projects">
          <ResHeading heading="Projects" />
          <ResSectionHeadingWithLink
            heading="Color Grid Game"
            href="https://github.com/rise-erpelding/color-grid-game"
            aria="link to Color Grid project repository"
          />
          <ul>
            <li>
              (In Progress). JavaScript web app allowing users to create a grid of colored tiles and play a game putting the mixed-up tiles back into the right order.
        </li>
            <li>
              Tech: JavaScript(ES6), HTML5, CSS3, Jest, Stryker
        </li>
          </ul>
          <ResSectionHeadingWithLink
            heading="Mix Ed"
            href="https://github.com/rise-erpelding/mixed-app"
            aria="link to Mix Ed project repository"
          />
          <ul>
            <li>
              Full-stack web app that enables teachers to create homogeneous or heterogeneous student
              groups based on student data. Project for Bloc web development program.
        </li>
            <li>
              Tech: React, React Router, Node.js, Express.js, JavaScript(ES6), CSS3, PostgreSQL,
              Jest, Mocha, Chai
        </li>
          </ul>
          <ResSectionHeadingWithLink
            heading="FarmPicks"
            href="https://github.com/rise-erpelding/farmpicks-client"
            aria="link to FarmPicks project repository"
          />
          <ul>
            <li>
              Full-stack web app that enables users to get information about local small farms,
              add/update information about existing farms, and save farms to a favorites list.
              Project for Bloc web development program.
        </li>
            <li>
              Tech: React, React Router, Node.js, Express.js, JavaScript(ES6), CSS3, PostgreSQL,
              Jest, Mocha, Chai
        </li>
          </ul>
          <ResSectionHeadingWithLink
            heading="Rabbit Hole"
            href="https://github.com/rise-erpelding/rabbit-hole"
            aria="link to Rabbit Hole project repository"
          />
          <ul>
            <li>
              jQuery web app that uses third-party APIs to enable users to search and listen to podcasts while exploring related Wikipedia articles.
              Project for Bloc web development program.
        </li>
            <li>
              Tech: JavaScript(ES6), HTML5, CSS3, jQuery
        </li>
          </ul>
          <ResSectionHeadingWithLink
            heading="GRE Vocabulary Quiz"
            href="https://rise-erpelding.github.io/jquery-quiz-app/"
            aria="link to GRE Vocabulary Quiz project"
          />
          <ul>
            <li>
              jQuery web app that helps users to study English vocabulary words that may appear
              on the Verbal Reasoning section of the GRE and see the words in context in popular
              literature and current publications. Project for Bloc web development program.
        </li>
            <li>
              Tech: JavaScript(ES6), HTML5, CSS3, jQuery
        </li>
          </ul>
        </section>
        <section className="resume__section resume__experience">
          <ResHeading heading="Experience" />
          <ResSectionHeading
            heading="Sparkbox | Full-stack Web Development Apprentice | January 2021 - Present"
          />
          <ul>
            <li>
              Collaboratively and individually built full-stack, mobile-first web applications using HTML, CSS/Sass, and JavaScript, and Git/GitHub for version control
        </li>
            <li>
              Improved skills in test-driven development, accessibility, and responsive design through participation in regular presentations and pairing sessions with experienced designers and developers
        </li>
            <li>
              Engaged in regular Scrum ceremonies--standups, demos, retrospectives--as well as decomp-ing and card-writing in an Agile environment
        </li>
          </ul>
          <ResSectionHeading
            heading="Rising Depth | Freelance Web Developer | September 2020 - December 2020"
          />
          <ul>
            <li>
              Developed front-end features and updates to display collected data for a machine learning company’s internal web application using React, Redux, Bootstrap, and Sass
        </li>
          </ul>
          <ResSectionHeading
            heading="Bloc | Full-Stack Software Engineering Program | August 2019 - September 2020"
          />
          <ul>
            <li>
              Developed and delivered front-end and full-stack projects using HTML & CSS, JavaScript, jQuery, React, Node.js, Express, PostgreSQL, and data structures and algorithms, developing projects while incorporating web accessibility and mobile-first development
        </li>
          </ul>
          <ResSectionHeading
            heading="Valiant Childbirth | Instructional Designer | July 2017 - June 2019"
          />
          <ul>
            <li>
              Researched and guided decision-making processes regarding online course delivery platforms and learning technologies for converting six-part childbirth education face-to-face course to an online course
        </li>
            <li>
              Collaborated with SME to adapt and develop learning materials and activities for online childbirth education course, including interactive assessments, text-based content, and decision-making tools for learners
        </li>
          </ul>
          <ResSectionHeading
            heading="318th Special Operations Squadron, USAF | Lead Spouse, Key Spouse Mentor | October 2015 - May 2019"
          />
          <ul>
            <li>
              Led and mentored a volunteer team of 5 key spouses to coordinate family outreach,
              fundraising, and social events to support families of a 125-person active duty special
              operations flying unit
        </li>
          </ul>
          <ResSectionHeading
            heading="24/7 Teach | Intern | May 2015 - August 2015"
          />
          <ul>
            <li>
              Trained 4-person team in the creation of original financial literacy learning content
              and animated videos
        </li>
            <li>
              Converted book-based learning assessment materials to online format using CMS
        </li>
          </ul>
          <ResSectionHeading
            heading="Navarre High School | Teacher, Virtual Learning Facilitator | August 2011 - June 2015"
          />
          <ul>
            <li>
              Developed and delivered high school math curriculum for Geometry and AP Statistics classes
        </li>
            <li>
              Maintained communication with students, parents, administrators, and guidance counselors
              to modify instruction to accommodate students’ learning needs
        </li>
            <li>
              Online & Virtual Learning Facilitator, August 2011 - June 2012 -- trained peers to administer online learning courses for students
        </li>
            <li>Substitute Teacher - August 2014 - June 2015</li>
          </ul>
        </section>
      </div>





    </main>
  </>
)

export default Resume;
