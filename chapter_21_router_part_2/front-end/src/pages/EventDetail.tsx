import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { EventLoaderData } from "../router/eventDetail.loader";

const EventDetail = () => {
  const data = useLoaderData() as EventLoaderData;
console.log(data);
  return <EventItem event={data} />;
};

export default EventDetail;
