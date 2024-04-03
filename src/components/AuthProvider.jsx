/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import auth from "../firebase/firebase.config"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = { createUser, setUser, user ,loginUser}
    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
