import { Add_count,Subtract_count,Add_Todo, Add_Todo_Loading, Add_Todo_Success, Add_Todo_Error, Get_Todo_Loading, Get_Todo_Success, Get_Todo_Error } from "./actionType.js"


export const Addcount=(data)=>{
    return{type:Add_count,payload:data}
}
export const Subcount=(data)=>{
    return {type:Subtract_count,payload:data}
}

export const Addtodo=(data)=>{
    return {type:Add_Todo,payload:data}
}

export const Addtodoloading=()=>{
    return {type:Add_Todo_Loading}
}

export const Addtodosuccess=(data)=>{
    return {type:Add_Todo_Success,payload:data}
}
export const Addtodoerror=(error)=>{
    return {type:Add_Todo_Error,payload:error}
}


export const Gettodoloading=()=>{
    return {type:Get_Todo_Loading}
}

export const Gettodosuccess=(data)=>{
    return {type:Get_Todo_Success,payload:data}
}
export const Gettodoerror=(error)=>{
    return {type:Get_Todo_Error,payload:error}
}