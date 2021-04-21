import React from 'react';

const Drinks = ({ winningDrink }) => {
  if (winningDrink === []) {
    return ([]);
  }
  function randSubcategory() {
    const options = ['free!', 'nice', 'warm', 'piping hot', 'fragrant', 'soothing', 'perky'];
    return options[Math.ceil(Math.random() * 7) - 1];
  }
  const result = randSubcategory();
  return (
    <div id='list'>
      <div className="card" >
        <h3 className="card-title"><b id="won">You've just won</b><br /> a {result} <br /> {winningDrink.name}</h3>
        <img src={winningDrink.image} className="card-img-top" alt={`${winningDrink.name} photo`} />
        <div className="card-body">
          <p className="card-text">{winningDrink.description}</p>
        </div>
        <ul className="list-group">
          <li className="card-text"><b className="list-group-item">Ratio:</b> {winningDrink.ratio}</li>
          <li className="card-text"><b className="list-group-item">Cup:</b> {winningDrink.cup}</li>
        </ul>
      </div>
    </div>
  )
};

export default Drinks;