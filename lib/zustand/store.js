import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create((set) => ({
  activeUser: [],
  setActiveUser: (activeUser) => set({ activeUser }),
}));
