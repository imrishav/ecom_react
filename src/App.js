import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import "./pages/homepage/homepage.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Auth from "./pages/auth/auth";
import { authentication, createUserProfileDoc } from "./firebase/firebase";

// function App() {
//   const [currentUser, setcurrentUser] = useState();
//   const [user, setUser] = useState();

//   const aut = () => {
//     authentication.onAuthStateChanged(async (user) => {
//       if (user) {
//         const userRef = await createUserProfileDoc(user);

//         userRef.onSnapshot((snapshot) => {
//           setcurrentUser({
//             id: snapshot.id,
//             ...snapshot.data(),
//           });
//         });
//         console.log("inside", currentUser);
//       }
//       setcurrentUser(user);
//       // createUserProfi  leDoc(user);
//     });
//   };

//   useEffect(() => {
//     aut();
//   });
//   return (
//     <div className="App">
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/shop" component={ShopPage} />
//         <Route path="/signin" component={Auth} />
//       </Switch>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = authentication.onAuthStateChanged(
      async (user) => {
        if (user) {
          const userRef = await createUserProfileDoc(user);

          userRef.onSnapshot((snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });

            console.log(this.state);
          });
        }

        this.setState({ currentUser: user });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
