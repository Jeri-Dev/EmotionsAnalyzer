import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from '../src/routes/Inicio'
import Result from '../src/routes/Result'
import { PredicedProvider } from './context/prediccion';

const roots = createBrowserRouter([
  {
    path : "/",
    element : <Inicio />,
    errorElement : <h1>404 PAGE NOT FOUND</h1>
  },
  {
    path : "/results",
    element : <Result />
  },
  {
    path : "/participants",
    element : <h1>Participans</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <PredicedProvider>
   <RouterProvider router={roots} />
   </PredicedProvider>
  </React.StrictMode>,
)
