"use client";

import React, { useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import api from "../../lib/axios";
import { API_ENDPOINTS } from "../../lib/apiConfig";

interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

// Dữ liệu cứng fallback (dùng khi không gọi API)
const fallbackEvents: Event[] = [
  {
    id: 1,
    image: "/events/event-1.png",
    title: "Electrician course for electricians with SEP licence",
    date: "23.05.2021",
    location: "London, UK",
    description:
      "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
  },
  {
    id: 2,
    image: "/events/event-2.png",
    title: "Interior design and decoration",
    date: "04-06.11.2021",
    location: "London, UK",
    description:
      "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
  },
  {
    id: 3,
    image: "/events/event-3.png",
    title: "AutoCAD 2d basic level",
    date: "15.06.2021",
    location: "London, UK",
    description:
      "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
  },
  {
    id: 4,
    image: "/events/event-4.png",
    title: "Paving engineer with a road construction machine licence",
    date: "31.03.2021",
    location: "London, UK",
    description:
      "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
  },
];

export const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get(API_ENDPOINTS.events);
        setEvents(res.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents(fallbackEvents); // fallback khi lỗi
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading events...</div>;
  }

  return (
    <section className="w-full max-w-[1264px]">
      <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mt-10">
        <h2 className="text-3xl font-bold leading-tight text-neutral-950">Events for you</h2>
        <button className="flex gap-1 items-center my-auto text-base font-medium text-blue-600">
          <span>Show all events</span>
          <img src="arrowright.png" alt="Arrow right" className="w-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-5 items-start mt-8">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
};