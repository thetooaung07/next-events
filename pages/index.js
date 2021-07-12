import React from "react";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {

  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  )
}

export default HomePage;
