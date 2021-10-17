
import './App.css';
//import {store} from "./redux/store"
import { Addcount } from './redux/Todos/action';
//import {reducerfn} from "./redux/reducer"
import {useDispatch, useSelector} from "react-redux"
import { Todo } from './Components/Todos';

function App() {
 // console.log(store.getState());
  //const {counter}=store.getState()
  const counter= useSelector((store)=>store.counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
    <h3> counter is : {counter}</h3>

      <button onClick={()=>(
        dispatch(Addcount(1))
      
      )}>clickme</button>
      <br/>
      <br/>
       <Todo/>
     
    </div>
  );
}

export default App;
