import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';

function App() {

  function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={HomePage()}/>
        <Route path="/dashboard" element={Dashboard()} />
      </Routes>
      <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/dashboard"> Dashboard</NavLink>
      </nav>
    </div>
  );
}

export default App;