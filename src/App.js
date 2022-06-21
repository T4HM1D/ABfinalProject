import Navbar from "./Navbar"
import Home from "./Pages/Home"
import PendingOrders from "./Pages/PendingOrders"
import Portfolio from "./Pages/Portfolio"
import TradingHistory from "./Pages/TradingHistory"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/TradingHistory" element={<TradingHistory />} />
          <Route path="/PendingOrders" element={<PendingOrders />} />
        </Routes>
      </div>
    </>
  )
}

export default App;