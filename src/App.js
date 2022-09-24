import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MainPage from './components/MainPage';
import MarketPlace from './components/MarketPlace';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' index element={<Home />} />
        <Route path='/market' index element={<MarketPlace />} />
      </Route>
    </Routes>
  );
}

export default App;
