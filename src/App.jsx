import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import DashboardOverview from './components/dashboard-components/overview';
import SavingGoals from './components/dashboard-components/savingGoals';
import OnBoarding from './pages/onboarding';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />

        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/overview'} element={<DashboardOverview />} />
        <Route path={'/savings'} element={<SavingGoals />} />
        <Route path={'/onboarding'} element={<OnBoarding />} />
      </Routes>
    </>
  );
}

export default App;
