import {Routes, Route, useLocation} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react"

import Home from "./pages/Home"
import Appointment from "./pages/Appointment"
import DentistDashboard from "./pages/DentistDashboard"
//import AssistantDashboard from "./pages/AssistantDashboard"
import Blanchiment from "./pages/Blanchiment";
import Chirurgie from "./pages/Chirurgie";
import Orthodontie from "./pages/Orthodontie";
import Prothese from "./pages/Prothese";
import Soins from "./pages/Soins";


const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  return null
}

const AppRoutes = () => {
  return (
    <>
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Appointment />} />
          <Route path="/DentistDashboard" element={<DentistDashboard />} />  {/* ADD SECRET PATH */}
          {/*<Route path="/AssistantDashboard" element={<AssistantDashboard />} />*/}
          <Route path="/blanchiment" element={<Blanchiment />} />
          <Route path="/chirurgie" element={<Chirurgie />} />
          <Route path="/orthodontie" element={<Orthodontie />} />
          <Route path="/prothese" element={<Prothese />} />
          <Route path="/soins" element={<Soins />} />
        </Routes>
    </Router>
    </>
  );
}

export default AppRoutes;
