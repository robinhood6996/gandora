import {
	createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile,
	onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider
} from '@firebase/auth';
import { async } from '@firebase/util';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	onAuthStateChanged(auth, user => {
	// 		if (user) {
	// 			let obj = {}
	// 			obj.name = user?.displayName;
	// 			obj.email = user?.email;
	// 			obj.photo = user?.photoURL
	// 			setUser(obj);
	// 			console.log('user', user)
	// 		} else {
	// 			setUser({})
	// 		}
	// 		setIsLoading(false)
	// 	})
	// }, [auth])

	//Signup user
	const signupUser = (email, pass, name) => {

		createUserWithEmailAndPassword(auth, email, pass)
			.then(res => {
				const { user } = res;
				setUser(user)
				updateProfile(auth.currentUser, {
					displayName: name
				}).then(() => {
					console.log('Thanks for creating account with us');
				})
			}).catch(error => {
				// Swal.fire({
				//     icon: 'error',
				//     title: 'Oops...',
				//     text: `${error.message}`
				// })
				console.log(error.message);
			})
	}


	//Signin Function
	const signInUser = (email, password) => {
		setIsLoading(true);
		return signInWithEmailAndPassword(auth, email, password)
	}

	//Google Signin
	const googleProvider = new GoogleAuthProvider();
	const googleSingIn = async () => {
		setIsLoading(true)
		return signInWithPopup(auth, googleProvider)
			.then(res => {
				// setUser(res.user);
				// navigate('/');
				return res.user
			})
			.catch(error => {
				console.log(error.message);
				return {}
			}).finally(() => setIsLoading(false));
	}

	//Facebook Signin
	const fbProvider = new FacebookAuthProvider();
	const facebookSignin = async () => {
		setIsLoading(true)
		return signInWithPopup(auth, fbProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;

				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				const credential = FacebookAuthProvider.credentialFromResult(result);
				const accessToken = credential.accessToken;
				console.log('user', user);
				setIsLoading(false)
				return user
			})
			.catch((error) => {

				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = FacebookAuthProvider.credentialFromError(error);
				console.log('user', errorMessage);
				setIsLoading(false)
				return {}
			});
	}

	//Login with twitter
	const twitterProvider = new TwitterAuthProvider();
	const signInWithTwitter = async () => {
		setIsLoading(true);
		return signInWithPopup(auth, twitterProvider)
			.then((result) => {
				// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
				// You can use these server side with your app's credentials to access the Twitter API.
				// const credential = TwitterAuthProvider.credentialFromResult(result);
				// const token = credential.accessToken;
				// const secret = credential.secret;

				// The signed-in user info.
				const user = result.user;
				console.log('user', user)
				return user
				// ...
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				// const email = error.customData.email;
				// The AuthCredential type that was used.
				// const credential = TwitterAuthProvider.credentialFromError(error);
				console.log('error', errorMessage)
				return {}
			});
	}

	//Signout
	const signOutUser = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// history.push('/login');
				setUser({});

			}).catch(error => {
				// Swal.fire({
				//     icon: 'error',
				//     title: 'Oops...',
				//     text: `${error.message}`
				// })
				console.log(error.message);
			}).finally(() => setIsLoading(false));
	}

	return {
		user,
		setUser,
		signInUser,
		signupUser,
		signOutUser,
		googleSingIn,
		isLoading,
		facebookSignin,
		signInWithTwitter
	};
};

export default useFirebase;