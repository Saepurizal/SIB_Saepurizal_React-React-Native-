import './App.css';
import Navigation from './components/Navigation';
import AboutMeetUp from './components/AboutMeetUp';
import MeetUp from './components/MeetUp';
import Member from './components/Member';
import NextMeetUp from './components/NextMeetUp';
import PastMeetUp from './components/PastMeetUp';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<MeetUp/>}/>
          <Route path="/MeetUp" element={<MeetUp/>} />
          <Route path="/NextMeetUp" element={<NextMeetUp/>} />
          <Route path="/AboutMeetUp" element={<AboutMeetUp/>} />
          <Route path="/Member" element={<Member/>} />
          <Route path="/PastMeetUp" element={<PastMeetUp/>} />
        </Routes>
        <Footer />
        </>
      </Router>
      
      
      
  );
}

export default App;

