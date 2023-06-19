import './App.css';
import { Route, Routes } from 'react-router-dom';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
