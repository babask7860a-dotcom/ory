import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Verify from "@/pages/verify";
import Information from "@/pages/information";
import Congratulations from "@/pages/congratulations";
import ClaimVerify from "@/pages/claim-verify";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes for links in the Home page */}
        <Route path="/proceed" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/information" element={<Information />} />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/claim-verify" element={<ClaimVerify />} />
        <Route path="/card-application/proceed" element={<div className="p-4">Card Application Proceed</div>} />
      </Routes>
    </Router>
  );
}

export default App;

