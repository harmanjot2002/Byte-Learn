import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const notifyrec=()=>{
        // toast("🤯 User doesn't exist");
        toast.error("User doesn't exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const notifypass=()=>{
        toast.error('Incorrect Password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const showLoginSuccessToast = () => {
        return new Promise((resolve) => {
          toast.success("Logged in Successfully", {
            onClose: resolve, // Resolve the Promise when the toast is closed
          });
        });
      };

    // axios.defaults.withCredentials=true;
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            // const result=await axios.post('https://byte-learn-api.vercel.app/login',{email,password});
            const result=await axios.post('http://localhost:3001/login',{email,password});
            console.log(result);
            if(result.data==="Success"){
                await showLoginSuccessToast();
                navigate('/')
            }
            else if(result.data==="No record existed"){
                notifyrec();
            }
            else if(result.data==="Password is incorrect"){
                notifypass();
            }
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 regi">
      <div className="p-3 rounded w-25 shadow bg-white">
        <h2 className="text-center fw-bold heads">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email" placeholder="Enter email" autocomplete="off" name="email" className="form-control rounded-0" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password" placeholder="Enter password" autocomplete="off" name="password" className="form-control rounded-0" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn w-100 rounded-0 regis">Login</button>
        </form>
        <p>Don't Have an Account?</p>
        <Link to="/register" className='btn btn-default border w-100 regist rounded-0'>Register</Link>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login
