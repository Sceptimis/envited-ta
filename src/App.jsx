import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
