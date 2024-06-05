import { useContext, useEffect } from "react"
import UserContext from "../userContext/UserContext"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Logout(){
   const {setUser}=useContext(UserContext)
   const navigate=useNavigate()

   useEffect(()=>{
    handle()
   })

   const handle=async()=>{
       try{
        const res=await axios({
            method:'get',
            url:['http://localhost:1234/logout'],
            withCredentials:true
         })

         if(res.data.success){
            alert('successfully logged out')
            setUser(false)
            navigate('/')
         }
        }catch(e){
            alert('there are some error in logout')
            console.log(e)
        }
    }
    
}

export default Logout