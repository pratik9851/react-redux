import { createStore,combineReducers,applyMiddleware } from "redux";
import { todosReducerfn } from "./Todos/reducer.js";
//import { Addcount,Subcount,Addtodo } from "./action.js";
import { Authreducer } from "./Auth/reducer.js";



/*class Store{
    constructor(reducerfn,initialState){
        this.reducer=reducerfn;
        this.state= initialState;
    }
    getState(){
        return this.state
    }
    dispatch(action){
        this.state=this.reducer(this.state,action)
    }
}*/




/*const middleware1=(store)=>(next)=>(actions)=>{
     console.log("Mw1 action",actions);
    return next(actions)

}
const middleware2=(store)=>(next)=>(actions)=>{
    console.log("Mw2 action",actions);
   return next(actions)

}*/


/*const rootReducer= combineReducers(
    {
        auth:Authreducer,
        todos:todosReducerfn
    }
)*/




/*export const store= new createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   // applyMiddleware(middleware1,middleware2)
   )

//console.log(store.getState());
*/

const rootReducer=combineReducers({
    auth:Authreducer,
    todos:todosReducerfn
})

export const store= createStore(rootReducer)





