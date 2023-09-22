import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './layouts/AppLayout';

function AppUI() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppLayout/>}>
          <Route index path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
      <AppUI />
  );
}

export default App;
