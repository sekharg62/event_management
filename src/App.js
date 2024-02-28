import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { routes } from "./routes/routes";

function App() {
  const router = createBrowserRouter(routes)
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
