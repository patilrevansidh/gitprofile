import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import rootReducer from './config/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

const MainApp = (props) =>{
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}
ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
