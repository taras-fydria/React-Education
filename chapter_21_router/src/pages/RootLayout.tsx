import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/extra-files/MainNavigation";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
