import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../../App';

const Login = () => {
    const appContext = React.useContext(AppContext);

    React.useEffect(()=>{
        appContext.setData({...appContext.data, isLogin: true })
        console.log(appContext.data);
    },[]);

    const goto = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleLogin = async (e) => {
        e.preventDefault();
        localStorage.removeItem("authToken");
        try {
            const response = await axios.post('http://127.0.0.1:3000/api/v1/auth/login', {
                email,
                password,
            });
            const token = response.data.data.token;
            localStorage.setItem('authToken', token);
            goto('/');
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='addUser'>
            <h3>Login In</h3>
            <form className='addUserForm' onSubmit={handleLogin}>
                <div className='inputGroup'>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required className='form-control' placeholder='Enter your email' />

                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required className='form-control' placeholder='Enter your password' />

                    <button type="submit" className="btn btn-success">Login</button>
                </div>

            </form>
            {error && <p>{error}</p>}
            <div className='login'>
                <p>Don't have any account ?</p>
                <Link to="/" type="submit" className="btn btn-primary">
                    Sign up
                </Link>
            </div>

        </div>
    )
}

export default Login
