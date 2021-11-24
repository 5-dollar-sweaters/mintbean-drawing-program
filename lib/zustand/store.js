import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create((set) => ({
  activeUser: {},
  setActiveUser: (activeUser) => set({ activeUser }),
  brushRadius1: 2,
  setBrushRadius1: (brushRadius1) => set({ brushRadius1 }),
  lazyRadius1: 1,
  setLazyRadius1: (lazyRadius1) => set({ lazyRadius1 }),
  brushColor: '#000000',
  setBrushColor: (brushColor) => set({ brushColor }),
  canvasRef: {},
  setCanvasRef: (canvasRef) => set({ canvasRef }),
}));

export const useSaveStore = create((set) => ({
  showSaveBox: false,
  setShowSaveBox: (showSaveBox) => set({ showSaveBox }),
}));

export const useControlStore = create((set) => ({
  showControls: false,
  setShowControls: (showControls) => set({ showControls }),
  colorControl: false,
  setColorControl: (colorControl) => set({ colorControl }),
  saveControl: false,
  setSaveControl: (saveControl) => set({ saveControl }),
  loadControl: false,
  setLoadControl: (loadControl) => set({ loadControl }),
  control: 'color',
  setControl: (control) => set({ control }),
}));
