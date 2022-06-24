
import './App.css';
import Layout from './components/layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Episode from './components/episode/Episode';
import EpisodeDetails from './components/episode/EpisodeDetails';
import CharacterDetails from './components/character/CharacterDetails';

function App() {


  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/episode' />
        </Route>
        <Route path='/episode' exact>
          <Episode />
        </Route>
        <Route path='/episode/:eId'>
          <EpisodeDetails />
        </Route>
        <Route path='/:cId'>
          <CharacterDetails />
        </Route>
      </Switch>
      
    </Layout>
  );
}

export default App;
