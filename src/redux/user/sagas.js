import { takeLatest, put, all, call } from "redux-saga/effects";

import { UserActionTypes } from "./userActions";
import axios from "axios";

import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./actions";

import { Generate } from "../../utils/generateDetails";

import {
  googleProvider,
  authentication,
  createUserProfileDoc,
  getCurrentUser,
} from "../../firebase/firebase";

export function* getSnaphotUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth, additionalData);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* singInWithGoogle() {
  try {
    const { user } = yield authentication.signInWithPopup(googleProvider);
    yield getSnaphotUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// export function* signInWithEmail({ payload: { email, password } }) {
//   console.log(email, password);
//   try {
//     const { user } = yield authentication.signInWithEmailAndPassword(
//       email,
//       password
//     );
//     const userRef = yield call(createUserProfileDoc, user);
//     const userSnapShot = yield userRef.get();
// yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

//Local Login
export function* signInWithEmail({ payload: { email, password } }) {
  console.log(email, password);
  try {
    const { data } = yield axios({
      method: "POST",
      url: "http://localhost:3001/users/login",
      headers: { "Content-Type": "application/json" },
      data: {
        email: email,
        password: password,
      },
    });
    localStorage.setItem("token", data.data.token);
    yield put(signInSuccess(data.data));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    console.log(userAuth);
    if (!userAuth) return;
    yield getSnaphotUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    authentication.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const { user } = yield authentication.createUserWithEmailAndPassword(
//       email,
//       password
//     );
//     yield put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//   }
// }

//Local DB SIGNUP

export function* signUp({
  payload: { email, password, confirmPassword, displayName },
}) {
  // "name" : "Rishav",
  // "email": "admin@live.com",
  // "password": "123456",
  // "passwordConfirm": "123456"

  // http://localhost:3001/users/signup

  const user = {
    name: displayName,
    email,
    password,
    passwordConfirm: confirmPassword,
  };

  try {
    const newUser = yield axios({
      method: "POST",
      url: "http://localhost:3001/users/signup",
      headers: { "Content-Type": "application/json" },
      data: {
        name: displayName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      },
    });

    console.log("after signup", newUser);
  } catch (error) {
    yield put(signInFailure(error));
  }
  // try {
  //   const { user } = yield authentication.createUserWithEmailAndPassword(
  //     email,
  //     password
  //   );
  //   yield put(signUpSuccess({ user, additionalData: { displayName } }));
  // } catch (error) {
  //   yield put(signUpFailure(error));
  // }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnaphotUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, singInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
