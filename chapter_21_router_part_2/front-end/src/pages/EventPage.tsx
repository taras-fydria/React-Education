import EventsList from "../components/EventsList";
import { useEventsLoaderData } from "../hooks";

function EventsPage() {
  const data = useEventsLoaderData();

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;
