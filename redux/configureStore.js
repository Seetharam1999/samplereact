import {createStore,combineRedducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishes} from './dishes';
import {comments} from './comments';
import {leaders} from './leaders';
import {promotions} from './promotions';

export const ConfigureStore=()=>{

    const strore=createStore(
        combineRedducers({
            dishes,
            comments,
            leaders,
            promotions
        }),
        applyMiddleware(thunk, logger )

    );
    return StorageEvent;
}