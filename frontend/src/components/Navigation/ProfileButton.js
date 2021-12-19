import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/session';

const ProfileButton = ({user}) => {
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);

   const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
   };

   useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
         setShowMenu(false);
      };
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener("click", closeMenu);

   }, [showMenu]);


   const signOut = (e) => {
      e.preventDefault();
      dispatch(logout());
   }



   return (
      <div>
         <button onClick={openMenu} className="nav-btn">
            <i className="far fa-user" />
         </button>
         {showMenu && (
            <div className='profile-dropdown'>
               <div className="profile-info">{user.username}</div>
               <div className="profile-info">{user.email}</div>
               <div>
                  <button onClick={signOut} className="nav-btn">Log Out</button>
               </div>
            </div>
         )}
      </div>
   );
};

export default ProfileButton;
