import './App.css';

import {Route, Routes } from 'react-router-dom';
import ExploreRoute from './components/ExploreRoute/ExploreRoute.tsx'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import SearchBar from './components/SearchBar/SearchBar.tsx'
import HeroSection from './components/HeroSection/HeroSection.tsx'
import DashboardList from './components/DashboardList/DashboardList.tsx'
// import ScreenDimmer from './components/ScreenDimmer/ScreenDimmer.tsx';

const App: React.FC = () => {
  return (
    <>
      <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/explore" element={<ExploreRoute />} />
          <Route path="/dashboards" element={<DashboardList />} />
        </Routes>
        <Footer />
      </div>
    </>

  );
}

export default App;