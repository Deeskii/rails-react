import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);
  
  function getFact() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data));
	}
  
  return (
    <div>
      <h3>Hello, {name} 👀 this!</h3>
      <hr />
        <div className="container text-center">
        <h1>Chuck Norris Facts</h1>
        <button type="button" 
          className="btn btn-primary"
          onClick={getFact()}>
          More Chuck Facts!
        </button>
      </div>
	 <hr />
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
