import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

interface INavItem {
  label: string;
  to: string;
  children?: AppNavLink;
  end: boolean;
}

type AppNavLink = INavItem[];

const NAV: AppNavLink = [
  {
    label: "Home",
    to: "/",
    end: false,
  },
  {
    label: "Products",
    to: "/products",
    end: false,
  },
];

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      {NAV && NAV.length && (
        <nav>
          <ul className={classes.list}>
            {NAV.map(({ label, to, children, end }, index) => (
              <li key={index}>
                <NavItem label={label} to={to} children={children} end={end} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const NavItem: FC<INavItem> = ({ label, to, children, end }) => {
  return (
    <NavLink
      to={to}
      className={(isActive) => (isActive ? classes.active : classes.a)}
      end={end}
    >
      {label}
      {children && children.length && (
        <ul>
          {children.map((item, index) => (
            <li key={index}>
              <NavItem
                label={item.label}
                to={item.to}
                children={item.children}
                end={item.end}
              />
            </li>
          ))}
        </ul>
      )}
    </NavLink>
  );
};

export default MainNavigation;
