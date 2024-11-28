import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Inventory from './pages/Inventory';
import Attendance from './pages/Attendance';
import Promotions from './pages/Promotions';
import Schedule from './pages/Schedule';
import Curriculum from './pages/Curriculum';
import Finances from './pages/Finances';
import TournamentRecords from './pages/TournamentRecords';
import Prospects from './pages/Prospects';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/tournament-records" element={<TournamentRecords />} />
              <Route path="/prospects" element={<Prospects />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;