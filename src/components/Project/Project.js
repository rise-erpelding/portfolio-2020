import React from 'react';
import { SectionHeading } from '../../utils/headings';

const Project = (props) => {
  return (
    <section className="project">
      <SectionHeading heading={props.title} />
      <a href={props.liveLink}>Live App</a>
      {' '}|{' '}
      <a href={props.frontEndRepo}>Front End Repo</a>
      {props.backEndRepo ? ` | ` : '' }
      {props.backEndRepo ? <a href={props.backEndRepo}>Back End Repo</a> : '' }
      <p>
        <img className="project-gif--mobile" src={props.mobileImgSrc} alt={props.imgAlt} />
        <img className="project-gif--widescreen" src={props.imgSrc} alt={props.imgAlt} />
      </p>
      <p className="project--description">
        {props.summary}
      </p>
    </section>
  )
}

export default Project;