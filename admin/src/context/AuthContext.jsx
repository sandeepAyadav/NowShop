import React, { Children, createContext } from 'react';
export const authDataContext = createContext();
function AuthContext({ Children }) {
  let serverUrl = 'http://localhost:8001';
  let value = {
    serverUrl,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>{Children}</authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
