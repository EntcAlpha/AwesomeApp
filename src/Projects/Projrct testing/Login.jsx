import React, { useState } from 'react';
import { db } from "./Firebase";
import { addDoc, collection } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [err, setErr] = useState(false);
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        {err && <span>Something went wrong</span>}
      </form>
    </div>
  );
};

export default Login;

 