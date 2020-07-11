import React from 'react';
import Header from '../../components/Header/Header';
import Project from '../../components/Project/Project';
import projectStore from './project-store';
import farmpicks from '../../images/farmpicks.gif';
import greQuizApp from '../../images/greQuizApp.gif';
import rabbitHole from '../../images/rabbitHole.gif';

const Projects = (props) => {
  const quizProj = projectStore[0];
  const rabbitHoleProj = projectStore[1];
  const farmpicksProj = projectStore[2];

  return (
    <>
    <Header section="Projects" />
    <main>
      <Project
        key={farmpicksProj.id}
        title={farmpicksProj.title}
        liveLink={farmpicksProj.liveLink}
        frontEndRepo={farmpicksProj.frontEndRepo}
        backEndRepo={farmpicksProj.backEndRepo}
        imgSrc={farmpicks}
        imgAlt="farmpicks app gif"
        summary={farmpicksProj.summary}
      />
      <Project
        key={rabbitHoleProj.id}
        title={rabbitHoleProj.title}
        liveLink={rabbitHoleProj.liveLink}
        frontEndRepo={rabbitHoleProj.frontEndRepo}
        imgSrc={rabbitHole}
        imgAlt="rabbit hole app gif"
        summary={rabbitHoleProj.summary}
      />
      <Project
        key={quizProj.id}
        title={quizProj.title}
        liveLink={quizProj.liveLink}
        frontEndRepo={quizProj.frontEndRepo}
        imgSrc={greQuizApp}
        imgAlt="gre quiz app gif"
        summary={quizProj.summary}
      />
    </main>
  </>
  )
}

export default Projects;