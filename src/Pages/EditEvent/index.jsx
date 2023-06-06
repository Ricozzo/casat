import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL= 'http://localhost:5005';

// useState => React Hook that stores data inside a React Component
// aka store it into React Component' state. 

// useEffect => React Hook that creates side-effects, changing a state
// variable or mounting / unMounting a React Component. 

// useParams => React Router Dom method to call Route Params. 

// useNavigate => React Router Dom method to redirect to a different
// route. 

// axios => service that creates http requests to REST APIs. 

// STEPS: 
// 1) Grab Route Params (eventId). 
// 2) Call Axios to get specific info of a event.
// 3) Create a Form. 
// 4) Handle Change of Inputs' Content. 
// 5) Handle Submit.
// 6) Create a Delete Event Function.

function EditEventPage() {
    // Write State 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // req.params => Express 
    // useParams() => ReactJS

    const {eventId} = useParams();

    const navigate = useNavigate();

    // Have a Side-Effect after initial rendering of component
    useEffect(()=>{
        axios.get(`${API_URL}/api/events/${eventId}`)
        .then((response)=>{
            const oneEvent = response.data; 
            setTitle(oneEvent.title);
            setDescription(oneEvent.description);
        })
        .catch((error)=>{
            console.log(error)
        })

    }, [eventId]);

    // Create a function that Handles Form Submit 
    const handleFormSubmit = (e)=>{
        // prevent the default action of the form => refreshing the page
        e.preventDefault();

        // store title, description that is going to be received
        // in ExpressJS as req.body.
        const requestBody = {title, description};      

        // make a PUT request to update the event
        axios.put(`${API_URL}/api/events/${eventId}`, requestBody )
             .then((response)=>{
                navigate(`/events/${eventId}`)
             })
             .catch((error)=>{
                console.log(error)
             })
    }

    // Create a delete event function 
    const deleteEvent = () => {
        axios.delete(`${API_URL}/api/events/${eventId}`)
        .then(()=>{
            navigate('/events');
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className="edit-event-page">
    <h3>Edit the Event</h3>

    <form onSubmit={handleFormSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <label>Description:</label>
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Edit</button>
    </form>
    <button onClick={deleteEvent}>Delete Event</button>
  </div>    
  )
}

export default EditEventPage