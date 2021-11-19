import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [isLogining, setIsLogining] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleOnSubmit = e => {
        e.preventDefault();
    }

    const handleUserName = e => {
        setUserName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmitForm = () => {
        console.log(email, password);
        createAccountUsingEmailAndPassword(email, password);
    }
    // const handleSubmitLogin = () => {
    //     console.log(email, password);
    //     signInUsingEmailAndPassword(email, password);
    // }

    //create email 
    const createAccountUsingEmailAndPassword = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                // setUser(result.user);
                updateUserName(userName);
                // emailVarification();
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => setLoading(false));
    }

    const updateUserName = (userName) => {
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: " "
        }).then((result) => {
            // console.log(result.user);
        }).catch((error) => {
            console.log(error.message);
        });
    }

    // const emailVarification = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then((result) => {
    //             // console.log(result.user);
    //         }).catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    // const resetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //         .then((result) => {
    //             // console.log(result.user);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // }

    const signInUsingEmailAndPassword = () => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        // .then((result) => {
        //     setUser(result.user);
        // }).catch((error) => {
        //     console.log(error.message);
        // }).finally(() => setLoading(false));
    }

    const signInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // }).catch((error) => {
        //     console.log(error.message);
        // }).finally(() => setLoading(false));
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
            setIsLogining(false);
        });
        return () => unsubscribed;
    }, [auth, isLoading]);

    const signOutUsingGoogle = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                console.log('logOut successfull');
                setUser({});
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => setLoading(false));
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/gym.json')
            .then(res => res.json())
            .then(data => setData(data))
            .finally(() => {
                setLoading(false)
            });

    }, []);

    return {
        isLoading,
        isLogining,
        data,
        user,
        handleOnSubmit,
        handleUserName,
        handleEmail,
        handlePassword,
        handleSubmitForm,
        signInUsingEmailAndPassword,
        signInUsingGoogle,
        signOutUsingGoogle
    }

}

export default useFirebase;