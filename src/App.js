import './App.css';
import Layout from './components/layout/Layout'
import { Routes, Route, Navigate } from 'react-router-dom'
import Episode from './components/episode/Episode';
import EpisodeDetails from './components/episode/EpisodeDetails';
import CharacterDetails from './components/character/CharacterDetails';

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/episode' />} replace />

        <Route path='/episode' element={<Episode />} exact />

        <Route path='/episode/:eId' element={<EpisodeDetails />} />

        <Route path='/:cId' element={<CharacterDetails />} />
      </Routes>

    </Layout>
  );
}

export default App;
