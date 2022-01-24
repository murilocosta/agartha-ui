import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch } from "../features/hooks";
import { setCredentials } from "../features/auth/authSlice";
import { setProfile } from "../features/survivor/survivorSlice";

function AppLogout(): React.ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCredentials(undefined));
    dispatch(setProfile(undefined));
  }, [dispatch]);

  return (
    <Navigate to='/' />
  );
}

export default AppLogout;
