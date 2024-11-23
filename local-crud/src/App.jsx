import { useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Ticket from "./Ticket";
import UserLog from "./UserLog";
import Profile from "./Profile";

function App() {
  
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/userlog" element={<UserLog  />} />
          <Route path="/profile/:em" element={<Profile  />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
