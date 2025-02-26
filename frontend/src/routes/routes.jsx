import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../page/home/Home.jsx'
import Account from '../page/account/Account.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
