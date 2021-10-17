import { Login_Error, Login_Loading, Login_Success } from "./actiontype"


const initialState={
   Loading:false,
   Error:false,
   token:""
}

export const Authreducer=(state=initialState,{type,payload})=>{
  switch(type){
   case Login_Loading:
      return{
       ...state,
       Loading:true
      }
      case Login_Success:
         return{
            ...state,
       Loading:false,token:payload
         }

         case Login_Error:
            return{
             ...state,
             Loading:false,
             Error:true
            }

      default:
         return{
         ...state
      }
      
      
   
}
}