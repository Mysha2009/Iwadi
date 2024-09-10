import { useState } from 'react'
import HomePage from "./pages/home";
import SearchResults from "./pages/Resulte";
import FormPage from "./pages/Formulaire";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/FormPage" element={<FormPage />}/>
        <Route path="/SearchResults" element={<SearchResults />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
