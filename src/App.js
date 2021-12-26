import { useState, useEffect } from 'react';

import Login from './components/Login';
import Home from './components/Home';
import firebase from './services/firebase';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.userAuth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, []);

  console.log(user);

  return (
    <div>
      {user ? <Home user={user} /> : <Login />}
    </div>
  );
}

export default App;