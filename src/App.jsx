import {Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css'; // Assuming you have a CSS file for global styles
import { useState } from "react";
import ProfilePopup from "./pages/ProfilePopup";
import './styles/Popup.css';
import ApplyPage from "./pages/ApplyPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";


const App =() =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  // const [showPopup,setShowPopup]=useState(true);
  
  // const handlePopupClose=()=>{
  //   setShowPopup(false);
  // }

  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sumit Sunil Kalebere"
          studentPhotoUrl="/images/profile-img.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
            {/* { showPopup &&
              <ProfilePopup handleClose={handlePopupClose} />
            } */}
            <Router>
              <Routes>
              <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            
            <Route path="/apply" element={<ApplyPage/>}/>
            </Routes>
            <ChatbotComponent/>
      </Router>
    </div>
    </>
  )
}
export default App;