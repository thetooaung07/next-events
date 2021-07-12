import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list";

function HomePage() {

  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>

      <EventList items={featureEvents}></EventList>
    </div>
  )
}

export default HomePage;
