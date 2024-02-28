
import EventList from '../pages/EventList/EventList';
import FilterEvent from '../pages/FilterEvent/FilterEvent';
import EventDetails from '../pages/EventDetails/EventDetails';
export const routes = [
  {path:"/",element:<EventList/>},
  {path:"/find-events",element:<FilterEvent/>},
  {path:"/events/:id",element:<EventDetails/>}
]