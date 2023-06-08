import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/auth.context";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function EventDetailsPage() {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  const { user } = useContext(AuthContext);
  const [isAdmin, setisAdmin] = useState(false);
  const checkAdmin = () => {
    if (user.email === "admin@admin.com") {
      setisAdmin(true);
    }
  };

  const getEvent = () => {
    axios
      .get(`${API_URL}/api/events/${eventId}`)
      .then((response) => {
        const oneEvent = response.data;
        setEvent(oneEvent);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEvent();
    checkAdmin();
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    <div className="event-details">
      {event && (
        <div className="perEvent">
          <h1 className="titleEvent">{event.title}</h1>
          <p>{event.description}</p>
          <img src={event.imageUrl} alt={event.title} />
        </div>
      )}

      {isAdmin && (
        <Link to={`/events/edit/${eventId}`}>
          <button>Edit Event</button>
        </Link>
      )}
      <Link to="/events">
        <button>Back to events</button>
      </Link>
    </div>
  );
}

export default EventDetailsPage;
