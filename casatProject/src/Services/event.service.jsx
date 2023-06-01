import axios from 'axios';

/* Axios Service that deals with Events Requests */

class EventsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL || 'http://localhost:5005'
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/events
  createEvent = requestBody => {
    return this.api.post('/api/events', requestBody);
  };

  // GET /api/events
  getAllEvents = () => {
    return this.api.get('/api/events');
  };

  // GET /api/events/:id
  getEvents = id => {
    return this.api.get(`/api/events/${id}`);
  };

  // PUT /api/events/:id
  updateEvent = (id, requestBody) => {
    return this.api.put(`/api/events/${id}`, requestBody);
  };

  // DELETE /api/events/:id
  deleteEvent = id => {
    return this.api.delete(`/api/events/${id}`);
  };
}

// Create one instance object
const eventsService = new EventsService();

export default eventsService;