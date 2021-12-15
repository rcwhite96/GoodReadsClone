import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// import other components
import ProfileButton from './ProfileButton';
import './NavBar.module.css'


const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <div>
            <ProfileButton user={session.user} />
         </div>
      )
   } else {
      sessionLinks = (
         <div className="nav-btns">
            <NavLink to="/login" className="login-btn">Log In</NavLink>
            <NavLink to="/signup" className="signup-btn">Sign Up</NavLink>
         </div>
      )
   }

   return (
      <ul>
         <li>
               <NavLink to='/'>Home</NavLink>
               {isLoaded && sessionLinks}
         </li>
      </ul>
   );
};

export default NavigationBar;
