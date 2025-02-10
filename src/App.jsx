import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourOffice from './pages/TourOffice';
import MeetTeam from './pages/MeetTeam';
import PatientResources from './pages/PatientResources';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
import About from './pages/About';

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
import EmergencyDentistry from './pages/services/general/EmergencyDentistry';
import ImplantRestorations from './pages/services/restorative/ImplantRestorations';
import Dentures from './pages/services/restorative/Dentures';
import NitrousOxide from './pages/services/sedation/NitrousOxide';
import OralConscious from './pages/services/sedation/OralConscious';

// Import resource pages
import NewPatients from './pages/resources/NewPatients';
import Insurance from './pages/resources/Insurance';
import PatientForms from './pages/resources/PatientForms';


// Import technology pages
import DigitalXrays from './pages/services/technology/DigitalXrays';
import IntraoralScanner from './pages/services/technology/IntraoralScanner';
import SoftTissueLaser from './pages/services/technology/SoftTissueLaser';

// Import general dentistry pages
import ChildrensDentistry from './pages/services/general/ChildrensDentistry';
import CleaningsAndExams from './pages/services/general/CleaningsAndExams';
import DentalSealants from './pages/services/general/DentalSealants';
import FluorideTreatments from './pages/services/general/FluorideTreatments';
import NightGuards from './pages/services/general/NightGuards';
import CancerScreenings from './pages/services/general/CancerScreenings';
import HygieneCounseling from './pages/services/general/HygieneCounseling';
import ScalingRootPlaning from './pages/services/general/ScalingRootPlaning';
import SportsGuards from './pages/services/general/SportsGuards';
import TMJTreatments from './pages/services/general/TMJTreatments';
import ToothExtractions from './pages/services/general/ToothExtractions';

// Import medspa pages
import Botox from './pages/services/medspa/Botox';
import Morpheus8 from './pages/services/medspa/Morpheus8';
import DermalFillers from './pages/services/medspa/DermalFillers';
import Diolaze from './pages/services/medspa/Diolaze';
import Forma from './pages/services/medspa/Forma';
import HormoneTherapy from './pages/services/medspa/HormoneTherapy';
import Lumecca from './pages/services/medspa/Lumecca';
import VitaminTherapy from './pages/services/medspa/VitaminTherapy';
import WeightLoss from './pages/services/medspa/WeightLoss';

// Add these imports
import DentalFillings from './pages/services/restorative/DentalFillings';
import DentalBridges from './pages/services/restorative/DentalBridges';
import DentalCrowns from './pages/services/restorative/DentalCrowns';
import InlaysOnlays from './pages/services/restorative/InlaysOnlays';

// Add new resource imports
import Career from './pages/resources/Career';
import Financial from './pages/resources/Financial';
import PatientSpecials from './pages/resources/PatientSpecials';
import Reviews from './pages/resources/Reviews';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route index element={<About />} />
              <Route path="tour" element={<TourOffice />} />
              <Route path="team" element={<MeetTeam />} />
            </Route>
            <Route path="/services" element={<Services />}>
              <Route index element={<Services />} />
              <Route path="general/*" element={<GeneralDentistry />} />
              <Route path="cosmetic/*" element={<CosmeticDentistry />} />
              <Route path="implants" element={<ImplantRestorations />} />
              <Route path="dentures" element={<Dentures />} />
              <Route path="emergency" element={<EmergencyDentistry />} />
              <Route path="sedation/*" element={<SedationDentistry />} />
              <Route path="teeth-whitening" element={<TeethWhitening />} />
              <Route path="veneers" element={<DentalVeneers />} />
            </Route>
            <Route path="/resources" element={<PatientResources />}>
              <Route path="career" element={<Career />} />
              <Route path="financial" element={<Financial />} />
              <Route path="forms" element={<PatientForms />} />
              <Route path="specials" element={<PatientSpecials />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
