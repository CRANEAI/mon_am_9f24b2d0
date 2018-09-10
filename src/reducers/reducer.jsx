
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import following from './reducer_following' 


        const rootReducer = combineReducers({
            following : following 

        })

        export default rootReducer;

        