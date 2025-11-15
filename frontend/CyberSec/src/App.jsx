import { Analytics } from '@vercel/analytics/react';
import MainGamePage from './pages/MainGamePage';
import './App.css';

function App() {
  return (
    <>
      <MainGamePage />
      <Analytics />
    </>
  );
}

export default App;
