import React, { createContext, useContext, useCallback, useState, useEffect, useMemo } from "react";
import { useNavigate } from "@remix-run/react";
import PocketBase from "pocketbase";
import { jwtDecode } from "jwt-decode";
import { useInterval } from "usehooks-ts";
import ms from "ms";

const BASE_URL = "http://127.0.0.1:8090";
const fiveMinutesInMs = ms("5 minutes");
const twoMinutesInMs = ms("2 minutes");

const PocketContext = createContext(null);

export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const pb = useMemo(() => new PocketBase(BASE_URL), []);
  const [token, setToken] = useState<string | null>(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, [pb.authStore]);

  const register = useCallback(async (email: string, password: string) => {
    return await pb
      .collection("users")
      .create({ email, password, passwordConfirm: password });
  }, [pb]);

  const login = useCallback(async (email: string, password: string) => {
    const authData = await pb.collection("users").authWithPassword(email, password);
    console.log(authData)
    navigate("/"); // Redirect after successful login
    return authData;
  }, [pb, navigate]);

  const logout = useCallback(() => {
    pb.authStore.clear();
    navigate("/"); // Redirect to home page after logout
  }, [pb, navigate]);
  const refreshSession = useCallback(async () => {
    if (!pb.authStore.isValid || !token) return;
    const decoded = jwtDecode<{ exp: number }>(token);
    const tokenExpiration = decoded.exp;
    const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000;
    if (tokenExpiration < expirationWithBuffer) {
      try {
        await pb.collection("users").authRefresh();
      } catch (error) {
        console.error("Failed to refresh auth token:", error);
        logout(); // Logout if refresh fails
      }
    }
  }, [token, logout, pb]);
  useInterval(refreshSession, token ? twoMinutesInMs : null);
  const contextValue = useMemo(() => ({
    register,
    login,
    logout,
    user,
    token,
    pb,
  }), [register, login, logout, user, token, pb]);

  return (
    <PocketContext.Provider value={contextValue}>
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => {
  const context = useContext(PocketContext);
  if (context === null) {
    throw new Error("usePocket must be used within a PocketProvider");
  }
  return context;
};