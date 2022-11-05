import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Aboutus from './routes/Aboutus';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="aboutus" element={<Aboutus />} />
        </Route>
        
        
      </Routes>
    
    </>
  );
}

export default App;
