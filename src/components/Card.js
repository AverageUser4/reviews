import React from 'react';

import Person from './Person.js';
import Controlls from './Controlls.js';

import reviews from '../resources/reviews.js';

export default function Card() {
  const [index, setIndex] = React.useState(0);

  let noData = false;
  if(!Array.isArray(reviews) || reviews.length === 0)
    noData = true;


  return (
    <section className="card">

      {
        noData ? 
          <span>We are so sorry! Unfortunately we could not find any data regarding your request!</span>
        :
        <>

          <Person
            id={reviews[index].id}
            name={reviews[index].name}
            job={reviews[index].job}
            desc={reviews[index].text}
            imgSrc={reviews[index].image}
          />

          <Controlls
            maxIndex={reviews.length - 1}
            setIndex={setIndex}
          />

        </>
      }

    </section>
  );
}