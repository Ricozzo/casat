import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddEvent from "../AddEvent";

const API_URL = "http://localhost:5005";

function EventsListPage() {
  const [events, setEvents] = useState([]);

  const getAllEvents = () => {
    axios
      .get(`${API_URL}/api/events`)
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="event-list-page">
      <AddEvent refreshEvents={getAllEvents} />
      <div className="event-card-container">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <Link to={`/events/${event._id}`}>
              <div className="event-content">
                <div className="event-image">
                  <img src={event.imgUrl} alt="" className="event-image" />
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsListPage;
