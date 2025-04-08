import React from 'react';

const ComponentTest01 = (props) => {
  console.log(props)
  const {name, age, address, style} = props
  return (
    <div style = {props.style}>
      <p>{name}</p>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  );
};

export default ComponentTest01;