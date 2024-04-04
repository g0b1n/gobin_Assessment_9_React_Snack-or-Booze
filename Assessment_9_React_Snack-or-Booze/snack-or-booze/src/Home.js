import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            We currently offer {snacks.length} food items (snacks) and {drinks.length} drink choices.
          </p>
          <h3>
            Check out our <Link to="/snacks">Snacks</Link> and <Link to="/drinks">Drinks</Link>.
          </h3>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
