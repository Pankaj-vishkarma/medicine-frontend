import { useContext, useState } from "react"
import axios from "axios"
import UserContext from '../userContext/UserContext'
import {useNavigate} from 'react-router-dom'
import '../CSS/signin.css'
import { Link } from "react-router-dom"
function Signin(){

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const {setUser,setRole}=useContext(UserContext)
    const navigate=useNavigate()

    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios({
                method:'post',
                url:['https://medicine-backend-05ex.onrender.com/signin'],
                withCredentials:true,
                data:{email,password}
              })

              if(res.data.success){
                 alert('successfully signin')
                 setUser(true)
                 if(res.data.data.role=="ADMIN")
                    {
                        setRole(true)
                    }

                    navigate('/')

              }
        }catch(e){
            alert('there are some error')
            console.log(e.message)
        }
    }
    return(
        <form onSubmit={handlesubmit} className="signin-box">
        <div>
            Email : <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <br />
            Password : <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
            <br />
            <button>submit</button>
        </div>
        <Link to='/signup'>New User ?</Link>
        </form>
    )
}

export default Signin
