import { FC, ReactNode } from "react";
import classes from "./PageContent.module.css";

const PageContent: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
