import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/ui/templates/Layout";
import Home from "@/components/ui/pages/Home";
import Customer from "@/components/ui/pages/Customer";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
