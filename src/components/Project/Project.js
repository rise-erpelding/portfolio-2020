import React from 'react';
import { SectionHeading } from '../../utils/headings';

const Project = (props) => (
  <section>
    <SectionHeading heading={props.title} />
    <a href={props.liveLink}>Live link</a>
    {' '}|{' '}
    <a href={props.frontEndRepo}>Link to FrontEnd Repo</a>
    <p>
      {props.summary}
    </p>
  </section>
);

export default Project;