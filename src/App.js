import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Assured from './pages/Assured';
import './styles/styles.scss';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assured" element={<Assured />} />
      </Routes>
    </div>
  );
};

export default App;
