import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      {navigation.state === 'loading' && (
        <p>
            Loading Data
        </p>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
