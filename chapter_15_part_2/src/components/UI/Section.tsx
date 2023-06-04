import classes from './Section.module.css';
import {FC, ReactNode} from "react";

const Section: FC<{ children: ReactNode }> = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
