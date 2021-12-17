import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// thunk inport
import { restoreUser } from './store/session'

//component import
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import NavigationBar from './components/Navigation/NavigationBar';
import AllMediaPage from './components/AllMediaPage/AllMediaPage'
import OneMediaPage from './components/OneMediaPage/OneMediaPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>
      <NavigationBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
          <Route path="/media">
            <AllMediaPage/>
          </Route>
          <Route path="/media/:mediaId" exact={true}>
            <OneMediaPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
