import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { EventLoaderData } from "../router/eventDetail.loader";

const EditEvent = () => {
  const event = useLoaderData() as EventLoaderData;
  return <EventForm event={event} />;
};

export default EditEvent;
