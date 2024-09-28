import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Job } from './types/jobs';
import { AddJobsPage } from './pages/AddJobs';

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/addjobs" />} />
        <Route path="/addjobs" element={<AddJobsPage jobs={jobs} setJobs={setJobs} />} />
        <Route path="/results" element={<div />} />
      </Routes>
    </Router>
  );
};

export default App;
