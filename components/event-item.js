import Link from "next/link";
import Image from "next/image"

import classes from "./event-item.module.css"

export const EventItem = (props) => {

   const {title, image, date, location, id} = props;

   const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      day: 'numeric',
      month: 'long',
      year: "numeric"
   })

   const formattedAddress = location.replace(", ", "\n");

   const exploreLink = `/events/${id}`;

   return (
      <li className={classes.item}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img src={'/' + image} alt={title} />
         <div className={classes.content}>
            <div className={classes.summery}>
               <h2>{title}</h2>
               <div className={classes.date}>
                  <time>{humanReadableDate}</time>
               </div>
               <div className={classes.address}>
                  <address>{formattedAddress}</address>
               </div>
            </div>
            <div className={classes.actions}>
               <Link href={exploreLink}>Explore Event</Link>
            </div>
         </div>
      </li>
   )
}
 