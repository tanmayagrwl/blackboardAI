import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './components/upload';
import Dashboard from './components/dashboard';
import Landing from './components/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
