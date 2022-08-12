import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import Details from './components/Details';
import Catalog from './components/GameCatalog/Catalog';
import ErrorPage from './components/ErrorPage';

function App() {

  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <Catalog navigationChangeHandler = {navigationChangeHandler}/>,
    '/create-game': <CreateGame />,
    '/login': <Login />,
    '/register': <Register />,
  };


  return (
    <div id="box">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        {routes[page] || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;