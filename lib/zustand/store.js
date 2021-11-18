import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create((set) => ({
  activeUser: [],
  setActiveUser: (activeUser) => set({ activeUser }),
  brushRadius1: 12,
  setBrushRadius1: (brushRadius1) => set({ brushRadius1 }),
  lazyRadius1: 12,
  setLazyRadius1: (lazyRadius1) => set({ lazyRadius1 }),
  brushColor: '#000000',
  setBrushColor: (brushColor) => set({ brushColor }),
  canvasRef: [],
  setCanvasRef: (canvasRef) => set({ canvasRef }),
}));
