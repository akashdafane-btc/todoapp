import logo from './logo.svg';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from  './redux/store';

import AddTodos from './pages/addForm/addTodo';
import ApiData from './pages/addForm/apiData';


function App() {
  return (
    <Provider store={store}>
  
      <AddTodos />
      {/* <ApiData /> */}
   
  </Provider>
  );
}

export default App;
