import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

// my imports
import DrinkMenu from "./DrinkMenu";
import DrinkItem from "./DrinkItem";
import useFetchData from "./useFetchData";


function App() {
  const { data: snacks, isLoading: isLoadingSnacks } = useFetchData('getSnacks');
  const { data: drinks, isLoading: isLoadingDrinks } = useFetchData('getDrinks');

  if (isLoadingSnacks || isLoadingDrinks) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>

            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <DrinkMenu drinks={drinks} title="Drinks" />
            </Route>

            <Route path="/drinks/:id">
              <DrinkItem items={drinks} cantFind="/drinks" />
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
