
        //----------------------------------------------------------------------------------------------------------
        //Declariations and libraries
        //----------------------------------------------------------------------------------------------------------
        import React                                            from 'react';
        import ReactDOM                                         from 'react-dom';
        import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
        import { Provider }                                     from 'react-redux';
        import { createStore, applyMiddleware }                 from 'redux';
        import promise                                          from 'redux-promise';
        import createMemoryHistory                              from 'history/createMemoryHistory';
        import App                                              from './container/app.jsx';
       
        //----------------------------------------------------------------------------------------------------------
            //Parent Components
        //----------------------------------------------------------------------------------------------------------
        
        import signup from './components/signup.jsx' 
,import following from './components/following.jsx' 

       
        //----------------------------------------------------------------------------------------------------------
        //Reducer
        //----------------------------------------------------------------------------------------------------------
        import store                                            from './reducers/index.js';

        //----------------------------------------------------------------------------------------------------------
            //Middleware setup
        //----------------------------------------------------------------------------------------------------------
        const history                                 = createMemoryHistory();
        const createStoreWithMiddleware               = applyMiddleware(promise)(createStore);

        //----------------------------------------------------------------------------------------------------------
        //Routes Setup
        //----------------------------------------------------------------------------------------------------------
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        
            <Router basename="/" history={ history } >
            <Switch>
                <Route path="/signup" component={signup} /> 
,<Route path="/following" component={following} /> 

            </Switch>
            </Router>
            </Provider>,
            document.getElementById('app') || document.createElement('div')
          );
        