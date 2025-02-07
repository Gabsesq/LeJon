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

// Import resource pages
import NewPatients from './pages/resources/NewPatients';
import Insurance from './pages/resources/Insurance';
import PatientForms from './pages/resources/PatientForms';
import FAQ from './pages/resources/FAQ';

// Import technology pages
import DigitalXrays from './pages/services/technology/DigitalXrays';
import IntraoralScanner from './pages/services/technology/IntraoralScanner';
import SoftTissueLaser from './pages/services/technology/SoftTissueLaser';

// Import general dentistry pages
import ChildrensDentistry from './pages/services/general/ChildrensDentistry';
import CleaningsAndExams from './pages/services/general/CleaningsAndExams';
import DentalSealants from './pages/services/general/DentalSealants';
import EmergencyDentistry from './pages/services/general/EmergencyDentistry';
import FluorideTreatments from './pages/services/general/FluorideTreatments';
import NightGuards from './pages/services/general/NightGuards';
import CancerScreenings from './pages/services/general/CancerScreenings';
import HygieneCounseling from './pages/services/general/HygieneCounseling';
import ScalingRootPlaning from './pages/services/general/ScalingRootPlaning';
import SportsGuards from './pages/services/general/SportsGuards';
import TMJTreatments from './pages/services/general/TMJTreatments';
import ToothExtractions from './pages/services/general/ToothExtractions';

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
            <Route path="/services/technology" element={<DentalTechnology />}>
              <Route path="digital-xrays" element={<DigitalXrays />} />
              <Route path="intraoral-scanner" element={<IntraoralScanner />} />
              <Route path="soft-tissue-laser" element={<SoftTissueLaser />} />
            </Route>
            <Route path="/services/general" element={<GeneralDentistry />}>
              <Route path="childrens-dentistry" element={<ChildrensDentistry />} />
              <Route path="cleanings-and-exams" element={<CleaningsAndExams />} />
              <Route path="dental-sealants" element={<DentalSealants />} />
              <Route path="emergency" element={<EmergencyDentistry />} />
              <Route path="fluoride" element={<FluorideTreatments />} />
              <Route path="night-guards" element={<NightGuards />} />
              <Route path="cancer-screenings" element={<CancerScreenings />} />
              <Route path="hygiene-counseling" element={<HygieneCounseling />} />
              <Route path="scaling-root-planing" element={<ScalingRootPlaning />} />
              <Route path="sports-guards" element={<SportsGuards />} />
              <Route path="tmj" element={<TMJTreatments />} />
              <Route path="extractions" element={<ToothExtractions />} />
            </Route>
            <Route path="/services/medspa" element={<Medspa />} />
            <Route path="/services/orthodontic" element={<OrthodonticTreatments />} />
            <Route path="/services/restorative" element={<RestorativeDentistry />} />
            <Route path="/services/sedation" element={<SedationDentistry />} />
            <Route path="/services/sleep-apnea" element={<SleepApnea />} />
            <Route path="/resources" element={<PatientResources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources/new-patients" element={<NewPatients />} />
            <Route path="/resources/insurance" element={<Insurance />} />
            <Route path="/resources/forms" element={<PatientForms />} />
            <Route path="/resources/faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
