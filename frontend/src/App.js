import {
  BrowserRouter, Routes,
  Route, Router,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import JournalDashboard from './pages/JournalDashboard'
import JournalPage from './pages/JournalPage'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header /> 
          <Routes>
              <Route path="/"  element={<JournalDashboard/>}></Route> 
              <Route path="/journals/:id" element={<JournalPage/>} ></Route> 
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
