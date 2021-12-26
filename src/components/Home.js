import React from 'react';

import { userAuth } from '../services/firebase'

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => userAuth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;