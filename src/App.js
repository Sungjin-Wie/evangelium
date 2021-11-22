import "./App.css";
import {
  HashRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { Business, Intro, Location, Main } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/business" element={<Business />} />
        <Route path="/location" element={<Location />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
