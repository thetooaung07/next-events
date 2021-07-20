import React from "react";
import Head from "next/head";
import { getFeaturedEvents } from "../helper/api-utils";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={props.events}></EventList>
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
