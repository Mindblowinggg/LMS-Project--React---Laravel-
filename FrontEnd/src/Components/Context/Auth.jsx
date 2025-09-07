import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
  const userInfo = localStorage.getItem('userIInfolms');
  const [user , setuser] =useState(userInfo);

  const login=(user)=>{
    setuser(user);
  }

  const logout=()=>{
    localStorage.removeItem('userIInfolms');
    setuser(null)
  }

  return <AuthContext.Provider value={{
    user , login ,logout
  }}>
    {children}
  </AuthContext.Provider>
}