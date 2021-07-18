import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

import fs from "fs";
import path from "path";

function HomePage({ products }) {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
      {/* <EventList items={featureEvents}></EventList> */}
    </div>
  );
}

export async function getStaticProps(context) {

  console.log(`context in getStaticProps => ${context}`);
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  console.log(`filePath => ${filePath}`);
  console.log(`jsonData => ${jsonData}`);
  console.log(`data => ${data}`);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
