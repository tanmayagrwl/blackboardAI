import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './components/upload';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* @ts-ignore */}
          <Route exact path="/" element={<Login />} />
        </Routes>

        <Routes>
          {/* @ts-ignore */}
          <Route exact path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
