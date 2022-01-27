import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// importing reducers
import session from './session'
import media from './media'
import review from './review'
import shelf from './shelf'
import shelfMedia from './shelfMedia'


//REDUCER COMBINER
const rootReducer = combineReducers({
   session,
   media,
   review,
   shelf,
   shelfMedia
});

let enhancer;
if (process.env.NODE_ENV === 'production') {
   enhancer = applyMiddleware(thunk);
} else {
   const logger = require('redux-logger').default;
   const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

//CONFIGURE THE STORE FUNCTION
const configureStore = (preloadedState) => {
   return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
