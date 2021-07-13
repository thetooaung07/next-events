import React from "react";
import Link from "next/dist/client/link";
import classes from "./main-header.module.css"

export const MainHeader = () => {
  return (
   <header className={classes.header}>
   <div className={classes.logo}>
     <Link href='/'>NextEvents</Link>
   </div>
   <nav className={classes.navigation}>
     <ul>
       <li>
         <Link href='/events'>Browse All Events</Link>
       </li>
     </ul>
   </nav>
 </header>
  );
};
