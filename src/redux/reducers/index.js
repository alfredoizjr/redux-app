import { combineReducers } from 'redux';
import appoimetReducer from './appoimetReducer';
import validateForm from './validationReducer';

export default combineReducers({
    appoiment: appoimetReducer,
    error: validateForm,

})