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
            <NavLink to="/shelves">
               <button className="nav-btn">Your Shelves</button>
            </NavLink>
            <ProfileButton user={session.user} />
         </div>
      )
   } else {
      sessionLinks = (
         <div>
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
         <div className="nav-bar">
               <NavLink to='/'>
                  <button className="home-btn">Home</button>
               </NavLink>
               {isLoaded && sessionLinks}
         </div>
   );
};

export default NavigationBar;
