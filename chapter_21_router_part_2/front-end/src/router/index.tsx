import { RouteObject, createBrowserRouter } from "react-router-dom";
import EventsPage from "../pages/EventPage";
import EventDetail from "../pages/EventDetail";
import NewEventPage from "../pages/NewEventPage";
import Home from "../pages/Home";
import Root from "../pages/Root";
import EventsRoot from "../pages/EventsRoot";
import eventsLoader from "./events.loader";
import ErrorPage from "../pages/ErrorPage";
import eventDetailLoader from "./eventDetail.loader";
import EditEvent from "../pages/EditEvent";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventID",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              {
                path: "edit",
                element: <EditEvent />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;
