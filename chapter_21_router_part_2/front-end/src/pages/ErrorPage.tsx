import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError() as Response | Error;
  let title = "An Error occure!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Foud!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <MainNavigation />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </>
  );
};

export default ErrorPage;
