import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Resources from "./components/resources.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Resources />} />
        </Routes>
      </Layout> 
    </Router>
  );
}

export default App
