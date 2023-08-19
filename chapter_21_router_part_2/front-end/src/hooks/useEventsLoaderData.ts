import { useLoaderData } from "react-router-dom";
import { EventItem } from "../types";

export const useEventsLoaderData = () => useLoaderData() as Awaited<{events: EventItem[]}>;
