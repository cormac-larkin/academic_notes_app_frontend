import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/pages/HomePage';
import SignUpPage from '../src/components/pages/SignUpPage';
import LoginPage from '../src/components/pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
