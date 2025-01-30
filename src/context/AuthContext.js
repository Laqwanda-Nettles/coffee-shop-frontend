import useAuthHook from "@/hooks/auth";
import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { user, token, isAuthenticated, clearAuth } = useAuthHook();

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
