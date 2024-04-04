import React from 'react'
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import { ListGroupItem } from "reactstrap";


function DrinkMenu({ drinks }) {
  return (
    <div>
      {drinks.map(drink => (
        <Link to={`/drinks/${drink.id}`} key={drink.id}>
            <ListGroupItem>{drink.name}</ListGroupItem>
        </Link>
      ))}
    </div>
  )
}

export default DrinkMenu;
