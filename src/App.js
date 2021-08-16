import React from "react";
import {Switch,BrowserRouter as Router} from "react-router-dom"
import * as ROUTES from "./Constants/Routes";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Browse from "./pages/browse";
import {IsUserRedirect,ProtectedRoute} from "./Helpers/Routes"
import useAuthListener from "./Hooks/use-auth-listener"
function App() {
  const {user}=useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;

// BrowserRouter handle history 
// Route Path to be followed to get the page with that Container Items
// Always use exact path
// const user=useAuthListener();
//   return (
//     <Router>
//       <Switch>
//         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
//           <SignIn />
//         </IsUserRedirect>
//         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
//           <SignUp />
//         </IsUserRedirect>
//         <ProtectedRoute user={user} path={ROUTES.BROWSE}>
//           <Browse />
//         </ProtectedRoute>
//         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
//           <Home />
//         </IsUserRedirect>
//       </Switch>
//     </Router>
//   );
// return (
//   <Router>
//     <Switch>
//     <Route exact path={ROUTES.HOME}>
//       <Home/>
//     </Route>
//     <Route exact path={ROUTES.SIGN_UP}>
//       <SignUp/>
//     </Route>
//     <Route exact path={ROUTES.SIGN_IN}>
//       <SignIn/>
//     </Route>
//     <Route exact path={ROUTES.BROWSE}>
//       <Browse/>
//     </Route>
//     </Switch>
//   </Router>
// );