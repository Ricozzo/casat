import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, useParams} from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function EventDetailsPage() {
  // write state. By default it'll be null because we don't have
  // the event
  const [event, setEvent] = useState(null);

  // grab the EventId from route params
  const {eventId} = useParams();
  
  // function to call axios to do a GET request 
  // to find a Event by the Id. 
  const getEvent = () =>{
    axios.get(`${API_URL}/api/events/${eventId}`)
    .then((response)=>{
        const oneEvent = response.data; 
        setEvent(oneEvent);
    })
    .catch((error)=>console.log(error));
  }

  // Side-effect after initial render of the component.
  // The empty array must be as a parameter to tell to React that 
  // it'll happen after it renders the component

  useEffect(()=>{
    getEvent();
  }, [])

  return (
    <div className="event-details">
      {event && (
        <div>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
      )}
        
      <Link to={`/events/edit/${eventId}`}>
        <button>Edit Event</button>
      </Link>      
 
      <Link to="/events">
        <button>Back to events</button>
      </Link>
    </div>
  )
}

export default EventDetailsPage