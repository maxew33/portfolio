import Portfolio from './components/portfolio/Portfolio'
import Error from './components/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" exact element={<Portfolio />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
