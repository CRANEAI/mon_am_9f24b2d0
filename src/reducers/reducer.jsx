
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import signup from './reducer_signup' 
,import following from './reducer_following' 


        const rootReducer = combineReducers({
            signup : signup 
,following : following 

        })

        export default rootReducer;

        