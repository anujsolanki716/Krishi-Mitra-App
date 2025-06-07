
import React, { createContext } from 'react';

export enum Language {
  EN = 'en',
  HI = 'hi', // Hindi
}

export interface AppContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isAuthenticated: boolean;
  login: () => void; 
  logout: () => void;
  isLoadingAuth: boolean; // Added to indicate auth status loading
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
