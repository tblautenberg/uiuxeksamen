import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl font-bold">
                Access Denied, punk.
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
