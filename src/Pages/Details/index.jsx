import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/auth.context";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function EventDetailsPage() {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  const {user} = useContext(AuthContext)
  const [isAdmin, setisAdmin] = useState(false)
  const checkAdmin = () => {
    if (user.email === "admin@admin.com"){
      setisAdmin(true)
    }
  }

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
    checkAdmin()
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    <div className="event-details">
      {event && (
        <div>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <img src={event.imageUrl} alt={event.title} />
        </div>
      )}

{isAdmin && (

      <Link to={`/events/edit/${eventId}`}>
        <button>Edit Event</button>
      </Link>
)}

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Google Map"
            width="338"
            height="338"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=ironhack&t=&z=16&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://2yu.co">2yu</a>
          <br />
          <style>
            {`.mapouter{position:relative;text-align:right;height:338px;width:338px;}
              .gmap_canvas{overflow:hidden;background:none!important;height:338px;width:338px;}`}
          </style>
          <a href="https://embedgooglemap.2yu.co">html embed google map</a>
        </div>
      </div>

      <Link to="/events">
        <button>Back to events</button>
      </Link>
    </div>
  );
}

export default EventDetailsPage;
