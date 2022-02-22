import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
