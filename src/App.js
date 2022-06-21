import Navbar from "./Navbar"
import Home from "./Pages/Home"
import PendingOrders from "./Pages/PendingOrders"
import Portfolio from "./Pages/Portfolio"
import TradingHistory from "./Pages/TradingHistory"
import { Route, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import Login from "./Pages/Login"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/TradingHistory" element={<TradingHistory />} />
          <Route path="/PendingOrders" element={<PendingOrders />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App;