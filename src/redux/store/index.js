import { createStore } from 'redux';
import reducers from '../reducers';
import { setLocalStorage,getLocalStorage } from './localStorage';

// state initial
const storageState = getLocalStorage();

const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    setLocalStorage({
        appoiment: store.getState().appoiment
    })
})

export default store;