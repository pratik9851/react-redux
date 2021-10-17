import { Add_count,Subtract_count, Add_Todo_Loading, Add_Todo_Success, Add_Todo_Error,Get_Todo_Error,Get_Todo_Loading,Get_Todo_Success} from "./actionType.js";



const initialState={
    counter:0,
    todos:{
        isLoading:false,
        isError:false,
        data:[]
    }
}



export const todosReducerfn=(state=initialState,{type,payload})=>{
    switch(type){
        case Add_count:
            return{
                ...state,counter:state.counter+payload
            }
        case Subtract_count:
            return{
                ...state,counter:state.counter-payload
            }  
            
      /*  case Add_Todo:
             return{...state,
           todos:  [ ...state.todos,{...payload} ]}*/

        case Add_Todo_Loading:
            return{...state,
            todos:{
                ...state.todos,isLoading:true
            }}

        case Add_Todo_Success:
            return{...state,todos:{
                ...state.todos,
                isLoading:false
            } 
        }
        case Add_Todo_Error:
            return{...state,
                todos:{
                ...state.todos,
                isLoading:false,
                isError:true
            }
        }  
        case Get_Todo_Loading:
            return{...state,
                todos:{
                    ...state.todos,isLoading:true
                }}  

        case Get_Todo_Success:
            return{...state,todos:{
                ...state.todos,
                isLoading:false,
                data:[...payload]
            }  
        }
            
        case Get_Todo_Error:
            return{...state,
                todos:{
                ...state.todos,
                isLoading:false,
                isError:true
            }
        }  

           

        default:
            return {...state}     

    }

}