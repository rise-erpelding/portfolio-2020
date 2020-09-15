import css3 from '../../images/icons/css3.svg';
import express from '../../images/icons/express.svg';
import html from '../../images/icons/html.svg';
import jquery from '../../images/icons/jquery.svg';
import nodejs from '../../images/icons/nodejs.svg';
import postgresql from '../../images/icons/postgresql.svg';
import react from '../../images/icons/react.svg';

const projectStore = [
  {
    id: 1,
    title: 'GRE Quiz App',
    frontEndRepo: 'https://github.com/rise-erpelding/jquery-quiz-app',
    liveLink: 'https://rise-erpelding.github.io/jquery-quiz-app/',
    summary: `This is a quiz app built using JavaScript and jQuery. Intended for aspiring graduate students studying for the GRE, the app tests users’ knowledge of
    GRE vocabulary words via multiple-choice questions, giving examples of the words in a
    context similar to what a user might encounter in graduate-level studies.`,
    background: `I built this app because it is really valuable when studying vocabulary words to see them used in context. Further, seeing the words used in the news or in popular fiction is often more interesting and engaging to students.`,
    technologiesList: [
      {
        name: 'Jquery',
        iconSrc: jquery,
        className: 'project__technologies--icon'
      },
      {
        name: 'HTML 5',
        iconSrc: html,
        className: 'project__technologies--icon'
      },
      {
        name: 'CSS 3',
        iconSrc: css3,
        className: 'project__technologies--icon'
      }
    ]
  },
  {
    id: 2,
    title: 'Rabbit Hole',
    frontEndRepo: 'https://github.com/rise-erpelding/rabbit-hole',
    liveLink: 'https://rise-erpelding.github.io/rabbit-hole/',
    summary: `Rabbit Hole is a search engine that allows podcast listeners to find educational podcasts. Users can listen to podcasts in the app, and also see links to Wikipedia articles that may be related to the podcast episode they are listening to. Users also have the option to search Wikipedia or click on links to other wikipedia articles inside the app, allowing for a user experience akin to "falling down a rabbit hole."`,
    background: `Podcasts cover such a great variety of topics and are such an amazing way to learn about something new. So many times, while listening, I find myself wanting to look up something I've heard about in a podcast. This app takes the description of the podcast and suggests Wikipedia articles that may be of interest to the listener that they can read while they are listening.`,
    technologiesList: [
      {
        name: 'Jquery',
        iconSrc: jquery,
        className: 'project__technologies--icon'
      },
      {
        name: 'HTML 5',
        iconSrc: html,
        className: 'project__technologies--icon'
      },
      {
        name: 'CSS 3',
        iconSrc: css3,
        className: 'project__technologies--icon'
      }
    ]
  },
  {
    id: 3,
    title: 'FarmPicks',
    frontEndRepo: 'https://github.com/rise-erpelding/farmpicks-client',
    backEndRepo: 'https://github.com/rise-erpelding/farmpicks-server',
    liveLink: 'https://farmpicks.vercel.app/',
    summary: `FarmPicks is a directory app that allows users seeking information about local farms
    to search and browse farms and get information about them. Users can also save farms
    to their favorites to revisit later, and be part of the community effort to improve
    existing information about farms.`,
    background: `I built this app because I saw that the rise of COVID-19 in March and April of 2020 made many Americans question if whether they could be obtaining the food they eat in a more sustainable and ethical way. While supporting small farms is a great idea for so many reasons, finding information on these farms and ordering products from them is often still much more time-consuming than shopping at the local grocery store. FarmPicks seeks to assist with that by providing directory-like information about farms and specifically including information about how to obtain a farm's products.`,
    technologiesList: [
      {
        name: 'React',
        iconSrc: react,
        className: 'project__technologies--icon'
      },
      {
        name: 'CSS 3',
        iconSrc: css3,
        className: 'project__technologies--icon'
      },
      {
        name: 'PostgreSQL',
        iconSrc: postgresql,
        className: 'project__technologies--icon'
      },
      {
        name: 'Node.js',
        iconSrc: nodejs,
        className: 'project__technologies--icon-node'
      },
      {
        name: 'Express.js',
        iconSrc: express,
        className: 'project__technologies--icon-express'
      }
    ]
  },
  {
    id: 4,
    title: 'Mix Ed',
    frontEndRepo: 'https://github.com/rise-erpelding/mixed-app',
    backEndRepo: 'https://github.com/rise-erpelding/mixed-api',
    liveLink: 'https://mixed-app.vercel.app/',
    summary: `Mix Ed is a group generator app that allows K-12 teachers to create student groups based on student data. Teachers input students' names and grouping data for each student. Then, teachers can decide on group attributes and click generate. Adjusting these groups is a breeze--teachers can drag and drop students' names to edit groups--and generated groupings can be saved according to class for easy access or editing later on.`,
    background: `I built this app because group-based learning has so many benefits, but existing group generator apps only generate groups randomly. A well-formed group that takes into account the qualities of the student (such as abilities, personality, and interests) can make a big difference in student learning, but generating appropriate groups for students can be time-consuming. Mix Ed aims to solve that problem by creating intelligent groups using student data, which often already exists in the teacher's gradebook.`,
    technologiesList: [
      {
        name: 'React',
        iconSrc: react,
        className: 'project__technologies--icon'
      },
      {
        name: 'CSS 3',
        iconSrc: css3,
        className: 'project__technologies--icon'
      },
      {
        name: 'PostgreSQL',
        iconSrc: postgresql,
        className: 'project__technologies--icon'
      },
      {
        name: 'Node.js',
        iconSrc: nodejs,
        className: 'project__technologies--icon-node'
      },
      {
        name: 'Express.js',
        iconSrc: express,
        className: 'project__technologies--icon-express'
      }
    ]
  }
]

export default projectStore;