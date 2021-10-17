import { Login_Error, Login_Loading, Login_Success } from "./actiontype"

export const LoginLoading=()=>({
    type:Login_Loading
})
export const LoginSuccess=(data)=>({
    type:Login_Success,payload:data
})

export const LoginError=(error)=>({
  type:Login_Error,payload:error
})


