import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { 
  createBrowserRouter, RouterProvider, Routes 
} from 'react-router-dom'
import './index.css'
import Holamundo from './Components/Holamundo.jsx'
import HolaCalama from './Components/calama.jsx'
import Tareas from "./components/tareas/Tareas.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/ciudad",
    element:<HolaCalama/>,
  },
  {
    path:"/holamundo",
    element:<Holamundo/>,
  },
  {
    path: "/tareas",
    element: <Tareas/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
