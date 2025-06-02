import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../page/home/Home.jsx'
import Register from '../page/register/Register.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
