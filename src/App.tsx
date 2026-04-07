import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SourcePage from './pages/SourcePage';
import FieldPage from './pages/FieldPage';
import LabPage from './pages/LabPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/source" element={<SourcePage />} />
        <Route path="/field" element={<FieldPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
