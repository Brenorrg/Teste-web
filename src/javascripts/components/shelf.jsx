import React from 'react';

const Shelf = (props) => (
  <li className="shelf" key={props.id}>
    <div className="shelf-image">
      <img src={props.image} alt="" />
      {props.flag &&
        <span className="shelf-image--flag">{props.flag}</span>
      }
      {props.fastBuy &&
        <span className="shelf-image--fastBuy">{props.fastBuy}</span>
      }
    </div>
    <h2 className="shelf-name">{props.name}</h2>
    <div className="shelf-prices">
      <p className="shelf-prices--listPrice">{props.listPrice}</p>
      <p className="shelf-prices--bestPrice">{props.bestPrice}</p>
      <p className="shelf-prices--installmentsPrice">{props.installmentsPrice}</p>
    </div>
  </li>
);

export default Shelf;