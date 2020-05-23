import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import "./pages/homepage/homepage.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Time from "./components/timer/time";
import Header from "./components/header/header";
import Auth from "./pages/auth/auth";
import CheckoutPage from "./pages/checkout/checkout";
import { setCurrentUser, checkUserSession } from "./redux/user/actions";
import { selectCurrentUser } from "./redux/user/user-selectors";
import {
  authentication,
  createUserProfileDoc,
  addCollectionAndDocuments,
} from "./firebase/firebase";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPre } from "./redux/shop/shop-selector";

function App(props) {
  const { setCurrentUser, currentUser } = props;
  console.log(currentUser);

  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();
  }, [currentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: null,
//     };
//   }
//   unsubscribeFromAuth = null;
//   componentDidMount() {
//     this.unsubscribeFromAuth = authentication.onAuthStateChanged(
//       async (user) => {
//         if (user) {
//           const userRef = await createUserProfileDoc(user);

//           userRef.onSnapshot((snapShot) => {
//             this.setState({
//               currentUser: {
//                 id: snapShot.id,
//                 ...snapShot.data(),
//               },
//             });

//             console.log(this.state);
//           });
//         }

//         this.setState({ currentUser: user });
//       }
//     );
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }
//   render() {
//     return (
//       <div className="App">
//         <Header currentUser={this.state.currentUser} />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/signin" component={Auth} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
