import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "./Firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.elements.file.files[0];

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
        await updateProfile(user, {
          displayName,
        });
        await setDoc(doc(collection(db, "users"), user.uid), {
          displayName,
          email,
        }); 
        await setDoc(doc(collection(db,"userChats"),user.uid),{})
      

      console.log("Registration successful:", user);
    } catch (error) {
      console.log("Registration error:", error);
      setErr(true);
    } 
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrap">
          <span className="logo">My Chat</span>s
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
          <input type="displayName" name="displayName" placeholder="displayName" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button >Sign up</button>
            {err && <span>Something went wrong</span>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
