import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import Albums from "./Albums";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App14() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link> | <Link to="/albums">Albums</Link>

        <Routes>
          <Route path="/" index element={<Feeds />} />
          <Route path="/post" element={<Post />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </Router>
    </div>
  );
}
