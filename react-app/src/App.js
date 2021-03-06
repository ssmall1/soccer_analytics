import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Match from "./components/Match";
import PageNotFound from "./components/PageNotFound";
import { authenticate } from "./store/session";

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  let navComponent;

  if (user != null) {
    navComponent = (
      <NavBar />
    )
  } else {
    navComponent = (
      <>
      </>
    )
  }


  return (
    <BrowserRouter>
      {navComponent}
      <Switch>
        <Route path="/welcome" exact={true}>
          <Splash />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <Home />
        </ProtectedRoute>
        <ProtectedRoute Route path="/matches/:matchKey" exact={true}>
          <Match />
        </ProtectedRoute>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
