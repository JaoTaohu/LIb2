import "./App.css"
import { useContext } from "react";
import App from "./App";
import Signup from "./Signup";
import { BrowserRouter, Router, Route, Redirect, Switch }from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Routing() {
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Redirect to="signup"/>
    }

    return children
  }
  return (
    <BrowserRouter>
    <Router>
      <Switch path="/">
        <Route index element={
          <ProtectedRoute>
            <App/>
          </ProtectedRoute>
        }/>
        <Route exact path="app" component={App}/>
        {/* <Route path="login" element={Login}/> */}
        <Route exact  path="signup" component={Signup}/>
      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default Routing;