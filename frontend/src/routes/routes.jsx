import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../page/login/Login.jsx'
import Home from '../page/home/Home.jsx'
import Register from '../page/register/Register.jsx'
import Scores from '../page/scores/Scores.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
