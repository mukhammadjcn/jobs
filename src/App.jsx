import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./styles/index.scss";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs/index";
import JobID from "./pages/Jobs/id/singleJob";
import Footer from "./components/Footer";
import NotFound from "./components/Shared/NotFound";
import Playground from "./pages/Playground";

function App() {
  return (
    <div>
      <Router>
        {/* Header is defoult for all pages */}
        <Header />

        {/* All pages rendered here */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobID />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        {/* <Footer /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
