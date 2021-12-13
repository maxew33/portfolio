import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Portfolio from './components/portfolio/Portfolio'
import Error from './components/Error'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" exact element={<Portfolio />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
