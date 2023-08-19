import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

interface EventNavItemObj {
  to: string;
  label: string;
  end?: boolean;
}

const DATA: EventNavItemObj[] = [
  {
    to: "/events",
    label: "All Events",
  },
  {
    to: "/events/new",
    label: "New Events",
  },
];

function EventsNavigation() {
  return (
    <header className={classes.header}>
      {DATA && DATA.length && (
        <nav>
          <ul className={classes.list}>
            {DATA.map((item, index) => (
              <li key={index}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default EventsNavigation;
