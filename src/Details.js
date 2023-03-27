import React, { useState, useEffect } from 'react';

// to know what pokemon we have clicked on we need to pass  props
export const Details = (props) => {
  const [details, setDetails] = useState();
  console.log(details);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, [props]);

  return (
    <div>
      <h1>{props.name}</h1>
      {details && <img src={details.sprites.front_default} alt="pokemon" />}
    </div>
  );
};

// {details} we want to show this only when we click on selected pokemon
// {props.name} this is displaying clicked name
