import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

import fs from "fs";
import path from "path";

function HomePage({ products }) {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
    
      <EventList items={featureEvents}></EventList>
    </div>
  );
}



export default HomePage;
