import React from "react";
import Head from "next/head"
import { getAllEvents } from "../../helper/api-utils";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/dist/client/router";

function AllEventsPage(props) {
  const router = useRouter();
  const {events} = props

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
     <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventSearch onSearch={findEventHandler}></EventSearch>
      <EventList items={events}></EventList>
    </div>
  );
}


export async function getStaticProps() {
  const events = await getAllEvents();

  return {
     props: {
       events: events
     },
     revalidate: 60
  }
}

export default AllEventsPage;
