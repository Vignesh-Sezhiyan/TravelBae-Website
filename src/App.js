
import Destinations from './components/Destinations';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Report from './components/Report';
import Footer from './components/Footer';
import Goa from './components/Destinations/Goa';
import Kodaikanal from './components/Destinations/Kodaikanal';
import Munnar from './components/Destinations/Munnar';
import Varanasi from './components/Destinations/Varanasi';
import Ooty from './components/Destinations/Ooty';
import Taj from './components/Destinations/Taj';
import Contact from './components/Contact';
import Error from './components/Error';


function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/report" element={<Report />} />
          <Route path="/Goa" element={<Goa />} />
          <Route path="/kodaikanal" element={<Kodaikanal />} />
          <Route path="/munnar" element={<Munnar />} />
          <Route path="/ooty" element={<Ooty />} />
          <Route path="/varanasi" element={<Varanasi />} />
          <Route path="/taj" element={<Taj />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
