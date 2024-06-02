// import {compose,createStore,applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import { rootReducer } from './root-reducer';
import {configureStore} from '@reduxjs/toolkit';
// import {persistStore,persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';



const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    console.log('type:',action.type);
    console.log('payload',action.payload);
    console.log('currentState',store.getState());
    next(action);
    console.log('next state',store.getState());
}
// const middleWares=[loggerMiddleware];

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user'],
//   };

// const persistedReducer=persistReducer(persistConfig,rootReducer);



// const composedEnhancers=compose(applyMiddleware(...middleWares));
export const store=configureStore({reducer:rootReducer,
    middleware:(defaultMiddleware)=>defaultMiddleware({serializableCheck:false}).concat(loggerMiddleware)
});
// export const persistor=persistStore(store);