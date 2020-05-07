import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import "./pages/homepage/homepage.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";

import Header from "./components/header/header";
import Auth from "./pages/auth/auth";
import { setCurrentUser } from "./redux/user/actions";
import { authentication, createUserProfileDoc } from "./firebase/firebase";

function App(props) {
  // const [currentUser, setcurrentUser] = useState();
  // const [user2, setUser] = useState(false);
  // const [abc, setAbc] = useState({});
  console.log(props);
  const { setCurrentUser, currentUser } = props;
  // const aut = () =>
  //   authentication.onAuthStateChanged(async (user) => {
  //     if (user.email) {
  //       setUser(true);
  //       const userRef = await createUserProfileDoc(user);

  //       userRef.onSnapshot((snapshot) => {
  //         setcurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data(),
  //         });
  //       });
  //       console.log("inside", currentUser);
  //     }
  //     // setcurrentUser(user);
  //     // createUserProfi  leDoc(user);
  //   });

  useEffect(() => {
    // aut();
    authentication.onAuthStateChanged((user) => {
      if (user) {
        createUserProfileDoc(user).then((res) => {
          res.onSnapshot((snap) => {
            console.log(snap.data());
            setCurrentUser({ id: snap.id, data: { ...snap.data() } });
            // console.log(currentUser);
          });
        });
        // console.log(currentUser);
      } else {
        console.log("iddd");
      }
      // setcurrentUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user, test }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
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
