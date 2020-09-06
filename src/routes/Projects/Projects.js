import React from 'react';
import Header from '../../components/Header/Header';
import Project from '../../components/Project/Project';
import projectStore from './project-store';
import farmpicks from '../../images/farmpicks.gif';
import farmpicksMobile from '../../images/farmpicksMobile.gif';
import greQuizApp from '../../images/greQuizApp.gif';
import rabbitHole from '../../images/rabbitHole.gif';
import rabbitHoleMobile from '../../images/rabbitHoleMobile.gif';
import mixEd from '../../images/mixEd.gif';
import mixEdMobile from '../../images/mixEdMobile.gif';

const Projects = () => {
  const quizProj = projectStore[0];
  const rabbitHoleProj = projectStore[1];
  const farmpicksProj = projectStore[2];
  const mixEdProj = projectStore[3];

  return (
    <>
    <Header section="Projects" />
    <main
      style={{
        textAlign: `left`,
      }}
    >
      <Project
        key={mixEdProj.id}
        title={mixEdProj.title}
        liveLink={mixEdProj.liveLink}
        frontEndRepo={mixEdProj.frontEndRepo}
        backEndRepo={mixEdProj.backEndRepo}
        mobileImgSrc={mixEdMobile}
        imgSrc={mixEd}
        imgAlt="mix ed app gif"
        summary={mixEdProj.summary}
      />
      <Project
        key={farmpicksProj.id}
        title={farmpicksProj.title}
        liveLink={farmpicksProj.liveLink}
        frontEndRepo={farmpicksProj.frontEndRepo}
        backEndRepo={farmpicksProj.backEndRepo}
        mobileImgSrc={farmpicksMobile}
        imgSrc={farmpicks}
        imgAlt="farmpicks app gif"
        summary={farmpicksProj.summary}
      />
      <Project
        key={rabbitHoleProj.id}
        title={rabbitHoleProj.title}
        liveLink={rabbitHoleProj.liveLink}
        frontEndRepo={rabbitHoleProj.frontEndRepo}
        mobileImgSrc={rabbitHoleMobile}
        imgSrc={rabbitHole}
        imgAlt="rabbit hole app gif"
        summary={rabbitHoleProj.summary}
      />
      <Project
        key={quizProj.id}
        title={quizProj.title}
        liveLink={quizProj.liveLink}
        frontEndRepo={quizProj.frontEndRepo}
        mobileImgSrc={greQuizApp}
        imgSrc={greQuizApp}
        imgAlt="gre quiz app gif"
        summary={quizProj.summary}
      />
    </main>
  </>
  )
}

export default Projects;