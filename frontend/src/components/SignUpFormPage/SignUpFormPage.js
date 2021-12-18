import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// thunk import
import { signUp } from '../../store/session';

import './SignUpForm.css'

const SignUpFormPage = () => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session)

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPass, setConfirmPass] = useState('');
   const [errors, setErrors] = useState([]);

   if (session.user) {
      return (
         <Redirect to='/media' />
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPass) {
         setErrors([]);
         return dispatch(signUp({ email, username, password }))
            .catch(async (res) => {
               const data = await res.json();
               if (data && data.errors) setErrors(data.errors);
            });
      }
      return setErrors(['Confirm Password field must be the same as the Password field']);
   };

   return (
         <form onSubmit={handleSubmit} className="signup-container">
            <h2>Sign Up</h2>
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
               <input
                  className="email-input"
                  placeholder='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <input
                  className="email-input"
                  placeholder='username'
                  type='text'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
               />
               <input
                  className="email-input"
                  placeholder='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <input
                  className="email-input"
                  placeholder='confirm password'
                  type='password'
                  value={confirmPass}
                  onChange={e => setConfirmPass(e.target.value)}
               />
            <button type='submit' className="sign-up">Sign Up</button>
         </form>
   );
};

export default SignUpFormPage;
