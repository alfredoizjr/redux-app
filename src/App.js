import React from "react";

// redux
import store from './redux/store';
import {Provider} from 'react-redux';
import AddAppoiments from "./components/addAppoiments";
import ListAppoiments from "./components/listAppoiments";


function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <header>
      <h1 className='text-center'>Aministrate Appoinmet</h1>
      </header>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <AddAppoiments />
        </div>
        <div className='col-md-6'>
          <ListAppoiments />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
