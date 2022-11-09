import React from 'react';

export default function Person({ name, job, desc, imgSrc }) {
  return (
    <article className="person">

      <div className="person-image-container">

        <img className="person__image" src={imgSrc}/>

      </div>

      <div>

        <h3 className="heading person__name">{name}</h3>

        <span className="person__job">{job}</span>

        <p className="person__desc">{desc}</p>

      </div>

    </article>
  );
}