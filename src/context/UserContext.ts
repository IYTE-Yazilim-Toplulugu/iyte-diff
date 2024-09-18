// context/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { User } from '../models/User';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for App Router

interface UserContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
