import './App.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApi } from "./redux/actions/apiActions";
import Wallet from './components/Wallet';
import ToDoList from './components/ToDoList';
import Api from './components/Api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);
  return (
    <div className='justify-center'>
      <h1>Redux & React</h1>
      <br /><br />
      <Wallet />
      <br /><br />
      <ToDoList />
      <br /><br />
      <Api />
    </div>
  )
}

export default App
