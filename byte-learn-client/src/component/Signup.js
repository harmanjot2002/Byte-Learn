import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors, setErrors] = useState({});
    const navigate=useNavigate()

    const showRegSuccessToast = () => {
        return new Promise((resolve) => {
          toast.success("User Registered Successfully", {
            onClose: resolve, // Resolve the Promise when the toast is closed
          });
        });
      };
      
    const showToast = (message) => {
        console.log('Showing toast');
        // toast("User already exists");
        toast.error(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
    }

    const validateForm = () => {
        const errors = {};

        // Validate email
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }

        // Validate password
        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errors.password = 'Password must contain at least one special character';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    axios.defaults.withCredentials=true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
          try {
            const result = await axios.post('https://byte-learn-api.vercel.app/', { name, email, password });
            // const result = await axios.post('http://localhost:3001/register', { name, email, password });
            console.log(result);
            // Wait for the showRegSuccessToast to complete before navigating
            await showRegSuccessToast();
            navigate('/login');
          } catch (err) {
            if (err.response && err.response.status === 409) {
              showToast('User already exist');
            } else {
              console.log(err);
              showToast('An error occured');
            }
          }
        }
      };
      
      

  return (
    <div className="d-flex justify-content-center align-items-center mh-100 vh-100 regi">
      <div className="p-3 rounded shadow w-25 bg-white">
        <h2 className="text-center fw-bold heads">Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name">
                    <strong>Name</strong>
                </label>
                <input type="text" placeholder="Enter name" autocomplete="off" name="name" required className={`form-control rounded-0 ${errors.name ? 'is-invalid' : ''}`} onChange={(e) => setName(e.target.value)}
                />
                <div className="invalid-feedback">{errors.name}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email" placeholder="Enter email" autocomplete="off" name="email" required className={`form-control rounded-0 ${errors.email ? 'is-invalid' : ''}`} onChange={(e) => setEmail(e.target.value)}/>
                <div className="invalid-feedback">{errors.email}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password" placeholder="Enter password" autocomplete="off" required name="password" className={`form-control rounded-0 ${errors.password ? 'is-invalid' : ''}`} onChange={(e) => setPassword(e.target.value)}/>
                <div className="invalid-feedback">{errors.password}</div>
            </div>
            <button type="submit" className="btn w-100 rounded-0 regis">Register</button>
        </form>
        <p>Already Have an Account?</p>
        <Link to="/Login" className='btn btn-default border w-100 regist rounded-0'>Login</Link>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Signup
