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
import CreateReview from './components/ReviewForm/ReviewFormPage'
import SplashPage from './components/SplashPage/SplashPage';
import AllShelvesPage from './components/AllShelvesPage/AllShelvesPage';
import Footer from './components/Footer/Footer';
import CreateShelf from './components/ShelfForm/ShelfForm';
import EditReviewForm from './components/EditReviewForm/EditReviewForm';
import OneShelfPage from './components/OneShelfPage/OneShelfPage';
import EditShelfForm from './components/EditShelfForm/EditShelfForm'
import AddToShelfForm from './components/AddToShelfPage/AddToShelfForm'
import SearchPage from './components/SearchPage/SearchPage';
import CreateMedia from './components/AddMediaPage/AddMediaPage'
import EditMediaForm from './components/EditMediaPage/EditMediaPage'
import ImageCarousel from './components/Carousel/Carousel'

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
          <Route path="/" exact={true}>
            <SplashPage/>
            <ImageCarousel/>
            <Footer/>
          </Route>
          <Route path="/media" exact={true}>
            <AllMediaPage/>
            <Footer/>
          </Route>
          <Route path="/media/:mediaId" exact={true}>
            <OneMediaPage/>
            <Footer/>
          </Route>
          <Route path="/media/:mediaId/edit" exact={true}>
            <EditMediaForm/>
            <Footer/>
          </Route>
          <Route path="/add-media" exact={true}>
            <CreateMedia/>
            <Footer/>
          </Route>
          <Route path='/media/:mediaId/add-review' exact={true}>
            <CreateReview/>
            <Footer/>
          </Route>
          <Route path='/media/:mediaId/edit-review/:reviewId' exact={true}>
            <EditReviewForm/>
            <Footer/>
          </Route>
          <Route path='/shelves' exact={true}>
            <AllShelvesPage/>
            <Footer/>
          </Route>
          <Route path='/shelves/add-shelf' exact={true}>
            <CreateShelf/>
            <Footer/>
          </Route>
          <Route path='/shelves/:shelfId' exact={true}>
            <OneShelfPage/>
            <Footer/>
          </Route>
          <Route path='/shelves/:shelfId/edit-shelf' exact={true}>
            <EditShelfForm/>
            <Footer/>
          </Route>
          <Route path='/media/:mediaId/add-to-shelf/' exact={true}>
            <AddToShelfForm/>
            <Footer/>
          </Route>
          <Route path='/search/:searchTerm'>
            <SearchPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
