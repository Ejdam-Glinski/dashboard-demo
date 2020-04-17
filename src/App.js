import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/news">
          <NewsFeed />
        </Route>
      </div>
    </Router>
  );
}
