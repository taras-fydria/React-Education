import { FC } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

interface NavItemObject {
  to: string;
  label: string;
  end?: boolean;
  children?: NavItemObject[];
}

const DATA: NavItemObject[] = [
  {
    label: "Home",
    to: "/",
    end: true,
  },
  {
    label: "Events",
    to: "/events",
  },
];

function MainNavigation() {
  return (
    <header className={classes.header}>
      {DATA && DATA.length && (
        <nav>
          <ul className={classes.list}>
            {DATA.map((item, index) => (
              <li key={index}>
                <NavItem {...item} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

const NavItem: FC<NavItemObject> = ({ to, label, end, children }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={(isActive) => (isActive ? classes.active : classes.a)}
    >
      <span>{label}</span>
      {children?.length && (
        <ul>
          {children?.map((item, index) => (
            <li key={index}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>
      )}
    </NavLink>
  );
};

export default MainNavigation;
