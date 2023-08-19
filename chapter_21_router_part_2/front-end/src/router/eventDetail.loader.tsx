import { LoaderFunctionArgs, json } from "react-router-dom";
import { EventItem } from "../types";

const eventDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const eventID = params.eventID;
  const response = await fetch(`http://localhost:8080/events/${eventID}`);
  
  if (!response.ok) {
    throw json<{ message: string }>(
      {
        message: "Could not fetch detail event page",
      },
      {
        status: 500,
      }
    );
  }
  const data = await response.json()
  
  const event: EventItem = data.event
  
  return event;
};

export default eventDetailLoader;
export type EventLoaderData = Awaited<ReturnType<typeof eventDetailLoader>>