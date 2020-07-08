import React from 'react';
import Header from '../../components/Header/Header';
import Project from '../../components/Project/Project';
import projectStore from './project-store';

const Projects = (props) => {
  const myProjects = projectStore.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      liveLink={project.liveLink}
      frontEndRepo={project.frontEndRepo}
      summary={project.summary}
    />
  ));
  return (
    <>
    <Header section="Projects" />
    <main>
      {myProjects}
    </main>
  </>
  )
}

export default Projects;