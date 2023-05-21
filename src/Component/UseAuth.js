import { useState, useEffect } from 'react';
import { auth } from './firebase'; // import your firebase auth instance

function UseAuth() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // alert("inside user");
        setLoggedIn(true);
      } else {
        // alert("user false");
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return loggedIn;
}

export default UseAuth;