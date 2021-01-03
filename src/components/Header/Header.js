import React from 'react'
import './Header.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase'
import SearchIcon from '@material-ui/icons/Search';


function Header() {

    //const [{ cart }, dispatch] = useStateValue();--->this is showing warning bcz we aren't using dispatch
    const [{ cart,user }] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
 
    return (
        <div className="header">
        <Link to='/'>
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            className="header__logo"
          />
        </Link>
       
        
        
      <div className="header__search">
      <input className="header__searchInput" type="text" />
      <span className="header__searchIcon" ><SearchIcon style={{ color: "black" }} /></span>
    </div>
        
        

        <div className="header__nav">

        <div className="header__options">
        <span className="header__optionLineOne">Hello,</span>
        <span className="header__optionLineTwo">{!user ? 'Guest' : user.email.split("@")[0]}</span>
        </div>

        <a href="https://www.primevideo.com/">
        <div className="header__options">
          <span className="header__optionLineOne">{user ? 'Amazon' : ""}</span>
          <span className="header__optionLineTwo">{user ? 'Prime' : ''}</span>
        </div>
        </a>

        <Link to='/orders'>
        <div className="header__options">
        <span className="header__optionLineOne">{user ? 'Your' : ""}</span>
        <span className="header__optionLineTwo">{user ? 'Orders' : ''}</span>

        </div>
        </Link>

       
      
       
      <Link to='/cart'>
        <div className="header__optionBasket">
        
        <span className="header__optionBasket__icon">
        <AddShoppingCartSharpIcon  style={{ fontSize: 29 }}/>
        </span>
        <span className="header__optionLineTwo header__basketCount">
          {cart?.length}
        </span>
        </div>
      </Link>
      <Link to={!user && '/login'}>
        <div className="header__options">
        <span className="header__optionActions" onClick={handleAuthenticaton} >{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
      </Link>
        </div>
          
        </div>
    )
}

export default Header;
