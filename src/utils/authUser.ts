import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuthV2 } from '@redux/actions/loginActions'

const auth = getAuth();

export function useAuth() {
  const dispatch: any = useDispatch();
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        dispatch(setUserAuthV2(user))
      } else {
        setUser(undefined);
        dispatch(setUserAuthV2(undefined))
      }
    });
    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
