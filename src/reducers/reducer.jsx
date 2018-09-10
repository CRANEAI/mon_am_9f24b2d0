
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import following from './reducer_following' 
,import splash from './reducer_splash' 


        const rootReducer = combineReducers({
            following : following 
,splash : splash 

        })

        export default rootReducer;

        