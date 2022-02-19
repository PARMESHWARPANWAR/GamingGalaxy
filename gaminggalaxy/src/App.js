import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomePage/HomeScreen";
import LoginScreen from "./components/user/LoginScreen";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { auth } from "./firebase/firebase";
import Profile from "./components/user/Profile";
import Loading from "./components/HomePage/Loading";
import Header from "./components/header/Header";
import About from "./components/about/About";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // const initRun = async () => {
  // 	// setLoading(true);
  //  }

  useEffect(()=> {
  	const unsubscribe = auth.onAuthStateChanged((user) => {
  		if(user) {
  			setUser(user);
  		} else {
  			setUser(null);
  		}
  	});

  	return unsubscribe;
  }, []);


  return (
    <BrowserRouter>
      <div className="app">
        {/* {loading && <Loading />} */}
        <Header/>
        <Routes>
          <Route path="/about" element={<About />} />
             
          <Route
            path="/login"
            element={user ? <Navigate to="/profile" /> : <LoginScreen/>}
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
          
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
