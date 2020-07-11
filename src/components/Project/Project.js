import React from 'react';
import { SectionHeading } from '../../utils/headings';

const Project = (props) => {
  return (
    <section>
      <SectionHeading heading={props.title} />
      <a href={props.liveLink}>Live App</a>
      {' '}|{' '}
      <a href={props.frontEndRepo}>Front End Repo</a>
      {props.backEndRepo ? ` | ` : '' }
      {props.backEndRepo ? <a href={props.backEndRepo}>Back End Repo</a> : '' }
      <p>
        <img className="project-gif" src={props.imgSrc} alt={props.imgAlt} />
      </p>
      <p>
        {props.summary}
      </p>
    </section>
  )
}

export default Project;