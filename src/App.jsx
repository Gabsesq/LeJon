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
import ImplantRestorations from './pages/services/restorative/ImplantRestorations';
import InlaysOnlays from './pages/services/restorative/InlaysOnlays';
import Dentures from './pages/services/restorative/Dentures';

// Add these imports
import NitrousOxide from './pages/services/sedation/NitrousOxide';
import OralConscious from './pages/services/sedation/OralConscious';

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
            <Route path="/services/medspa" element={<Medspa />}>
              <Route path="botox" element={<Botox />} />
              <Route path="morpheus8" element={<Morpheus8 />} />
              <Route path="dermal-fillers" element={<DermalFillers />} />
              <Route path="diolaze" element={<Diolaze />} />
              <Route path="forma" element={<Forma />} />
              <Route path="hormone-therapy" element={<HormoneTherapy />} />
              <Route path="lumecca" element={<Lumecca />} />
              <Route path="vitamin-therapy" element={<VitaminTherapy />} />
              <Route path="weight-loss" element={<WeightLoss />} />
            </Route>
            <Route path="/services/orthodontic" element={<OrthodonticTreatments />}>
              <Route path="invisalign" element={<Invisalign />} />
              <Route path="six-month-smiles" element={<SixMonthSmiles />} />
            </Route>
            <Route path="/services/restorative" element={<RestorativeDentistry />}>
              <Route path="fillings" element={<DentalFillings />} />
              <Route path="bridges" element={<DentalBridges />} />
              <Route path="crowns" element={<DentalCrowns />} />
              <Route path="implants" element={<ImplantRestorations />} />
              <Route path="inlays-onlays" element={<InlaysOnlays />} />
              <Route path="dentures" element={<Dentures />} />
            </Route>
            <Route path="/services/sedation" element={<SedationDentistry />}>
              <Route path="nitrous-oxide" element={<NitrousOxide />} />
              <Route path="oral-conscious" element={<OralConscious />} />
            </Route>
            <Route path="/services/sleep-apnea" element={<SleepApnea />} />
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
