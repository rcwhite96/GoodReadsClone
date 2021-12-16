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
         <div id="nav-btns">
            <NavLink to="/login">
               <button className="nav-btn">Log In</button>
            </NavLink>
            <NavLink to="/signup">
               <button className="nav-btn">Sign Up</button>
            </NavLink>
         </div>
      )
   }

   return (
         <div>
               <NavLink to='/' className="home-btn">
                  <button className="nav-btn">Home</button>
               </NavLink>
               {isLoaded && sessionLinks}
         </div>
   );
};

export default NavigationBar;
