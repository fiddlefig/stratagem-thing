import Stratagem from './Components/Stratagem';
import { Route, Routes } from 'react-router';

import './App.css';

function App() {
  return (
    <Routes>
      <Route  exact path="/" element={<Stratagem />} />
    </Routes>
  );
}

export default App;
