import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// import other components
import ProfileButton from './ProfileButton';
import SearchForm from '../SearchBar/SearchBar';
import './NavBar.module.css'


const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <>
         <div>
            <NavLink to="/media">
               <button className="nav-btn">Media</button>
            </NavLink>
            <NavLink to="/add-media">
               <button className="nav-btn">Add Media</button>
            </NavLink>
            <NavLink to="/shelves">
               <button className="nav-btn">Your Shelves</button>
            </NavLink>

            <ProfileButton user={session.user} />

         </div>
         <div className="search-container">
         <SearchForm/>
         </div>
         </>
      )
   } else {
      sessionLinks = (
         <div>
            <div className="buttons">
               <NavLink to="/login">
                  <button className="nav-btn">Log In</button>
               </NavLink>
               <NavLink to="/signup">
                  <button className="nav-btn">Sign Up</button>
               </NavLink>

               </div>
         </div>
      )
   }

   return (
         <div className="nav-bar">
            <div className="home">
               <NavLink to='/'>
                  <button className="home-btn">Home</button>
               </NavLink>
               {isLoaded && sessionLinks}
            </div>
         </div>
   );
};

export default NavigationBar;
