import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { login } from '../../store/session'

import './LoginForm.css';


const LoginFormPage = () => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);

   const [credential, setCredential] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   if (sessionUser) {
      return (
         <Redirect to='/' />
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(login({ credential, password }))
         .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
         });
   }


   return (
         <form onSubmit={handleSubmit} className="login-container">
            <h2>Login</h2>
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
               <input
                  className="email-input"
                  placeholder='email or username'
                  type='text'
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
               />
               <input
                  className="email-input"
                  placeholder='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            <button type='submit' className="log-in">Log In</button>
            <button className="log-in" onClick={() => {setCredential('Demo-lition'); setPassword('password');}}>Demo User</button>
         </form>
   );
};


export default LoginFormPage;
