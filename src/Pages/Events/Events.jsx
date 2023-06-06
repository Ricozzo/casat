import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddEvent from "../AddEvent";

// Pass the API_URL

const API_URL = "http://localhost:5005";

// STEPS TO DO:
// 1) Get the Events.
// 2) How can I do this? I make a Get request
// to my backend via Axios.
// 3) We'll store the events in the State.
// 4) We map through all the elements of events'
// array that is in the State.

function EventsListPage() {
  const [events, setEvents] = useState([]);

  // function that gets events via axios
  const getAllEvents = () => {
    axios
      .get(`${API_URL}/api/events`)
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  };
  // setting a side-effect after initial rendering of component that is
  // calling getAllEvents function
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="event-list-page">
      <AddEvent refreshEvents={getAllEvents} /> {/* ADD */}
      {events.map((event) => {
        return (
          <div className="event-card card" key={event._id}>
            <Link to={`/events/${event._id}`}>
              <div className="event-content">
                <div className="event-text">
                  <h3>{event.title}</h3>
                  <h4>{event.description}</h4>
                </div>
                <div className="event-image">
                  <img
                    src={event.imgUrl}
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EventsListPage;
