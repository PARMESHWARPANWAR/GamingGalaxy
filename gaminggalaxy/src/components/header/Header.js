import React from 'react';
// import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import "./Header.css";
// import axios from './axios';
import NFLogo from '../assets/logo.png';
import UserIcon from '../assets/nfuser.jpg';
import {auth} from '../../firebase/firebase';
import {useNavigate, useLocation, NavLink} from 'react-router-dom';

//Use Navigaete always in BrowserRouter app;

function Header(/** setSearchResult, setLoading, popularVisible, resetApp */) {
  // const [input, setInput] = useState('');
  // const inputEl = useRef(null);
  // const searchEl = useRef(null);
  // const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  // const errorOccurred = (error) => {
	// setLoading(false);
	// alert('Something went wrong.');
	// console.log(error.message);
  // }
  
  // const goBack = () => {
  // 	// resetApp();
  // 	history.push('/');
  // }

  // const searchQuery = (query) => {
  // 	history.push('/');
  //   axios.get(fetchSearchString(query)).then((response) => {
  //     if (response.data.total_results < 1) {
  //       alert("No Results Found");
  //       setLoading(false);
  //     } else {
  //       setSearchResult(response.data.results);
  //     }
  //   }).catch((err) => errorOccurred(err));
  // }

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   // searchQuery(input);
  //   // setSearchOpen(false);
  //   // inputEl.current.blur();
  //   // setLoading(true);
  //   // setTimeout(() => setInput(''), 100);
  // }

  const handleUser = () => {
  	if (auth.currentUser) {
      navigate('/profile')
  	} else {
      navigate('/login')
  	}
  }
  
  // const searchClick = () => {
  //   setSearchOpen(true);
  //   setTimeout(() => { inputEl.current.focus() }, 300);
  // }

  return (
    <div className="app__header">
			<ul className="app__nav">
		
				<li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
				<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
				<li><a href="#">Movies</a></li>
				<li><a href="#">Series</a></li>
				<li><a href="#">Featured</a></li>
			</ul>
		<div className="app__user" onClick={handleUser}>    {/** If user go to profile page else go to login page*/}
		   <img src={auth.currentUser?.photoURL || UserIcon} />  {/** If user go to show user profile picture else login word*/}
			<span>{auth.currentUser?.displayName || auth.currentUser?.email || 'Login'}</span>{/** If user go to show user name or user email id else login word*/}
			</div>
		<img className="app__title" src={NFLogo} onClick={()=>navigate('/')}/> {/* Onclick go back to home page if login then home screen else login page or profile page*/}
		</div>
  )
}

export default Header;