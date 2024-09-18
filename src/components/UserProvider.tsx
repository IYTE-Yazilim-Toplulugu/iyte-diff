"use client"
import { UserContext } from "@/context/UserContext";
import { Role, User } from "@/models/User";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const UserProvider = ({ children } : Readonly<{children: React.ReactNode}>) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
  
    const login = async (username: string, password: string) => {
      try {
        const response = await axios.post('http://localhost:8080/user/login', { username, password });
        const userData: User = response.data;
        setUser(userData);
        console.log(userData.userRole == "INSTRUCTOR");
  
        // Store JWT token (assuming the backend sends it)
        const token = response.data.token;
        localStorage.setItem('token', token);
  
        // Redirect based on user role
        if (userData.userRole == "INSTRUCTOR") {
        router.push('/admin-panel');
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Login failed', error);
      }
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('token');
      router.push('/login');
    };
  
    const isAuthenticated = !!user;

    const sessionLogin = () => {

    }
  
    return (
      <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
        {children}
      </UserContext.Provider>
    );
  };