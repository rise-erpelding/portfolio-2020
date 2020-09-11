import React from 'react';

export function SectionTitle(props) {
  const { title } = props;
  return (
    <h1 className="section-title">{title}</h1>
  );
}

export function SectionHeading(props) {
  const { heading } = props;
  return (
    <h2 className="section-heading">{heading}</h2>
  );
}

export function ResHeading(props) {
  const { heading } = props;
  return (
    <h2 className="resume-heading">{heading}</h2>
  );
}

export function ResSectionHeading(props) {
  const { heading } = props;
  return (
    <h3 className="resume-heading">{heading}</h3>
  );
}

export function ResSectionHeadingWithLink(props) {
  const { heading, href, aria } = props;
  return (
    <h3 className="resume-heading--with-link">{heading} 
      {' '}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={aria}
      >
        (Link)
      </a>
    </h3>
  );
}
