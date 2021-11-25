import {
  BrowserRouter, Routes,
  Route, Router,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import JournalDashboard from './pages/JournalDashboard'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header /> 
          <Routes>
              <Route path="/" element={<JournalDashboard/>}></Route> 
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
