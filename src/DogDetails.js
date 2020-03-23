import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import './DogDetails.css';
import { dogs } from './DogsData';

const DogDetails = ({ match }) => {
  const name = match.params.name;
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div className="DogDetails row justify-content-center mt-5">
      <div className="col-11 col-lg-5">
        <div className="DogDetails-card card">
          <img className="card-img-top" src={dog.src} alt={dog.name} />
          <div className="card-body">
            <h2 className="card-title">{dog.name}</h2>
            <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
          </div>
          <ul className="list-group list-group-flush">
            {dog.facts.map((fact, i) => (
              <li className="list-group-item" key={i}>
                {fact}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <Link to="/dogs" className="btn btn-info">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DogDetails);
