import axios from "axios"
import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import {  Addtodoerror, Addtodoloading, Addtodosuccess, Gettodoerror, Gettodoloading, Gettodosuccess } from "../redux/Todos/action"


export const Todo=()=>{
    const[text,settext]=useState("")
    const dispatch=useDispatch()
    const {data,isLoading,isError}= useSelector((store)=>store.todos.todos)

   const gettodos=async()=>{
       dispatch(Gettodoloading())
       try{
           const res= await axios.get("http://localhost:3001/todos")
           
           dispatch(Gettodosuccess(res.data))

       }catch(err){
           dispatch(Gettodoerror(err.message))

       }
   }

   useEffect(()=>{
       gettodos()
   },[])

    const handelAdd = async ()=>{
        dispatch( Addtodoloading())
        try{
            const res= await axios.post("http://localhost:3001/todos",{
                status:false,
                title:text
            })
            dispatch(Addtodosuccess(res.data))
            gettodos()
        }catch(e){
            dispatch(Addtodoerror(e.message))
        }

    }
    
 return isLoading?("..Loading"):isError?("...Error"):(  <div>
        <input type="text" placeholder="add todo" onChange={(e)=>(settext(e.target.value))}/>
        <button
        onClick={handelAdd} >Add todo</button>

        {data.map((e,i)=>(
            <p key={i}>{e.title}</p>
        ))}

    </div>
 )
}