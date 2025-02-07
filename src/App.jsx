import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourOffice from './pages/TourOffice';
import MeetTeam from './pages/MeetTeam';
import PatientResources from './pages/PatientResources';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Import service pages
import CosmeticDentistry from './pages/services/CosmeticDentistry';
import DentalTechnology from './pages/services/DentalTechnology';
import GeneralDentistry from './pages/services/GeneralDentistry';
import Medspa from './pages/services/Medspa';
import OrthodonticTreatments from './pages/services/OrthodonticTreatments';
import RestorativeDentistry from './pages/services/RestorativeDentistry';
import SedationDentistry from './pages/services/SedationDentistry';
import SleepApnea from './pages/services/SleepApnea';
import DentalBonding from './pages/services/cosmetic/DentalBonding';
import DentalVeneers from './pages/services/cosmetic/DentalVeneers';
import Invisalign from './pages/services/cosmetic/Invisalign';
import SixMonthSmiles from './pages/services/cosmetic/SixMonthSmiles';
import TeethWhitening from './pages/services/cosmetic/TeethWhitening';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/tour" element={<TourOffice />} />
            <Route path="/about/team" element={<MeetTeam />} />
            <Route path="/services/cosmetic" element={<CosmeticDentistry />}>
              <Route path="bonding" element={<DentalBonding />} />
              <Route path="veneers" element={<DentalVeneers />} />
              <Route path="invisalign" element={<Invisalign />} />
              <Route path="six-month-smiles" element={<SixMonthSmiles />} />
              <Route path="teeth-whitening" element={<TeethWhitening />} />
            </Route>
            <Route path="/services/technology" element={<DentalTechnology />} />
            <Route path="/services/general" element={<GeneralDentistry />} />
            <Route path="/services/medspa" element={<Medspa />} />
            <Route path="/services/orthodontic" element={<OrthodonticTreatments />} />
            <Route path="/services/restorative" element={<RestorativeDentistry />} />
            <Route path="/services/sedation" element={<SedationDentistry />} />
            <Route path="/services/sleep-apnea" element={<SleepApnea />} />
            <Route path="/resources" element={<PatientResources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
