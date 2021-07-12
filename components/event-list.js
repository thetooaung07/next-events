import React from "react";
import { EventItem } from "./event-item";
import cls from "./event-list.module.css"

export const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={cls.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
